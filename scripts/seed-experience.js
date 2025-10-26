const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const experienceData = [
  {
    category: "education",
    titleTr: "Elektrik-Elektronik Mühendisliği",
    titleEn: "Electrical-Electronics Engineering",
    institutionTr: "İstanbul Ticaret Üniversitesi",
    institutionEn: "Istanbul Commerce University",
    period: "2016 - 2023",
    status: "completed",
    location: "İstanbul, Türkiye",
    gpa: "3.04 / 4.00",
    descriptionTr:
      "Elektrik-Elektronik Mühendisliği alanında lisans eğitimi aldım. Gömülü sistemler, devre tasarımı ve yazılım geliştirme konularında kapsamlı bilgi edindim.",
    descriptionEn:
      "I completed my undergraduate education in Electrical-Electronics Engineering. I gained comprehensive knowledge in embedded systems, circuit design, and software development.",
    technologies: [
      "SiCplusplus",
      "FaMicrochip",
      "SiArduino",
      "FaTools",
      "FaCalculator",
      "FaFlask",
      "FaAtom",
      "FaBrain",
    ],
    achievementsTr: [
      "Başarı belgesi",
      "Arduino tabanlı projeler geliştirme",
      "PCB tasarımı ve üretimi",
      "Gömülü sistemler programlama",
    ],
    achievementsEn: [
      "Certificate of achievement",
      "Arduino-based project development",
      "PCB design and production",
      "Embedded systems programming",
    ],
    icon: "FaGraduationCap",
    displayOrder: 1,
  },
  {
    category: "education",
    titleTr: "İngilizce Hazırlık Sınıfı",
    titleEn: "English Preparatory Class",
    institutionTr: "İstanbul Ticaret Üniversitesi",
    institutionEn: "Istanbul Commerce University",
    period: "2015 - 2016",
    status: "completed",
    location: "İstanbul, Türkiye",
    gpa: null,
    descriptionTr:
      "Akademik İngilizce eğitimi aldım. Teknik dokümantasyon okuma ve yazma becerilerimi geliştirdim.",
    descriptionEn:
      "I received academic English education. I developed my technical documentation reading and writing skills.",
    technologies: ["RiEnglishInput", "FaLanguage", "FaGlobe"],
    achievementsTr: [
      "Akademik İngilizce sertifikası",
      "Teknik dokümantasyon okuma yetkinliği",
      "İngilizce sunum becerileri",
    ],
    achievementsEn: [
      "Academic English certificate",
      "Technical documentation reading proficiency",
      "English presentation skills",
    ],
    icon: "FaLanguage",
    displayOrder: 2,
  },
  {
    category: "education",
    titleTr: "Lise Eğitimi",
    titleEn: "High School Education",
    institutionTr: "Anadolu Lisesi",
    institutionEn: "Anatolian High School",
    period: "2011 - 2015",
    status: "completed",
    location: "İstanbul, Türkiye",
    gpa: null,
    descriptionTr:
      "Anadolu Lisesi'nde lise eğitimimi tamamladım. Matematik ve fen bilimleri alanında güçlü bir temel oluşturdum.",
    descriptionEn:
      "I completed my high school education at Anatolian High School. I built a strong foundation in mathematics and science.",
    technologies: ["FaSchool", "FaCalculator", "FaFlask"],
    achievementsTr: [
      "Lise diploması",
      "Matematik olimpiyatlarına katılım",
      "Fen bilimleri projeleri",
    ],
    achievementsEn: [
      "High school diploma",
      "Participation in mathematics olympiads",
      "Science projects",
    ],
    icon: "FaSchool",
    displayOrder: 3,
  },

  // INTERNSHIPS & WORK
  {
    category: "internship",
    titleTr: "Stajyer Yazılım Geliştirici",
    titleEn: "Intern Software Developer",
    institutionTr: "Freelance & Kişisel Projeler",
    institutionEn: "Freelance & Personal Projects",
    period: "2020 - Devam Ediyor",
    status: "current",
    location: "İstanbul, Türkiye",
    gpa: null,
    descriptionTr:
      "Freelance projeler ve kişisel web geliştirme projeleri üzerinde çalışıyorum. Modern web teknolojileri kullanarak responsive ve kullanıcı dostu uygulamalar geliştiriyorum.",
    descriptionEn:
      "I work on freelance projects and personal web development projects. I develop responsive and user-friendly applications using modern web technologies.",
    technologies: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiExpress",
      "SiMongodb",
      "SiMysql",
      "SiTailwindcss",
      "FaGithub",
    ],
    achievementsTr: [
      "5+ web sitesi geliştirme",
      "Full-stack proje deneyimi",
      "RESTful API tasarımı",
      "Database yönetimi ve optimizasyonu",
      "Git ve GitHub ile versiyon kontrolü",
    ],
    achievementsEn: [
      "5+ website development",
      "Full-stack project experience",
      "RESTful API design",
      "Database management and optimization",
      "Version control with Git and GitHub",
    ],
    icon: "FaBriefcase",
    displayOrder: 4,
  },

  // CERTIFICATES
  {
    category: "certificates",
    titleTr: "Full Stack Development Bootcamp",
    titleEn: "Full Stack Development Bootcamp",
    institutionTr: "Techcareer.net",
    institutionEn: "Techcareer.net",
    period: "2024",
    status: "completed",
    location: "Online",
    gpa: null,
    descriptionTr:
      "Frontend ve Backend teknolojilerinde yoğun eğitim aldım. React, Node.js, MongoDB ve modern web geliştirme araçlarını kullanarak projeler geliştirdim.",
    descriptionEn:
      "I received intensive training in Frontend and Backend technologies. I developed projects using React, Node.js, MongoDB, and modern web development tools.",
    technologies: [
      "SiReact",
      "SiNextdotjs",
      "SiNodedotjs",
      "SiExpress",
      "SiMongodb",
      "SiJavascript",
      "SiBootstrap",
      "FaGitAlt",
    ],
    achievementsTr: [
      "Full Stack Development sertifikası",
      "Üstün başarı belgesi",
      "10+ proje tamamlama",
      "Modern web teknolojileri uzmanlığı",
      "Takım çalışması deneyimi",
    ],
    achievementsEn: [
      "Full Stack Development certificate",
      "Certificate of excellence",
      "10+ project completion",
      "Modern web technologies expertise",
      "Team collaboration experience",
    ],
    icon: "FaCertificate",
    displayOrder: 7,
  },
  {
    category: "certificates",
    titleTr: "AutoCAD Sertifikası",
    titleEn: "AutoCAD Certificate",
    institutionTr: "Autodesk",
    institutionEn: "Autodesk",
    period: "2020",
    status: "completed",
    location: "Online",
    gpa: null,
    descriptionTr:
      "2D ve 3D teknik çizim eğitimi aldım. PCB tasarımı ve mekanik parça çizimleri konusunda deneyim kazandım.",
    descriptionEn:
      "I received training in 2D and 3D technical drawing. I gained experience in PCB design and mechanical part drawings.",
    technologies: ["SiAutocad", "FaDraftingCompass", "FaCubes"],
    achievementsTr: [
      "AutoCAD sertifikası",
      "2D/3D teknik çizim yetkinliği",
      "PCB tasarım deneyimi",
    ],
    achievementsEn: [
      "AutoCAD certificate",
      "2D/3D technical drawing proficiency",
      "PCB design experience",
    ],
    icon: "FaCertificate",
    displayOrder: 8,
  },
  {
    category: "certificates",
    titleTr: "Cisco Networking Basics",
    titleEn: "Cisco Networking Basics",
    institutionTr: "Cisco Networking Academy",
    institutionEn: "Cisco Networking Academy",
    period: "2019",
    status: "completed",
    location: "Online",
    gpa: null,
    descriptionTr:
      "Temel ağ kavramları, IP adresleme, routing ve switching konularında eğitim aldım.",
    descriptionEn:
      "I received training in basic networking concepts, IP addressing, routing, and switching.",
    technologies: [
      "FaNetworkWired",
      "FaServer",
      "FaGlobeEurope",
      "FaShieldAlt",
    ],
    achievementsTr: [
      "Cisco Networking sertifikası",
      "Ağ protokolleri bilgisi",
      "IP adresleme ve subnetting",
    ],
    achievementsEn: [
      "Cisco Networking certificate",
      "Network protocols knowledge",
      "IP addressing and subnetting",
    ],
    icon: "FaCertificate",
    displayOrder: 9,
  },
];

async function seedExperience() {
  console.log("\n🚀 Experience tablosu dolduruluyor...");
  console.log("🗑️  Mevcut veriler temizleniyor...\n");

  await prisma.experience.deleteMany({});

  let successCount = 0;
  let errorCount = 0;

  for (const data of experienceData) {
    try {
      await prisma.experience.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.titleTr} başarıyla eklendi`);
    } catch (error) {
      errorCount++;
      console.error(`❌ ${data.titleTr} eklenirken hata:`, error.message);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log(
    `📊 Toplam: ${experienceData.length} | Başarılı: ${successCount} | Hata: ${errorCount}`
  );
  console.log("=".repeat(60));
  console.log(`\n🎉 Experience seed işlemi tamamlandı!\n`);
}

async function main() {
  try {
    console.log("🌱 Experience seed işlemi başlatılıyor...");
    console.log("=".repeat(60));

    await seedExperience();
  } catch (e) {
    console.error("\n❌ Genel hata oluştu:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log("✅ Veritabanı bağlantısı kapatıldı.\n");
  }
}

main();
