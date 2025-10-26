const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const projectsData = [
  {
    category: "web",
    titleTr: "Portfolio Web Sitesi",
    titleEn: "Portfolio Website",
    descriptionTr:
      "Next.js ve MongoDB kullanılarak geliştirilmiş modern ve dinamik kişisel portföy web sitesi",
    descriptionEn:
      "Modern and dynamic personal portfolio website developed using Next.js and MongoDB",
    longDescriptionTr:
      "Next.js 15, React 19, MongoDB ve Prisma teknolojileri kullanılarak geliştirilmiş, tam responsive tasarıma sahip kişisel portföy sitesi. Çok dilli destek, dark/light mode ve dinamik içerik yönetimi özellikleri bulunmaktadır.",
    longDescriptionEn:
      "Personal portfolio website with full responsive design, developed using Next.js 15, React 19, MongoDB and Prisma. Features include multi-language support, dark/light mode, and dynamic content management.",
    status: "completed",
    technologies: [
      "SiReact",
      "SiNextdotjs",
      "SiTailwindcss",
      "SiMongodb",
      "SiNodedotjs",
      "SiExpress",
    ],
    featuresTr: [
      "Responsive tasarım - tüm cihazlarda mükemmel görünüm",
      "Çok dilli destek (Türkçe/İngilizce)",
      "Dark/Light mode tema değiştirme",
      "Dinamik içerik yönetimi",
      "SEO optimize edilmiş",
      "Hızlı ve performanslı",
    ],
    featuresEn: [
      "Responsive design - perfect view on all devices",
      "Multi-language support (Turkish/English)",
      "Dark/Light mode theme switching",
      "Dynamic content management",
      "SEO optimized",
      "Fast and performant",
    ],
    liveUrl: "https://omerhalisdemir.com.tr",
    githubUrl: "https://github.com/omerhd34/omerhalisdemir.com.tr",
    teamTr: "Bireysel Proje",
    teamEn: "Individual Project",
    roleTr: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    metricsTr: [
      { label: "Sayfa Sayısı", value: "6" },
      { label: "Bileşen", value: "50+" },
      { label: "API Endpoint", value: "8" },
    ],
    metricsEn: [
      { label: "Pages", value: "6" },
      { label: "Components", value: "50+" },
      { label: "API Endpoints", value: "8" },
    ],
    displayOrder: 1,
  },
  {
    category: "web",
    titleTr: "E-Ticaret Platformu",
    titleEn: "E-Commerce Platform",
    descriptionTr: "Modern e-ticaret çözümü",
    descriptionEn: "Modern e-commerce solution",
    longDescriptionTr:
      "React ve Node.js kullanılarak geliştirilmiş kapsamlı e-ticaret platformu",
    longDescriptionEn:
      "Comprehensive e-commerce platform developed using React and Node.js",
    status: "current",
    technologies: ["SiReact", "SiNodedotjs", "SiMongodb", "SiExpress"],
    featuresTr: [
      "Ürün yönetimi",
      "Sepet işlemleri",
      "Ödeme entegrasyonu",
      "Admin paneli",
    ],
    featuresEn: [
      "Product management",
      "Cart operations",
      "Payment integration",
      "Admin panel",
    ],
    githubUrl: "https://github.com/omerhd34/ecommerce",
    teamTr: "2 Kişilik Takım",
    teamEn: "2-Person Team",
    roleTr: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    metricsTr: [
      { label: "Ürün Sayısı", value: "500+" },
      { label: "Kullanıcı", value: "100+" },
    ],
    metricsEn: [
      { label: "Products", value: "500+" },
      { label: "Users", value: "100+" },
    ],
    displayOrder: 2,
  },
  {
    category: "electronics",
    titleTr: "Arduino Tabanlı IoT Projesi",
    titleEn: "Arduino-Based IoT Project",
    descriptionTr: "Akıllı ev otomasyon sistemi",
    descriptionEn: "Smart home automation system",
    longDescriptionTr:
      "Arduino ve sensörler kullanılarak geliştirilmiş IoT tabanlı akıllı ev otomasyon projesi",
    longDescriptionEn:
      "IoT-based smart home automation project developed using Arduino and sensors",
    status: "completed",
    technologies: ["SiArduino", "SiCplusplus", "FaMicrochip"],
    featuresTr: [
      "Sıcaklık ve nem takibi",
      "Uzaktan kontrol",
      "Otomatik aydınlatma",
      "Mobil uygulama entegrasyonu",
    ],
    featuresEn: [
      "Temperature and humidity monitoring",
      "Remote control",
      "Automatic lighting",
      "Mobile app integration",
    ],
    githubUrl: "https://github.com/omerhd34/arduino-iot",
    teamTr: "Bireysel Proje",
    teamEn: "Individual Project",
    roleTr: "IoT Developer",
    roleEn: "IoT Developer",
    displayOrder: 3,
  },
];

async function seedProjects() {
  console.log("🗑️  Projects tablosu temizleniyor...");
  await prisma.project.deleteMany({});

  let successCount = 0;

  for (const data of projectsData) {
    try {
      await prisma.project.create({
        data: data,
      });
      successCount++;
      console.log(`✅ ${data.titleTr} eklendi`);
    } catch (error) {
      console.error(`❌ ${data.titleTr} eklenirken hata: ${error.message}`);
    }
  }

  console.log(
    `\n🎉 ${successCount}/${projectsData.length} adet proje başarıyla eklendi!`
  );
}

async function main() {
  try {
    await seedProjects();
  } catch (e) {
    console.error("❌ Hata:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
