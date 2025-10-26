// scripts/migrate-mysql-to-mongodb.js
import mysql from "mysql2/promise";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// MySQL bağlantı ayarları
const mysqlConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "translations",
};

async function migrateLanguages(connection) {
  console.log("Migrating languages...");
  const [rows] = await connection.execute("SELECT * FROM languages");

  for (const row of rows) {
    await prisma.language.upsert({
      where: { code: row.code },
      update: {
        name: row.name,
      },
      create: {
        code: row.code,
        name: row.name,
      },
    });
  }
  console.log(`✓ Migrated ${rows.length} languages`);
}

async function migrateTranslationKeys(connection) {
  console.log("Migrating translation keys...");
  const [rows] = await connection.execute("SELECT * FROM translation_keys");

  const keyMap = new Map(); // MySQL ID -> MongoDB ID mapping

  for (const row of rows) {
    const key = await prisma.translationKey.create({
      data: {
        keyPath: row.key_path,
        category: row.category,
      },
    });
    keyMap.set(row.id, key.id);
  }

  console.log(`✓ Migrated ${rows.length} translation keys`);
  return keyMap;
}

async function migrateTranslations(connection, keyMap) {
  console.log("Migrating translations...");

  const [rows] = await connection.execute(`
    SELECT t.*, l.code as language_code 
    FROM translation t 
    JOIN languages l ON t.language_id = l.id
  `);

  for (const row of rows) {
    const language = await prisma.language.findUnique({
      where: { code: row.language_code },
    });

    const mongoKeyId = keyMap.get(row.key_id);

    if (language && mongoKeyId) {
      await prisma.translation.create({
        data: {
          keyId: mongoKeyId,
          languageId: language.id,
          translationText: row.translation_text,
        },
      });
    }
  }

  console.log(`✓ Migrated ${rows.length} translations`);
}

async function migrateSkills(connection) {
  console.log("Migrating skills...");
  const [rows] = await connection.execute(
    "SELECT * FROM skills ORDER BY display_order, id"
  );

  for (const row of rows) {
    await prisma.skill.create({
      data: {
        category: row.category,
        name: row.name,
        experience: row.experience,
        level: row.level,
        percentage: row.percentage,
        icon: row.icon,
        color: row.color || null,
        displayOrder: row.display_order || 0,
      },
    });
  }

  console.log(`✓ Migrated ${rows.length} skills`);
}

async function migrateExperience(connection) {
  console.log("Migrating experience...");
  const [rows] = await connection.execute(
    "SELECT * FROM experience ORDER BY display_order, id"
  );

  for (const row of rows) {
    // JSON parse for arrays
    const technologies = row.technologies ? JSON.parse(row.technologies) : [];
    const achievementsTr = row.achievements_tr
      ? JSON.parse(row.achievements_tr)
      : [];
    const achievementsEn = row.achievements_en
      ? JSON.parse(row.achievements_en)
      : [];

    await prisma.experience.create({
      data: {
        category: row.category,
        titleTr: row.title_tr,
        titleEn: row.title_en,
        institutionTr: row.institution_tr,
        institutionEn: row.institution_en,
        period: row.period,
        status: row.status,
        location: row.location,
        gpa: row.gpa,
        descriptionTr: row.description_tr,
        descriptionEn: row.description_en,
        technologies: technologies,
        achievementsTr: achievementsTr,
        achievementsEn: achievementsEn,
        icon: row.icon,
        displayOrder: row.display_order || 0,
      },
    });
  }

  console.log(`✓ Migrated ${rows.length} experiences`);
}

async function migrateProjects(connection) {
  console.log("Migrating projects...");
  const [rows] = await connection.execute(
    "SELECT * FROM projects ORDER BY display_order, id"
  );

  for (const row of rows) {
    // JSON parse for arrays and objects
    const technologies = row.technologies ? JSON.parse(row.technologies) : [];
    const featuresTr = row.features_tr ? JSON.parse(row.features_tr) : [];
    const featuresEn = row.features_en ? JSON.parse(row.features_en) : [];
    const metricsTr = row.metrics_tr ? JSON.parse(row.metrics_tr) : null;
    const metricsEn = row.metrics_en ? JSON.parse(row.metrics_en) : null;

    await prisma.project.create({
      data: {
        category: row.category,
        titleTr: row.title_tr,
        titleEn: row.title_en,
        descriptionTr: row.description_tr,
        descriptionEn: row.description_en,
        longDescriptionTr: row.long_description_tr,
        longDescriptionEn: row.long_description_en,
        status: row.status,
        technologies: technologies,
        featuresTr: featuresTr,
        featuresEn: featuresEn,
        liveUrl: row.live_url,
        githubUrl: row.github_url,
        teamTr: row.team_tr,
        teamEn: row.team_en,
        roleTr: row.role_tr,
        roleEn: row.role_en,
        metricsTr: metricsTr,
        metricsEn: metricsEn,
        displayOrder: row.display_order || 0,
      },
    });
  }

  console.log(`✓ Migrated ${rows.length} projects`);
}

async function main() {
  console.log("Starting MySQL to MongoDB migration...\n");

  let connection;

  try {
    // MySQL bağlantısı
    connection = await mysql.createConnection(mysqlConfig);
    console.log("✓ Connected to MySQL\n");

    // MongoDB'deki mevcut verileri temizle (opsiyonel)
    console.log("Cleaning existing MongoDB data...");
    await prisma.translation.deleteMany();
    await prisma.translationKey.deleteMany();
    await prisma.language.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.project.deleteMany();
    console.log("✓ Cleaned MongoDB\n");

    // Migration işlemleri
    await migrateLanguages(connection);
    const keyMap = await migrateTranslationKeys(connection);
    await migrateTranslations(connection, keyMap);
    await migrateSkills(connection);
    await migrateExperience(connection);
    await migrateProjects(connection);

    console.log("\n✓ Migration completed successfully!");
  } catch (error) {
    console.error("Migration error:", error);
    throw error;
  } finally {
    if (connection) {
      await connection.end();
    }
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
