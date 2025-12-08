const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const experienceData = [
 {
  category: "education",
  titleTr: "Elektrik-Elektronik Mühendisliği",
  titleEn: "Electrical-Electronics Engineering",
  institutionTr: "İstanbul Ticaret Üniversitesi",
  institutionEn: "Istanbul Commerce University",
  period: "2019 - 2024",
  status: "completed",
  location: "İstanbul, Türkiye",
  gpa: "2.65 / 4.00",
  descriptionTr:
   "Elektrik Elektronik Mühendisliği lisans eğitimim boyunca, elektrik devreleri, sinyal işleme, mikrodenetleyiciler, kontrol sistemleri ve güç elektroniği gibi temel alanlarda sağlam bir teorik altyapı kazandım. AutoCAD ve Autodesk Eagle ile teknik çizim ve PCB tasarımı yapma becerisi edindim. Proteus ve Arduino IDE gibi platformlarda devre simülasyonları gerçekleştirerek, teorik bilgiyi pratiğe dönüştürme yeteneğimi geliştirdim. Özellikle PCB tasarımı ve gömülü sistemler üzerine yoğunlaşarak, hem yazılım hem donanım alanında kendimi geliştirdim. Bu süreçte mühendislik problemlerine çözüm üretme, proje yönetimi ve teknik dokümantasyon hazırlama konularında deneyim kazandım. Edindiğim analitik düşünme ve problem çözme becerileri, yazılım geliştirme kariyerime güçlü bir temel oluşturdu.",
  descriptionEn:
   "Throughout my Electrical and Electronics Engineering degree, I built a solid theoretical foundation in core areas such as electrical circuits, signal processing, microcontrollers, control systems, and power electronics. I gained expertise in technical drawing and PCB design using AutoCAD and Autodesk Eagle, and performed circuit simulations on platforms like Proteus and Arduino IDE, developing my ability to transform theoretical knowledge into practice.  Focusing particularly on PCB design and embedded systems, I developed skills in both software and hardware domains. During this period, I gained experience in engineering problem-solving, project management, and technical documentation preparation. The analytical thinking and problem-solving abilities I acquired formed a strong foundation for my software development career.",
  technologies: [
   "MdElectricBolt",
   "FcElectronics",
   "SiAutocad",
   "SiAutodesk",
  ],
  achievementsTr: [],
  achievementsEn: [],
  icon: "FaGraduationCap",
  displayOrder: 1,
 },
 {
  category: "education",
  titleTr: "İngilizce Hazırlık Sınıfı",
  titleEn: "English Preparatory Class",
  institutionTr: "İstanbul Ticaret Üniversitesi",
  institutionEn: "Istanbul Commerce University",
  period: "2018 - 2019",
  status: "completed",
  location: "İstanbul, Türkiye",
  gpa: null,
  descriptionTr:
   "İngilizce hazırlık programını başarıyla tamamlayarak B1+ seviyesinde yetkinlik kazandım. Bu süreçte sadece dil becerilerimi geliştirmekle kalmadım, aynı zamanda uluslararası kaynaklara erişim ve global teknoloji topluluğuyla etkileşim kurma yeteneğimi güçlendirdim. Teknik dokümantasyon okuma ve yazılım geliştirme alanında İngilizce içeriklerle çalışabilme becerim bu dönemde olgunlaştı.",
  descriptionEn:
   "I successfully completed the English preparatory program and achieved B1+ proficiency. This experience not only enhanced my language skills but also opened doors to the global technology community. My ability to read technical documentation, learn from international resources, and communicate with software communities was developed during this period.",
  technologies: ["RiEnglishInput", "FaLanguage", "FaGlobe"],
  achievementsTr: [],
  achievementsEn: [],
  icon: "FaLanguage",
  displayOrder: 2,
 },
 {
  category: "education",
  titleTr: "Lise Eğitimi",
  titleEn: "High School Education",
  institutionTr: "Ataşehir Fen Bilimleri",
  institutionEn: "Ataşehir Science High School",
  period: "2014 - 2018",
  status: "completed",
  location: "İstanbul, Türkiye",
  gpa: null,
  descriptionTr:
   "Sayısal ağırlıklı eğitim programında matematik, fizik ve kimya alanlarında güçlü bir temel edindim. Analitik düşünme ve problem çözme becerilerimi geliştiren bu süreç, yazılım dünyasına olan ilgimi ateşledi ve akademik disiplinimi şekillendirdi. Bilimsel yaklaşım ve mantıksal düşünme yeteneğim, bugünkü kariyerimin temel taşlarını oluşturdu.",
  descriptionEn:
   "I built a strong foundation in mathematics, physics, and chemistry through a science-focused curriculum. This period shaped my analytical thinking and problem-solving skills, igniting my passion for software development and establishing my academic discipline. The logical reasoning abilities and scientific approach I gained during this time formed the cornerstone of my current career.",
  technologies: ["SiLibreofficemath", "SiWolframmathematica"],
  achievementsTr: [],
  achievementsEn: [],
  icon: "FaSchool",
  displayOrder: 3,
 },
 {
  category: "internship",
  titleTr: "Full Stack Developer",
  titleEn: "Full Stack Developer",
  institutionTr: "Freelancer",
  institutionEn: "Freelancer",
  period: "2025 - ...",
  status: "current",
  location: "Online",
  gpa: null,
  descriptionTr:
   "İnternet üzerinden çeşitli platformlarda freelance Full Stack Developer olarak çalışıyorum. Bu çalışma biçimi bana hem teknik becerilerimi geliştirme hem de farklı sektörlerden projelerle tanışma fırsatı sunuyor. Freelance dünyasında çalışmak, sürekli yeni zorluklarla karşılaşmak demek. Her proje farklı bir ihtiyaç, farklı bir teknoloji yığını ve farklı bir problem çözme yaklaşımı gerektiriyor. Bu çeşitlilik, beni hem teknik hem de kişisel olarak sürekli gelişmeye itiyor. Frontend tarafında React, Next.js ve modern CSS teknolojileriyle kullanıcı dostu, responsive ve performanslı arayüzler tasarlıyorum. Backend tarafında ise Node.js, Express.js, MongoDB ve MySQL kullanarak güvenilir API'ler geliştiriyorum. Freelance çalışmanın en değerli tarafı, farklı müşterilerle çalışırken kazandığım deneyim. Her proje, yeni bir öğrenme fırsatı ve portföyüme eklediğim bir başarı hikayesi. Zaman yönetimi, müşteri iletişimi ve problem çözme becerilerimin yanı sıra, teknik yetkinliklerimi de sürekli keskinleştiriyorum. Bu yolculukta en çok keyif aldığım şey, bir fikrin dijital bir ürüne dönüşmesine katkı sağlamak ve müşterilerimin hedeflerine ulaşmalarına yardımcı olmak. Her başarılı proje, bir sonraki için beni daha da motive ediyor.",
  descriptionEn:
   "I work as a freelance Full Stack Developer on various platforms across the internet. This way of working offers me the opportunity to both develop my technical skills and engage with projects from different industries. Working in the freelance world means constantly facing new challenges. Each project requires a different need, a different technology stack, and a different problem-solving approach. This diversity pushes me to grow continuously, both technically and personally. On the frontend side, I design user-friendly, responsive, and performant interfaces using React, Next.js, and modern CSS technologies. On the backend side, I develop reliable APIs using Node.js, Express.js, MongoDB and MySQL. The most valuable aspect of freelancing is the experience I gain while working with different clients. Each project is a new learning opportunity and a success story I add to my portfolio. Alongside time management, client communication, and problem-solving skills, I'm constantly sharpening my technical competencies as well. What I enjoy most about this journey is contributing to the transformation of an idea into a digital product and helping my clients achieve their goals. Every successful project motivates me even more for the next one.",
  technologies: [
   "FaHtml5",
   "FaCss3",
   "SiJavascript",
   "SiTypescript",
   "FaReact",
   "SiBootstrap",
   "SiTailwindcss",
   "SiNextdotjs",
   "SiNodedotjs",
   "SiExpress",
   "SiMongodb",
   "SiMysql",
   "MdDomain",
   "FaServer",
   "FaNetworkWired",
   "FaCloud",
   "FaDatabase",
   "FaGitAlt",
   "FaGithub",
  ],
  achievementsTr: [
   "E-ticaret platformları için ölçeklenebilir çözümler geliştirme",
   "Responsive ve performans odaklı web uygulamaları tasarlama",
   "RESTful API'ler ile backend sistemleri oluşturma",
   "MongoDB ve MySQL ile veritabanı tasarımı ve optimizasyonu",
   "React ve Next.js ile modern frontend uygulamaları geliştirme",
   "%95+ müşteri memnuniyet oranı sağlama",
   "Proje teslim sürelerini zamanında ve kaliteli bir şekilde yerine getirme",
  ],
  achievementsEn: [
   "Developing scalable solutions for e-commerce platforms",
   "Designing responsive and performance-oriented web applications",
   "Creating backend systems with RESTful APIs",
   "Database design and optimization with MongoDB and MySQL",
   "Developing modern frontend applications with React and Next.js",
   "Providing a 95%+ customer satisfaction rate",
   "Meeting project deadlines on time and with high quality",
  ],
  icon: "FaBookOpen",
  displayOrder: 4,
 },
 {
  category: "internship",
  titleTr: "Yazılım Stajyeri",
  titleEn: "Software Intern",
  institutionTr: "İksir İnternet Hizmetleri A.Ş.",
  institutionEn: "IXIRHOST",
  period: "2020",
  status: "completed",
  location: "İstanbul, Türkiye",
  gpa: null,
  descriptionTr:
   "Domain ve hosting hizmetleri sunan İksir İnternet Hizmetleri A.Ş.'de yazılım stajyeri olarak görev aldım. Bu süreçte web uygulaması geliştirme, Docker container teknolojileri ve Linux sistem yönetimi konularında pratik deneyim kazandım. Müşteri taleplerine yönelik çözümler üreterek, hosting altyapısı ve domain yönetim sistemleri üzerinde çalıştım. Gerçek zamanlı projelerde yer alarak, yazılım geliştirme süreçlerini ve ekip çalışmasını deneyimledim.",
  descriptionEn:
   "I worked as a Software Intern at İksir Internet Services Inc., a company providing domain and hosting services. During this period, I gained practical experience in web application development, Docker container technologies, and Linux system administration. I developed solutions for customer requirements while working on hosting infrastructure and domain management systems. By participating in real-time projects, I experienced software development processes and teamwork.",
  technologies: ["SiServerfault", "MdDomain", "FaServer", "FaCloud"],
  achievementsTr: [],
  achievementsEn: [],
  icon: "FaBriefcase",
  displayOrder: 5,
 },
 {
  category: "internship",
  titleTr: "Tasarım Stajyeri",
  titleEn: "Design Intern",
  institutionTr: "Tepaş",
  institutionEn: "Tepas",
  period: "2021",
  status: "completed",
  location: "İstanbul, Türkiye",
  gpa: null,
  descriptionTr:
   "Staj sürecimde AutoCAD programını aktif olarak kullanarak bina içi elektrik tesisatı tasarımı üzerine detaylı çalışmalar gerçekleştirdim. Aydınlatma, priz yerleşimi, buat noktaları ve kablo güzergahları gibi elektrik altyapı elemanlarının projelendirilmesini sağladım. Teknik çizimlerin hazırlanması, projelerin standartlara uygun olarak uygulanması ve saha kontrollerine yönelik süreçlerde aktif rol alarak pratik deneyim kazandım. Bu süreç, elektrik projelerinin planlama ve uygulama aşamalarını daha iyi kavramamı sağladı.",
  descriptionEn:
   "During my internship, I actively used AutoCAD to work on detailed electrical installation designs for buildings. I created project layouts involving lighting systems, socket placements, junction box positions, and cable routing. I gained hands-on experience in preparing technical drawings, ensuring compliance with relevant standards, and contributing to on-site project implementation processes. This experience significantly enhanced my understanding of planning and executing electrical infrastructure projects.",
  technologies: ["SiAutocad", "SiAutodesk"],
  achievementsTr: [],
  achievementsEn: [],
  icon: "FaCertificate",
  displayOrder: 6,
 },
 {
  category: "certificates",
  titleTr: "Full Stack Development",
  titleEn: "Full Stack Development",
  institutionTr: "Europe Coding School & Ecodation",
  institutionEn: "Europe Coding School & Ecodation",
  period: "2024",
  status: "completed",
  location: "Online",
  gpa: null,
  descriptionTr:
   "Bu eğitim programı kapsamında, modern web teknolojilerine kapsamlı bir giriş yaptım. HTML, CSS ve JavaScript gibi temel dillerden başlayarak, React ve Next.js gibi ileri seviye JavaScript framework'leri üzerine yoğunlaştım. Eğitim süresince, gerçek dünya senaryolarına uygun projeler geliştirerek hem frontend hem de backend alanlarında uygulamalı deneyim kazandım. Veritabanı yönetimi (SQL) ve sunucu taraflı programlama konularında da bilgi sahibi olarak, tam yığın (full stack) bir geliştirici olma yolunda önemli bir adım attım. Ayrıca, takım çalışması, proje yönetimi ve versiyon kontrol sistemleri (Git, GitHub) gibi yazılım geliştirme süreçlerinde kullanılan araçları aktif şekilde kullanarak, yazılım geliştirme disiplinlerini yerinde uyguladım. Bu eğitim sonucunda, modern ve kullanıcı dostu web uygulamaları geliştirebilecek bilgi ve yetkinliğe ulaştım.",
  descriptionEn:
   "As part of this training program, I received a comprehensive introduction to modern web technologies. I began with foundational languages ​​like HTML, CSS, and JavaScript, and then focused on advanced JavaScript frameworks like React and Next.js. Throughout the training, I developed projects tailored to real-world scenarios, gaining hands-on experience in both front-end and back-end areas. By gaining knowledge of database management (SQL) and server-side programming, I took a significant step toward becoming a full-stack developer. Furthermore, I actively employed software development tools such as teamwork, project management, and version control systems (Git, GitHub) to apply software development disciplines directly. As a result of this training, I gained the knowledge and competence to develop modern and user-friendly web applications.",
  technologies: [
   "FaHtml5",
   "FaCss3",
   "SiJavascript",
   "FaReact",
   "SiBootstrap",
   "SiNodedotjs",
   "SiExpress",
   "FaGithub",
  ],
  achievementsTr: [
   "Node.js ve Express ile RESTful API tasarımı ve backend geliştirme",
   "React kullanarak dinamik ve interaktif kullanıcı arayüzleri oluşturma",
   "SQL veritabanı tasarımı ve CRUD operasyonlarının implementasyonu",
   "Git ve GitHub ile versiyon kontrolü ve ekip çalışması deneyimi",
   "Responsive ve cross-browser uyumlu web uygulamaları geliştirme",
   "Full stack e-ticaret projesi geliştirerek frontend ve backend entegrasyonu",
   "Bootstrap ile modern ve kullanıcı dostu arayüz tasarımı",
  ],
  achievementsEn: [
   "RESTful API design and backend development with Node.js and Express",
   "Creating dynamic and interactive user interfaces using React",
   "SQL database design and implementation of CRUD operations",
   "Version control and team collaboration experience with Git and GitHub",
   "Developing responsive and cross-browser compatible web applications",
   "Full stack e-commerce project development with frontend and backend integration",
   "Modern and user-friendly interface design with Bootstrap",
  ],

  icon: "FaCertificate",
  displayOrder: 7,
 },
 {
  category: "certificates",
  titleTr: "React",
  titleEn: "React",
  institutionTr: "Udemy",
  institutionEn: "Udemy",
  period: "2023",
  status: "completed",
  location: "Online",
  gpa: null,
  descriptionTr: "Bu kurs kapsamında, React kütüphanesini sıfırdan öğrenerek modern web uygulamaları geliştirme yetkinliği kazandım. Eğitim boyunca, component tabanlı mimari yapısını kavrayarak yeniden kullanılabilir UI bileşenleri oluşturmayı öğrendim. React Hooks (useState, useEffect, useContext...) ile fonksiyonel component'lerde state yönetimi ve yan etkilerin kontrolünü gerçekleştirdim. React Router DOM kullanarak çok sayfalı single-page application (SPA) geliştirme becerisi edindim. Context API ile global state yönetimi yaparak, prop drilling sorununu çözdüm. Ayrıca, Bootstrap ve Tailwind CSS framework'leri ile responsive ve modern kullanıcı arayüzleri tasarlayarak, kullanıcı deneyimini ön planda tutan projeler geliştirdim.",
  descriptionEn: "Through this course, I gained the competence to develop modern web applications by learning the React library from scratch. Throughout the training, I learned to create reusable UI components by understanding the component-based architecture. I managed state and controlled side effects in functional components using React Hooks (useState, useEffect, useContext...). I acquired the skill to develop multi-page single-page applications (SPAs) using React Router DOM. By implementing global state management with Context API, I solved the prop drilling problem. Additionally, I developed projects that prioritize user experience by designing responsive and modern user interfaces with Bootstrap and Tailwind CSS frameworks.",
  technologies: [
   "FaReact",
   "SiBootstrap",
   "SiTailwindcss",
   "FaGithub",
  ],
  achievementsTr: [
   "React Hooks (useState, useEffect, useContext...) ile modern React geliştirme",
   "React component yapısı ve yeniden kullanılabilir komponent geliştirme",
   "React Router DOM ile çok sayfalı uygulama geliştirme",
   "Context API kullanarak state yönetimi",
   "Bootstrap ve Tailwind CSS ile responsive arayüz tasarımı",
  ],
  achievementsEn: [
   "React component structure and reusable component development",
   "Modern React development with React Hooks (useState, useEffect, useContext...)",
   "Multi-page application development with React Router DOM",
   "State management using Context API",
   "Responsive interface design with Bootstrap and Tailwind CSS",
  ],
  icon: "FaCertificate",
  displayOrder: 8,
 },
];

async function seedExperience() {
 await prisma.experience.deleteMany({});
 let successCount = 0;
 let errorCount = 0;

 for (const data of experienceData) {
  try {
   await prisma.experience.create({
    data: data,
   });
   successCount++;
  } catch (error) {
   errorCount++;
  }
 }
}

async function main() {
 try {
  await seedExperience();
 } catch (e) {
  process.exit(1);
 } finally {
  await prisma.$disconnect();
 }
}

main();
