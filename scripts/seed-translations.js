const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const languagesData = [
  { code: "TR", name: "Türkçe" },
  { code: "EN", name: "English" },
];

const translationsData = [
  {
    keyPath: "home.shortDescription",
    category: null,
    translations: {
      TR: "Web geliştirme tutkusuyla 4+ yıldır dijital dünyada iz bırakıyorum. Frontend'de React ve Next.js ile kullanıcıların gözlerini kamaştıran arayüzler tasarlarken, backend'de Node.js ve Express.js ile sağlam temeller atıyorum. MySQL ve MongoDB ile veri yönetiminde güçlü çözümler sunarak, her proje benim için bir sanat eseri haline geliyor: performanslı, erişilebilir ve kullanıcı dostu. Yeteneklerimle işinizi bir üst seviyeye taşımaya hazırım.",
      EN: "I've been making my mark in the digital world for over 4 years with a passion for web development. While crafting eye-catching interfaces with React and Next.js on the frontend, I build solid foundations with Node.js and Express.js on the backend. By delivering powerful solutions in data management with MySQL and MongoDB, every project becomes a work of art for me: performant, accessible, and user-friendly. Ready to elevate your business with my skills.",
    },
  },
  {
    keyPath: "about.journeyDescription",
    category: null,
    translations: {
      TR: "Yazılım geliştirme yolculuğum, üniversitede aldığım Elektrik-Elektronik Mühendisliği eğitimiyle başladı ve zamanla tutkuya dönüştü. Temel programlama dilleriyle (C & Java) attığım ilk adımlar, beni web teknolojilerinin büyüleyici dünyasına yönlendirdi. HTML, CSS ve JavaScript'le temelleri sağlamlaştırdıktan sonra, React ve Next.js gibi modern framework'lerle kullanıcı deneyimini zirveye taşıyan arayüzler geliştirmeye odaklandım. Backend dünyasında Node.js, Express.js, MongoDB ve MySQL ile API geliştirme deneyimi kazandım. Gömülü sistemler ve Arduino projelerinde de çalışarak, yazılımın fiziksel dünyayla buluştuğu noktaları keşfettim. Sürekli öğrenmeye ve kendimi geliştirmeye olan tutkum, beni yeni teknolojilere hızla adapte olabilen, problem çözmeye odaklı bir geliştirici yaptı. Her proje, benim için yeni bir öğrenme fırsatı ve büyüme alanı. Kodun gücüyle fark yaratan çözümler üretmeye devam ediyorum.",
      EN: "My software development journey began with my Electrical and Electronics Engineering degree at university and gradually transformed into a passion. My first steps with fundamental programming languages (C & Java) led me into the fascinating world of web technologies. After solidifying my foundation with HTML, CSS, and JavaScript, I focused on developing interfaces that elevate user experience to its peak using modern frameworks like React and Next.js. In the backend world, I gained experience in API development with Node.js, Express.js, MongoDB, and MySQL. By working on embedded systems and Arduino projects, I explored the intersection where software meets the physical world. My passion for continuous learning and self-improvement has made me a problem-solving focused developer who can rapidly adapt to new technologies. Every project is a new learning opportunity and growth area for me. I continue to create impactful solutions through the power of code.",
    },
  },
  {
    keyPath: "about.interestsDescription",
    category: null,
    translations: {
      TR: "Full Stack geliştirme dünyasında kendimi sürekli güncel tutmayı ve sınırları zorlamayı seviyorum. Frontend'de React ve Next.js ile etkileyici kullanıcı deneyimleri yaratırken, Backend'de Node.js, Express.js, MongoDB ve MySQL ile güçlü sistemler inşa etmek benim için tam bir tutku. UI/UX tasarımı ve kullanıcı deneyimi optimizasyonuyla sadece çalışan değil, aynı zamanda keyifle kullanılan uygulamalar geliştirmeye önem veriyorum. RESTful API tasarımı, veritabanı modelleme ve ölçeklenebilir mimari yapılar kurmak, en çok heyecanlandığım konular arasında. Açık kaynak topluluğuna katkıda bulunmak, yeni teknolojileri deneyimlemek ve modern web geliştirme trendlerini takip etmek benim için sürekli bir öğrenme yolculuğu. Temiz kod prensipleri, performans optimizasyonu ve problem çözme becerilerimi geliştirmek, her gün yaptığım işin ayrılmaz bir parçası.",
      EN: "I love staying current and pushing boundaries in the Full Stack development world. Creating impressive user experiences with React and Next.js on the frontend, while building robust systems with Node.js, Express.js, MongoDB, and MySQL on the backend is my true passion. With UI/UX design and user experience optimization, I prioritize developing applications that are not only functional but also enjoyable to use. RESTful API design, database modeling, and building scalable architectural structures are among the topics that excite me the most. Contributing to the open-source community, experimenting with new technologies, and following modern web development trends is a continuous learning journey for me. Improving my clean code principles, performance optimization, and problem-solving skills is an integral part of my daily work.",
    },
  },
];

async function seedLanguages() {
  await prisma.language.deleteMany({});

  const createdLanguages = {};

  for (const lang of languagesData) {
    try {
      const created = await prisma.language.create({
        data: lang,
      });
      createdLanguages[lang.code] = created;
    } catch (error) {}
  }

  return createdLanguages;
}

async function seedTranslations(languages) {
  await prisma.translation.deleteMany({});
  await prisma.translationKey.deleteMany({});

  let successCount = 0;

  for (const item of translationsData) {
    try {
      const translationKey = await prisma.translationKey.create({
        data: {
          keyPath: item.keyPath,
          category: item.category,
        },
      });

      for (const [langCode, text] of Object.entries(item.translations)) {
        const language = languages[langCode];
        if (language) {
          await prisma.translation.create({
            data: {
              keyId: translationKey.id,
              languageId: language.id,
              translationText: text,
            },
          });
        }
      }
      successCount++;
    } catch (error) {}
  }
}

async function main() {
  try {
    const languages = await seedLanguages();
    await seedTranslations(languages);
  } catch (e) {
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
