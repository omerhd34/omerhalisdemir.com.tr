const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const skillsData = require("./data/skills-data");
const languagesData = require("./data/languages-data");
const translationsData = require("./data/translations-data");
const projectsData = require("./data/projects-data");

async function seedLanguages() {
  console.log("\n📚 Languages tablosu dolduruluyor...");
  await prisma.language.deleteMany({});

  const createdLanguages = {};

  for (const lang of languagesData) {
    const created = await prisma.language.create({ data: lang });
    createdLanguages[lang.code] = created;
    console.log(`✅ ${lang.name} (${lang.code})`);
  }

  return createdLanguages;
}

async function seedTranslations(languages) {
  console.log("\n🌍 Translations tablosu doldur uluyor...");
  await prisma.translation.deleteMany({});
  await prisma.translationKey.deleteMany({});

  let count = 0;

  for (const item of translationsData) {
    const key = await prisma.translationKey.create({
      data: { keyPath: item.keyPath, category: item.category },
    });

    for (const [langCode, text] of Object.entries(item.translations)) {
      const lang = languages[langCode];
      if (lang) {
        await prisma.translation.create({
          data: {
            keyId: key.id,
            languageId: lang.id,
            translationText: text,
          },
        });
      }
    }
    count++;
    console.log(`✅ ${item.keyPath}`);
  }

  console.log(`🎉 ${count} çeviri eklendi`);
}

async function seedSkills() {
  console.log("\n💻 Skills tablosu dolduruluyor...");
  await prisma.skill.deleteMany({});

  let count = 0;

  for (const skill of skillsData) {
    await prisma.skill.create({ data: skill });
    count++;
    console.log(`✅ ${skill.name}`);
  }

  console.log(`🎉 ${count} skill eklendi`);
}

async function seedProjects() {
  console.log("\n🚀 Projects tablosu doldururuyor...");
  await prisma.project.deleteMany({});

  let count = 0;

  for (const project of projectsData) {
    await prisma.project.create({ data: project });
    count++;
    console.log(`✅ ${project.titleTr}`);
  }

  console.log(`🎉 ${count} proje eklendi`);
}

async function main() {
  console.log("🌱 Veritabanı seed işlemi başlatılıyor...\n");
  console.log("=".repeat(50));

  try {
    const languages = await seedLanguages();
    await seedTranslations(languages);
    await seedSkills();
    await seedProjects();

    console.log("\n" + "=".repeat(50));
    console.log("✨ Tüm veriler başarıyla eklendi!");
    console.log("=".repeat(50) + "\n");
  } catch (e) {
    console.error("\n❌ Hata oluştu:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
