import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiArduino,
  SiCplusplus,
} from "react-icons/si";
import {
  FaLayerGroup,
  FaGlobe,
  FaBolt,
  FaMicrochip,
  FaTools,
} from "react-icons/fa";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  status: "completed" | "current" | "planned";
  technologies: React.ElementType[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  team?: string;
  role?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface CategoryData {
  icon: React.ElementType;
  color: string;
  title: string;
}

export interface Categories {
  all: CategoryData;
  web: CategoryData;
  electronics: CategoryData;
}

export const getCategories = (language: string): Categories => ({
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

export const getProjectsData = (language: string): ProjectItem[] => [
  {
    id: "portfolio-website",
    title:
      language === "TR"
        ? "Kişisel Portföy Sitesi"
        : "Personal Portfolio Website",
    description:
      language === "TR"
        ? "Modern tasarım prensipleri ve gelişmiş yapısıyla hazırladığım, TypeScript destekli ikinci kişisel portföy projemdir."
        : "This is my second personal portfolio project, built with TypeScript and designed with modern UI/UX principles and an improved structure.",
    longDescription:
      language === "TR"
        ? "Bu proje, TypeScript ve Next.js teknolojileri kullanılarak geliştirilen bireysel bir portföy çalışmasıdır. Çoklu dil desteği ve responsive tasarım gibi özellikler içerir. Performans ve güvenlik odaklı geliştirilen bu proje, önceki çalışmama göre daha gelişmiş bir yapı sunar. TypeScript kullanımı ile kod güvenilirliği artırılmış, modern CSS teknikleri ile görsel deneyim geliştirilmiştir. Ayrıca component tabanlı mimari, reusability ve maintainability açısından optimize edilmiştir."
        : "This is an individual portfolio project developed using TypeScript and Next.js. It features multi-language support and a responsive design. Built with a focus on performance and security, this project offers a more advanced structure compared to my previous work. The use of TypeScript enhanced code reliability, while modern CSS techniques improved the visual experience. Additionally, the component-based architecture has been optimized for reusability and maintainability.",
    category: "web",
    status: "completed",
    technologies: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiNodedotjs,
    ],
    features: [
      language === "TR"
        ? "TypeScript ile tip güvenliği"
        : "Type safety with TypeScript",
      language === "TR" ? "Responsive tasarım" : "Responsive design",
      language === "TR"
        ? "Çoklu dil desteği (TR/EN)"
        : "Multi-language support (TR/EN)",
      language === "TR" ? "Advanced animasyonlar" : "Advanced animations",
      language === "TR"
        ? "Component tabanlı mimari"
        : "Component-based architecture",
    ],
    liveUrl: "http://omerhalisdemir.com.tr/",
    githubUrl: "https://github.com/omerhd34/omerhalisdemir.com.tr",
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role: language === "TR" ? "Full Stack Developer" : "Full Stack Developer",
    metrics: [
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "1 ay",
      },
      {
        label: language === "TR" ? "Boyut" : "Size",
        value: "892 MB",
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

export const getProjectStats = (projects: ProjectItem[]) => {
  const total = projects.length;
  const completed = projects.filter((p) => p.status === "completed").length;
  const current = projects.filter((p) => p.status === "current").length;
  return { total, completed, current };
};
