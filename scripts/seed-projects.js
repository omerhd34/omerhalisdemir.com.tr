const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const projectsData = [
  {
    category: "web",
    titleTr: "Uzman Klinik Psikolog Nisa Demir",
    titleEn: "Expert Clinical Psychologist Nisa Demir",
    descriptionTr: "Proje yapımı devam etmektedir.",
    descriptionEn: "Project construction is ongoing.",
    longDescriptionTr: "Proje yapımı devam etmektedir.",
    longDescriptionEn: "Project construction is ongoing.",
    status: "current",
    technologies: [
      "SiNextdotjs",
      "SiReact",
      "SiTailwindcss",
      "SiJavascript",
      "SiMongoDB",
      "SiNodedotjs",
      "SiExpress",
      "FaGithub",
    ],
    featuresTr: [
      "Responsive tasarım",
      "Bileşen tabanlı mimari",
      "Güvenli ve Ölçeklenebilir Altyapı",
      "Server-side rendering",
      "Veritabanı entegrasyonu",
      "İletişim formu",
      "Dinamik içerik yönetimi",
    ],
    featuresEn: [
      "Responsive design",
      "Component-based architecture",
      "Secure and Scalable Infrastructure",
      "Server-side rendering",
      "Database integration",
      "Contact form",
      "Dynamic content management",
    ],
    liveUrl: "https://nisademir.com/",
    githubUrl: "https://github.com/omerhd34/nisa",
    teamTr: "Bireysel",
    teamEn: "Individual",
    roleTr: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    metricsTr: [
      { label: "Geliştirme Süresi", value: "..." },
      { label: "Boyut", value: "..." },
    ],
    metricsEn: [
      { label: "Development Time", value: "1 week" },
      { label: "Languages", value: "2" },
      { label: "Size", value: "603 MB" },
    ],
    displayOrder: 1,
  },
  {
    category: "web",
    titleTr: "Kişisel Portfolio Web Sitesi",
    titleEn: "Personal Portfolio Website",
    descriptionTr:
      "Modern tasarım anlayışıyla şekillendirdiğim ve gelişmiş teknolojik temeller üzerine inşa ettiğim bu portföy projesi, hem estetik hem de performans odaklı bir deneyim sunmak amacıyla tasarlandı. Her detayıyla sade, akıcı ve kullanıcı dostu bir yapı hedefledim. Bu proje, hem profesyonel gelişim yolculuğumun bir yansıması hem de gelecekteki projelere ilham kaynağı olacak bir vitrin niteliğindedir.",
    descriptionEn:
      "This portfolio project, shaped by a modern design approach and built upon advanced technological foundations, was designed to deliver an experience focused on both aesthetics and performance. I aimed for a simple, fluid, and user-friendly structure in every detail. This project is both a reflection of my professional development journey and a showcase that will inspire future projects.",
    longDescriptionTr:
      "Bu proje, JavaScript, React ve Next.js teknolojileriyle geliştirilen, modern tasarım prensiplerine dayalı kişisel bir portföy çalışmasıdır. Tailwind CSS ile stil tasarımı güçlendirilmiş, Node.js ve MongoDB altyapısıyla güvenli ve ölçeklenebilir bir yapı sağlanmıştır. Çoklu dil desteği, responsive tasarım, performans optimizasyonu ve component tabanlı mimari gibi modern yazılım yaklaşımlarını temel alır. Bu sayede proje; yeniden kullanılabilirlik, sürdürülebilirlik ve yüksek kullanıcı deneyimi açısından dikkat çekici bir çözüm sunar. Hedef, sade ama güçlü bir arayüzle profesyonel kimliğimi yansıtan bir dijital vitrin oluşturmaktır.",
    longDescriptionEn:
      "This project is a personal portfolio developed using JavaScript, React, and Next.js, built upon modern design principles. The visual design is enhanced with Tailwind CSS, while Node.js and MongoDB provide a secure and scalable backend structure. It embraces modern software approaches such as multi-language support, responsive design, performance optimization, and component-based architecture. As a result, the project stands out with its reusability, maintainability, and high-quality user experience. The goal is to create a clean yet powerful interface that reflects my professional identity through a modern digital showcase.",
    status: "completed",
    technologies: [
      "SiNextdotjs",
      "SiReact",
      "SiTailwindcss",
      "SiJavascript",
      "SiMysql",
      "SiNodedotjs",
      "SiExpress",
      "FaGithub",
    ],
    featuresTr: [
      "Responsive tasarım",
      "Bileşen tabanlı mimari",
      "Çok dilli destek (TR/EN)",
      "Güvenli ve Ölçeklenebilir Altyapı",
      "Server-side rendering",
      "Veritabanı entegrasyonu",
      "İletişim formu",
      "Dinamik içerik yönetimi",
      "Gelişmiş Animasyonlar",
    ],
    featuresEn: [
      "Responsive design",
      "Component-based architecture",
      "Multi-language support (TR/EN)",
      "Secure and Scalable Infrastructure",
      "Server-side rendering",
      "Database integration",
      "Contact form",
      "Dynamic content management",
      "Advanced animations",
    ],
    liveUrl: "https://omerhalisdemir.com.tr",
    githubUrl: "https://github.com/omerhd34/omerhalisdemir.com.tr",
    teamTr: "Bireysel",
    teamEn: "Individual",
    roleTr: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    metricsTr: [
      { label: "Geliştirme Süresi", value: "2 hafta" },
      { label: "Diller", value: "2" },
      { label: "Boyut", value: "603 MB" },
    ],
    metricsEn: [
      { label: "Development Time", value: "2 week" },
      { label: "Languages", value: "2" },
      { label: "Size", value: "603 MB" },
    ],
    displayOrder: 2,
  },
  {
    category: "web",
    titleTr: "Yazıcı Ticaret",
    titleEn: "Yazıcı Ticaret",
    descriptionTr:
      "Beyaz eşya mağazası çalışanları ile müşterilerin sorunsuz bir şekilde iletişim kurmasını sağlayan web sitesi",
    descriptionEn:
      "A website that allows customers to communicate seamlessly with appliance store employees",
    longDescriptionTr:
      "Yazıcı Ticaret, beyaz eşya sektöründe faaliyet gösteren köklü bir firmanın dijital katalog ve müşteri iletişim platformudur. Müşteriler, geniş ürün yelpazesini inceleyebilir, stoklarda bulunmayan veya özel ürünler için talepte bulunabilir ve bu taleplerin durumunu sistem üzerinden takip edebilirler. Platform, müşteri odaklı bir yaklaşımla geliştirilmiş olup, kullanıcılar ürün talebi oluşturma formunu doldurarak ihtiyaçlarını detaylı bir şekilde iletebilmektedir. Her talep için benzersiz bir takip numarası oluşturulur ve müşteriler bu numara ile taleplerinin güncel durumunu sorgulayabilirler. Entegre iletişim modülü sayesinde, müşteriler doğrudan firma yetkilileriyle iletişime geçebilir, ürünler hakkında detaylı bilgi alabilir veya teknik destek talep edebilirler. Güçlü admin paneli ile site yöneticileri, ürün ekleme/güncelleme, müşteri taleplerini yönetme, talep durumlarını güncelleme ve iletişim formlarını yanıtlama gibi işlemleri kolayca gerçekleştirebilmektedir. React.js, Next.js ve Node.js teknolojileriyle geliştirilen platform, MongoDB veritabanı ile desteklenerek yüksek performans ve güvenilirlik sağlamaktadır.",
    longDescriptionEn:
      "Yazıcı Ticaret is a digital catalog and customer communication platform for an established company operating in the home appliances sector. Customers can browse the extensive product range, submit requests for out-of-stock or special products, and track the status of these requests through the system.The platform has been developed with a customer-centric approach, allowing users to submit their needs in detail by filling out a product request form. A unique tracking number is generated for each request, and customers can check the current status of their requests using this number. Through the integrated communication module, customers can directly contact company representatives, obtain detailed information about products, or request technical support.With the powerful admin panel, site administrators can easily perform operations such as adding/updating products, managing customer requests, updating request statuses, and responding to contact forms. Developed with React.js, Next.js and Node.js technologies, the platform is supported by MongoDB database, ensuring high performance and reliability.",
    status: "completed",
    technologies: [
      "SiNextdotjs",
      "SiReact",
      "SiTailwindcss",
      "SiJavascript",
      "SiMongodb",
      "SiNodedotjs",
      "SiExpress",
      "FaGithub",
    ],
    featuresTr: [
      "Responsive tasarım",
      "Bileşen tabanlı mimari",
      "Güvenli ve Ölçeklenebilir Altyapı",
      "Server-side rendering",
      "Veritabanı entegrasyonu",
      "İletişim formu",
    ],
    featuresEn: [
      "Responsive design",
      "Component-based architecture",
      "Secure and Scalable Infrastructure",
      "Server-side rendering",
      "Database integration",
      "Contact form",
    ],
    liveUrl: "https://yazici.gen.tr/",
    githubUrl: "https://github.com/omerhd34/yaziciTicaret",
    teamTr: "Bireysel",
    teamEn: "Individual",
    roleTr: "Full Stack Developer",
    roleEn: "Full Stack Developer",
    metricsTr: [
      { label: "Geliştirme Süresi", value: "1 hafta" },
      { label: "Boyut", value: "603 MB" },
    ],
    metricsEn: [
      { label: "Development Time", value: "1 week" },
      { label: "Size", value: "603 MB" },
    ],
    displayOrder: 3,
  },
  {
    category: "electronics",
    titleTr: "Özel Arduino Uno Kartı Tasarımı",
    titleEn: "Custom Arduino Uno Board Design",
    descriptionTr:
      "Arduino Uno R3 modelinin hafızasını 256KB'ye çıkaran, 24LC512 EEPROM ve I²C destekli özel kart tasarımı.",
    descriptionEn:
      "A custom Arduino Uno R3 design enhanced with 256KB memory using 24LC512 EEPROM and I²C interface.",
    longDescriptionTr:
      "Bu projede, Arduino'nun bir modeli olan Arduino Uno R3'ün hafızasının artırılması hedeflenmiştir. Hafıza kapasitesi, 24LC512 seri EEPROM yongasıyla en az 256 KB seviyesine çıkarılmıştır. EEPROM, I²C protokolü ile Arduino'ya bağlanmıştır. 24LC512, 128 bayta kadar sayfa yazma desteği, rastgele ve ardışık okuma özelliklerine sahiptir. Bellek yongası; dirençler, kapasitörler ve transistörlerden oluşan bir depolama aygıtıdır. PCB tasarımı Autodesk EAGLE ile gerçekleştirilmiş, çift katmanlı yapı kullanılmıştır. Yazılım C/C++ dilinde geliştirilmiş, Wire kütüphanesi ile I²C iletişimi sağlanmıştır. Türkiye haritası şeklinde özel PCB tasarımı ile estetik ve fonksiyonel bir görünüm elde edilmiştir.",
    longDescriptionEn:
      "This project aims to enhance the memory of Arduino Uno R3 by integrating a 24LC512 serial EEPROM chip. The system increases memory capacity to at least 256KB using I²C communication. The 24LC512 supports page writes up to 128 bytes and allows both random and sequential reads. The memory chip is composed of resistors, capacitors, and transistors and functions as a storage device, either temporarily (RAM) or permanently (ROM). A double-layer PCB was designed in Autodesk EAGLE with a custom Turkey map shape for aesthetic and functional appeal. The firmware was developed in C/C++ using the Wire library for I²C communication.",
    status: "completed",
    technologies: ["SiArduino", "SiCplusplus", "FaMicrochip", "FaTools"],
    featuresTr: [
      "256KB genişletilmiş EEPROM kapasitesi",
      "24LC512 EEPROM yongası entegrasyonu",
      "I2C protokolü ile haberleşme",
      "Çift katmanlı PCB tasarımı",
      "Autodesk EAGLE ile şematik tasarım",
      "C programlama dili ile firmware geliştirme",
      "Wire kütüphanesi I2C implementasyonu",
    ],
    featuresEn: [
      "256KB extended EEPROM capacity",
      "24LC512 EEPROM chip integration",
      "Communication via I2C protocol",
      "Double-layer PCB design",
      "Schematic design with Autodesk EAGLE",
      "Firmware development with C programming language",
      "Wire library I2C implementation",
    ],
    liveUrl: null,
    githubUrl: null,
    teamTr: "Bireysel",
    teamEn: "Individual",
    roleTr: "PCB Tasarımcısı & Gömülü Sistem Mühendisi",
    roleEn: "PCB Designer & Embedded Systems Engineer",
    metricsTr: [
      { label: "EEPROM Kapasitesi", value: "256KB" },
      { label: "PCB Katman Sayısı", value: "2" },
      { label: "I2C Hızı", value: "100kHz" },
      { label: "Geliştirme Süresi", value: "2 ay" },
      { label: "PCB Boyutu", value: "141.1 x 61.3 mm" },
    ],
    metricsEn: [
      { label: "EEPROM Capacity", value: "256KB" },
      { label: "PCB Layer Count", value: "2" },
      { label: "I2C Speed", value: "100kHz" },
      { label: "Development Time", value: "2 months" },
      { label: "PCB Size", value: "141.1 x 61.3 mm" },
    ],
    displayOrder: 4,
  },
  {
    category: "electronics",
    titleTr: "Metal Dedektör",
    titleEn: "Metal Detector",
    descriptionTr:
      "Sesli uyarı sistemi olan, hassas metal dedektörü. Farklı metal türlerini algılayabilen gelişmiş sensör teknolojisi.",
    descriptionEn:
      "Sensitive metal detector with audio alert system. Advanced sensor technology capable of detecting different types of metals.",
    longDescriptionTr:
      "Bu proje, özel olarak tasarlanmış elektronik devreler ile geliştirilmiş bir metal dedektör sistemidir. Arduino veya benzeri bir mikrodenetleyici kullanılmamıştır. Elektromanyetik indüksiyon prensibi ile çalışan dedektör, metal nesneleri algıladığında sesli uyarı verir ve LED'ler ile görsel bildirim sağlar. 1 metre uzunluğundaki yapısı sayesinde ergonomik kullanım sunar. Farklı metal türlerini ayırt edebilme yeteneğine sahiptir ve düşük güç tüketimiyle verimli çalışır. Analog devre tasarımı, osilator devreleri ve sinyal işleme teknikleri kullanılarak geliştirilmiştir.",
    longDescriptionEn:
      "This project is a metal detector system developed using custom-designed electronic circuits, without using an Arduino or similar microcontroller. It operates based on the principle of electromagnetic induction, providing an audible alert and visual feedback via LEDs when metal objects are detected. With its 1-meter length, it offers ergonomic handling. It is capable of distinguishing between different types of metals and operates efficiently with low power consumption. The system was developed using analog circuit design, oscillator circuits, and signal processing techniques.",
    status: "completed",
    technologies: ["SiArduino", "SiCplusplus", "FaMicrochip", "FaTools"],
    featuresTr: [
      "Hassas metal algılama (15cm menzil)",
      "Sesli uyarı sistemi (buzzer)",
      "LED görsel uyarı sistemi",
      "Metal türü ayrımı (demir/demir olmayan)",
      "Taşınabilir ergonomik tasarım",
      "1 metre uzunluk teleskopik gövde",
    ],
    featuresEn: [
      "Sensitive metal detection (15cm range)",
      "Audio warning system (buzzer)",
      "LED visual warning system",
      "Metal type discrimination (ferrous/non-ferrous)",
      "Portable ergonomic design",
      "1 meter long telescopic body",
    ],
    liveUrl: null,
    githubUrl: null,
    teamTr: "Bireysel",
    teamEn: "Individual",
    roleTr: "Elektronik Mühendisi & Devre Tasarımcısı",
    roleEn: "Electronics Engineer & Circuit Designer",
    metricsTr: [
      { label: "Algılama Mesafesi", value: "15cm" },
      { label: "Doğruluk Oranı", value: "90%" },
      { label: "Güç Tüketimi", value: "50mA" },
      { label: "Dedektör Uzunluğu", value: "1m" },
      { label: "Geliştirme Süresi", value: "2 ay" },
      { label: "Çalışma Frekansı", value: "~10kHz" },
    ],
    metricsEn: [
      { label: "Detection Range", value: "15cm" },
      { label: "Accuracy Rate", value: "90%" },
      { label: "Power Consumption", value: "50mA" },
      { label: "Detector Length", value: "1m" },
      { label: "Development Time", value: "2 months" },
      { label: "Operating Frequency", value: "~10kHz" },
    ],
    displayOrder: 5,
  },
];

async function seedProjects() {
  await prisma.project.deleteMany({});

  let successCount = 0;
  let errorCount = 0;

  for (const data of projectsData) {
    try {
      await prisma.project.create({
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
    await seedProjects();
  } catch (e) {
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
