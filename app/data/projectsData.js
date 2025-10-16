import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiArduino,
  SiCplusplus,
  SiMongodb,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import {
  FaLayerGroup,
  FaGlobe,
  FaBolt,
  FaMicrochip,
  FaTools,
  FaGithub,
  FaGit,
} from "react-icons/fa";

export const getCategories = (language) => ({
  all: {
    icon: FaLayerGroup,
    color: "from-red-900 to-red-400",
    title: language === "TR" ? "Tüm Projeler" : "All Projects",
  },
  web: {
    icon: FaGlobe,
    color: "from-green-900 to-green-400",
    title: language === "TR" ? "Web Siteleri" : "Web Sites",
  },
  electronics: {
    icon: FaBolt,
    color: "from-orange-900 to-orange-400",
    title:
      language === "TR" ? "Elektrik & Elektronik" : "Electric & Electronics",
  },
});

export const getProjectsData = (language) => [
  {
    id: "portfolio-website",
    title:
      language === "TR"
        ? "Kişisel Portföy Sitesi"
        : "Personal Portfolio Website",
    description:
      language === "TR"
        ? "Modern tasarım anlayışıyla şekillendirdiğim ve gelişmiş teknolojik temeller üzerine inşa ettiğim bu portföy projesi, hem estetik hem de performans odaklı bir deneyim sunmak amacıyla tasarlandı. Her detayıyla sade, akıcı ve kullanıcı dostu bir yapı hedefledim. Bu proje, hem profesyonel gelişim yolculuğumun bir yansıması hem de gelecekteki projelere ilham kaynağı olacak bir vitrin niteliğindedir."
        : "This portfolio project, shaped by a modern design approach and built upon advanced technological foundations, was designed to deliver an experience focused on both aesthetics and performance. I aimed for a simple, fluid, and user-friendly structure in every detail. This project is both a reflection of my professional development journey and a showcase that will inspire future projects.",
    longDescription:
      language === "TR"
        ? "Bu proje, JavaScript, React ve Next.js teknolojileriyle geliştirilen, modern tasarım prensiplerine dayalı kişisel bir portföy çalışmasıdır. Tailwind CSS ile stil tasarımı güçlendirilmiş, Node.js ve MongoDB altyapısıyla güvenli ve ölçeklenebilir bir yapı sağlanmıştır. Çoklu dil desteği, responsive tasarım, performans optimizasyonu ve component tabanlı mimari gibi modern yazılım yaklaşımlarını temel alır. Bu sayede proje; yeniden kullanılabilirlik, sürdürülebilirlik ve yüksek kullanıcı deneyimi açısından dikkat çekici bir çözüm sunar. Hedef, sade ama güçlü bir arayüzle profesyonel kimliğimi yansıtan bir dijital vitrin oluşturmaktır."
        : "This project is a personal portfolio developed using JavaScript, React, and Next.js, built upon modern design principles. The visual design is enhanced with Tailwind CSS, while Node.js and MongoDB provide a secure and scalable backend structure. It embraces modern software approaches such as multi-language support, responsive design, performance optimization, and component-based architecture. As a result, the project stands out with its reusability, maintainability, and high-quality user experience. The goal is to create a clean yet powerful interface that reflects my professional identity through a modern digital showcase.",
    category: "web",
    status: "completed",
    technologies: [
      SiReact,
      SiNextdotjs,
      SiJavascript,
      SiTailwindcss,
      SiNodedotjs,
      SiExpress,
      SiMysql,
      FaGithub,
      FaGit,
    ],
    features: [
      language === "TR"
        ? "Güvenli ve Ölçeklenebilir Altyapı"
        : "Secure and Scalable Infrastructure",
      language === "TR" ? "Responsive tasarım" : "Responsive design",
      language === "TR"
        ? "Çoklu dil desteği (TR/EN)"
        : "Multi-language support (TR/EN)",
      language === "TR" ? "Gelişmiş Animasyonlar" : "Advanced animations",
      language === "TR"
        ? "Bileşen tabanlı mimari"
        : "Component-based architecture",
    ],
    liveUrl: "http://omerhalisdemir.com.tr/",
    githubUrl: "https://github.com/omerhd34/omerhalisdemir.com.tr",
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role: language === "TR" ? "Full Stack Developer" : "Full Stack Developer",
    metrics: [
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "2 hafta",
      },
      {
        label: language === "TR" ? "Boyut" : "Size",
        value: "892 MB",
      },
    ],
  },
  {
    id: "profilo-website",
    title: language === "TR" ? "Yazıcı Ticaret " : "Yazıcı Ticaret",
    description:
      language === "TR"
        ? "Beyaz eşya mağazası çalışanları ile müşterilerin sorunsuz bir şekilde iletişim kurmasını sağlayan web sitesi"
        : "A website that allows customers to communicate seamlessly with appliance store employees",
    longDescription:
      language === "TR"
        ? "Bu web sitesi, beyaz eşya mağazası çalışanları ile müşteriler arasında güçlü bir iletişim köprüsü kurmayı amaçlamaktadır. Müşteriler, ürünler hakkında bilgi alabilir, sorularını iletebilir, satışı olmayan yeni ürün isteğinde bulunabilir ve destek talebinde bulunabilir. Aynı zamanda çalışanlar, talepleri hızlıca yönetebilir ve müşterilere en doğru bilgiyi sunabilir. Böylece hem müşteri memnuniyeti artar hem de mağaza içi iletişim daha verimli hâle gelir."
        : "This website aims to establish a strong communication bridge between appliance store employees and customers. Customers can obtain information about products, submit their questions, request new products that are not currently for sale, and make support inquiries. At the same time, employees can manage these requests quickly and provide customers with the most accurate information. In this way, both customer satisfaction increases and in-store communication becomes more efficient.",
    category: "web",
    status: "completed",
    technologies: [
      SiReact,
      SiNextdotjs,
      SiJavascript,
      SiTailwindcss,
      SiNodedotjs,
      SiMongodb,
      FaGithub,
      FaGit,
    ],
    features: [
      language === "TR" ? "Responsive tasarım" : "Responsive design",
      language === "TR" ? "Admin girişli" : "Admin login",
      language === "TR"
        ? "Component tabanlı mimari"
        : "Component-based architecture",
      language === "TR" ? "Veritabanı destekli" : "Database supported",
    ],

    liveUrl: "https://yazici.gen.tr/",
    githubUrl: "https://github.com/omerhd34/yaziciTicaret",
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role: language === "TR" ? "Full Stack Developer" : "Full Stack Developer",
    metrics: [
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "1 hafta",
      },
      {
        label: language === "TR" ? "Boyut" : "Size",
        value: "603 MB",
      },
    ],
  },
  {
    id: "metal-detector",
    title: language === "TR" ? "Metal Dedektör" : "Metal Detector",
    description:
      language === "TR"
        ? "Sesli uyarı sistemi olan, hassas metal dedektörü. Farklı metal türlerini algılayabilen gelişmiş sensör teknolojisi."
        : "Sensitive metal detector with audio alert system. Advanced sensor technology capable of detecting different types of metals.",
    longDescription:
      language === "TR"
        ? "Bu proje, özel olarak tasarlanmış elektronik devreler ile geliştirilmiş bir metal dedektör sistemidir. Arduino veya benzeri bir mikrodenetleyici kullanılmamıştır. Elektromanyetik indüksiyon prensibi ile çalışan dedektör, metal nesneleri algıladığında sesli uyarı verir ve LED'ler ile görsel bildirim sağlar. 1 metre uzunluğundaki yapısı sayesinde ergonomik kullanım sunar. Farklı metal türlerini ayırt edebilme yeteneğine sahiptir ve düşük güç tüketimiyle verimli çalışır. Analog devre tasarımı, osilator devreleri ve sinyal işleme teknikleri kullanılarak geliştirilmiştir."
        : "This project is a metal detector system developed using custom-designed electronic circuits, without using an Arduino or similar microcontroller. It operates based on the principle of electromagnetic induction, providing an audible alert and visual feedback via LEDs when metal objects are detected. With its 1-meter length, it offers ergonomic handling. It is capable of distinguishing between different types of metals and operates efficiently with low power consumption. The system was developed using analog circuit design, oscillator circuits, and signal processing techniques.",
    category: "electronics",
    status: "completed",
    technologies: [FaMicrochip, FaTools, SiCplusplus],
    features: [
      language === "TR"
        ? "Hassas metal algılama (15cm menzil)"
        : "Sensitive metal detection (15cm range)",
      language === "TR"
        ? "Sesli uyarı sistemi (buzzer)"
        : "Audio alert system (buzzer)",
      language === "TR"
        ? "LED görsel uyarı sistemi"
        : "LED visual indication system",
      language === "TR"
        ? "Metal türü ayrımı (demir/demir olmayan)"
        : "Metal type discrimination (ferrous/non-ferrous)",
      language === "TR"
        ? "Taşınabilir ergonomik tasarım"
        : "Portable ergonomic design",
      language === "TR"
        ? "1 metre uzunluk teleskopik gövde"
        : "1-meter telescopic body length",
      language === "TR" ? "Düşük güç tüketimi" : "Low power consumption",
      language === "TR"
        ? "Hassasiyet ayar potansiyometresi"
        : "Sensitivity adjustment potentiometer",
    ],
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role:
      language === "TR"
        ? "Elektronik Mühendisi & Devre Tasarımcısı"
        : "Electronics Engineer & Circuit Designer",
    metrics: [
      {
        label: language === "TR" ? "Algılama Mesafesi" : "Detection Range",
        value: "15cm",
      },
      {
        label: language === "TR" ? "Doğruluk Oranı" : "Accuracy Rate",
        value: "90%",
      },
      {
        label: language === "TR" ? "Güç Tüketimi" : "Power Consumption",
        value: "50mA",
      },
      {
        label: language === "TR" ? "Dedektör Uzunluğu" : "Detector Length",
        value: "1m",
      },
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "2 ay",
      },
      {
        label: language === "TR" ? "Çalışma Frekansı" : "Operating Frequency",
        value: "~10kHz",
      },
    ],
  },
  {
    id: "custom-arduino-uno",
    title:
      language === "TR"
        ? "Özel Arduino Uno Kartı Tasarımı"
        : "Custom Arduino Uno Board Design",
    description:
      language === "TR"
        ? "Arduino Uno R3 modelinin hafızasını 256KB'ye çıkaran, 24LC512 EEPROM ve I2C destekli özel kart tasarımı."
        : "A custom Arduino Uno R3 design enhanced with 256KB memory using 24LC512 EEPROM and I2C interface.",
    longDescription:
      language === "TR"
        ? "Bu projede, Arduino'nun bir modeli olan Arduino Uno R3'ün hafızasının artırılması hedeflenmiştir. Hafıza kapasitesi, 24LC512 seri EEPROM yongasıyla en az 256 KB seviyesine çıkarılmıştır. EEPROM, I2C protokolü ile Arduino'ya bağlanmıştır. 24LC512, 128 bayta kadar sayfa yazma desteği, rastgele ve ardışık okuma özelliklerine sahiptir. Bellek yongası; dirençler, kapasitörler ve transistörlerden oluşan bir depolama aygıtıdır. PCB tasarımı Autodesk EAGLE ile gerçekleştirilmiş, çift katmanlı yapı kullanılmıştır. Yazılım C/C++ dilinde geliştirilmiş, Wire kütüphanesi ile I2C iletişimi sağlanmıştır. Türkiye haritası şeklinde özel PCB tasarımı ile estetik ve fonksiyonel bir görünüm elde edilmiştir."
        : "This project aims to enhance the memory of Arduino Uno R3 by integrating a 24LC512 serial EEPROM chip. The system increases memory capacity to at least 256KB using I2C communication. The 24LC512 supports page writes up to 128 bytes and allows both random and sequential reads. The memory chip is composed of resistors, capacitors, and transistors and functions as a storage device, either temporarily (RAM) or permanently (ROM). A double-layer PCB was designed in Autodesk EAGLE with a custom Turkey map shape for aesthetic and functional appeal. The firmware was developed in C/C++ using the Wire library for I2C communication.",
    category: "electronics",
    status: "completed",
    technologies: [SiArduino, SiCplusplus, FaMicrochip, FaTools],
    features: [
      language === "TR"
        ? "256KB genişletilmiş EEPROM kapasitesi"
        : "256KB expanded EEPROM capacity",
      language === "TR"
        ? "24LC512 EEPROM yongası entegrasyonu"
        : "24LC512 EEPROM chip integration",
      language === "TR"
        ? "I2C protokolü ile haberleşme"
        : "I2C protocol communication",
      language === "TR"
        ? "Çift katmanlı PCB tasarımı"
        : "Double-layer PCB design",
      language === "TR"
        ? "Autodesk EAGLE ile şematik tasarım"
        : "Autodesk EAGLE schematic design",
      language === "TR"
        ? "C/C++ firmware geliştirme"
        : "C/C++ firmware development",
      language === "TR"
        ? "Türkiye haritası şeklinde PCB"
        : "Turkey map-shaped PCB",
      language === "TR"
        ? "Wire kütüphanesi I2C implementasyonu"
        : "Wire library I2C implementation",
    ],
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role:
      language === "TR"
        ? "PCB Tasarımcısı & Gömülü Sistem Mühendisi"
        : "PCB Designer & Embedded Systems Engineer",
    metrics: [
      {
        label: language === "TR" ? "EEPROM Kapasitesi" : "EEPROM Capacity",
        value: "256KB",
      },
      {
        label: language === "TR" ? "PCB Katman Sayısı" : "PCB Layers",
        value: "2",
      },
      {
        label: language === "TR" ? "I2C Hızı" : "I2C Speed",
        value: "100kHz",
      },
      {
        label: language === "TR" ? "Bağlantı Arayüzü" : "Interface",
        value: "I2C",
      },
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "2 ay",
      },
      {
        label: language === "TR" ? "PCB Boyutu" : "PCB Size",
        value: "141.1 x 61.3 mm",
      },
    ],
  },
];

export const getProjectStats = (projects) => {
  const total = projects.length;
  const completed = projects.filter((p) => p.status === "completed").length;
  const current = projects.filter((p) => p.status === "current").length;
  return { total, completed, current };
};
