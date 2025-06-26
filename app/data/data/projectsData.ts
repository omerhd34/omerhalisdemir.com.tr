import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
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
  period: string;
  technologies: React.ElementType[];
  features: string[];
  challenges?: string[];
  results?: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  team?: string;
  role?: string;
  highlights?: string[];
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
    id: "portfolio-website1",
    title:
      language === "TR"
        ? "Kişisel Portföy Sitesi 1"
        : "Personal Portfolio Website 1",
    description:
      language === "TR"
        ? "İlk React ve Next.js projemdir. Responsive tasarıma sahip, çoklu dil desteği ve dark/light mod özellikleri içeren kişisel portföy web sitesidir."
        : "This is my first React and Next.js project. A responsive personal portfolio website with multi-language support and dark/light mode features.",
    longDescription:
      language === "TR"
        ? "Bu, React ve Next.js kullanarak geliştirdiğim ilk kişisel portföy web sitemdir. Modern tasarım prensipleriyle responsive (mobil uyumlu) olarak tasarladım. Projede çoklu dil desteği, karanlık/aydınlık mod geçişi ve bileşen tabanlı yapı gibi gelişmiş özellikler yer almaktadır. Bu süreçte Next.js ile sayfa yönlendirme, dinamik içerik yönetimi ve statik site üretimi konularında pratik kazandım."
        : "This is the first personal portfolio website I developed using React and Next.js. It was built with modern design principles and is fully responsive. The project includes advanced features like multi-language support, dark/light mode toggle, and a component-based structure. Through this project, I gained hands-on experience in routing, dynamic content management, and static site generation with Next.js.",
    category: "web",
    status: "completed",
    period: "2024",
    technologies: [
      SiReact,
      SiNextdotjs,
      SiJavascript,
      SiTailwindcss,
      SiNodedotjs,
    ],
    features: [
      language === "TR" ? "Responsive tasarım" : "Responsive design",
      language === "TR" ? "Çoklu dil desteği" : "Multi-language support",
      language === "TR" ? "Dark/Light mode" : "Dark/Light mode",
    ],
    challenges: [
      language === "TR"
        ? "Performans optimizasyonu"
        : "Performance optimization",
      language === "TR"
        ? "Cross-browser uyumluluğu"
        : "Cross-browser compatibility",
    ],
    results: [
      language === "TR" ? "98/100 Lighthouse skoru" : "98/100 Lighthouse score",
      language === "TR"
        ? "Tüm cihazlarda mükemmel görünüm"
        : "Perfect view on all devices",
    ],
    liveUrl: "http://omerhalisdemir.xyz/",
    githubUrl: "https://github.com/omerhd34/omerhalisdemir.xyz",
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role: language === "TR" ? "Full Stack Developer" : "Full Stack Developer",
    metrics: [
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "1 ay",
      },
      {
        label: language === "TR" ? "Sayfa Yükleme Hızı" : "Page Load Speed",
        value: "0.8s",
      },
    ],
  },
  {
    id: "portfolio-website2",
    title:
      language === "TR"
        ? "Kişisel Portföy Sitesi 2"
        : "Personal Portfolio Website 2",
    description:
      language === "TR"
        ? "Modern tasarım prensipleri ve gelişmiş yapısıyla hazırladığım, TypeScript destekli ikinci kişisel portföy projemdir."
        : "This is my second personal portfolio project, built with TypeScript and designed with modern UI/UX principles and an improved structure.",
    longDescription:
      language === "TR"
        ? "Bu proje, TypeScript ve Next.js teknolojileri kullanılarak geliştirilen bireysel bir portföy çalışmasıdır. Çoklu dil desteği, dark/light mod ve responsive tasarım gibi özellikler içerir. Performans ve güvenlik odaklı geliştirilen bu proje, önceki çalışmama göre daha gelişmiş bir yapı sunar."
        : "This is an individual portfolio project developed using TypeScript and Next.js. It features multi-language support, dark/light mode, and a responsive design. Built with a focus on performance and security, this project offers a more advanced structure compared to my previous work.",
    category: "web",
    status: "completed",
    period: "2025",
    technologies: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiNodedotjs,
    ],
    features: [
      language === "TR" ? "Responsive tasarım" : "Responsive design",
      language === "TR" ? "Çoklu dil desteği" : "Multi-language support",
      language === "TR" ? "Dark/Light mode" : "Dark/Light mode",
    ],
    challenges: [
      language === "TR"
        ? "Performans optimizasyonu"
        : "Performance optimization",
      language === "TR"
        ? "Güvenlik implementasyonu"
        : "Security implementation",
    ],
    results: [
      language === "TR" ? "95/100 Lighthouse skoru" : "95/100 Lighthouse score",
      language === "TR"
        ? "Hızlı sayfa yükleme süreleri"
        : "Fast page loading times",
    ],
    liveUrl: "http://omerhalisdemir.xyz/",
    githubUrl: "https://github.com/omerhd34/omerhalisdemir.xyz",
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role: language === "TR" ? "Full Stack Developer" : "Full Stack Developer",
    metrics: [
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "1 ay",
      },
      {
        label: language === "TR" ? "Sayfa Yükleme Hızı" : "Page Load Speed",
        value: "1s",
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
        ? "Bu proje, özel olarak tasarlanmış elektronik devreler ile geliştirilmiş bir metal dedektör sistemidir. Arduino veya benzeri bir mikrodenetleyici kullanılmamıştır. Elektromanyetik indüksiyon prensibi ile çalışan dedektör, metal nesneleri algıladığında sesli uyarı verir ve LED'ler ile görsel bildirim sağlar. 1 metre uzunluğundaki yapısı sayesinde ergonomik kullanım sunar. Farklı metal türlerini ayırt edebilme yeteneğine sahiptir ve düşük güç tüketimiyle verimli çalışır."
        : "This project is a metal detector system developed using custom-designed electronic circuits, without using an Arduino or similar microcontroller. It operates based on the principle of electromagnetic induction, providing an audible alert and visual feedback via LEDs when metal objects are detected. With its 1-meter length, it offers ergonomic handling. It is capable of distinguishing between different types of metals and operates efficiently with low power consumption.",
    category: "electronics",
    status: "completed",
    period: "2021",
    technologies: [FaMicrochip, FaTools, SiCplusplus],
    features: [
      language === "TR" ? "Hassas metal algılama" : "Sensitive metal detection",
      language === "TR" ? "Sesli uyarı sistemi" : "Audio alert system",
      language === "TR" ? "LED görsel uyarı" : "LED visual indication",
      language === "TR" ? "Metal türü ayrımı" : "Metal type discrimination",
      language === "TR" ? "Taşınabilir tasarım" : "Portable design",
      language === "TR" ? "1 metre uzunluk" : "1-meter length",
    ],
    challenges: [
      language === "TR"
        ? "Elektromanyetik parazitlerin filtrelenmesi"
        : "Filtering electromagnetic interference",
      language === "TR" ? "Hassasiyetin ayarlanması" : "Tuning sensitivity",
      language === "TR"
        ? "Enerji verimliliği sağlanması"
        : "Ensuring energy efficiency",
    ],
    results: [
      language === "TR" ? "15cm algılama mesafesi" : "15cm detection range",
      language === "TR" ? "%95 doğruluk oranı" : "95% accuracy rate",
      language === "TR" ? "Düşük güç tüketimi" : "Low power consumption",
    ],
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role: language === "TR" ? "Elektronik Mühendisi" : "Electronics Engineer",
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
        label: language === "TR" ? "Dedektör Uzunluğu" : "Detector Length",
        value: "1 metre",
      },
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "2 ay",
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
        ? "Arduino Uno R3 modelinin hafızasını 256KB’ye çıkaran, 24LC512 EEPROM ve I2C destekli özel kart tasarımı."
        : "A custom Arduino Uno R3 design enhanced with 256KB memory using 24LC512 EEPROM and I2C interface.",
    longDescription:
      language === "TR"
        ? "Bu projede, Arduino'nun bir modeli olan Arduino Uno R3’ün hafızasının artırılması hedeflenmiştir. Hafıza kapasitesi, 24LC512 seri EEPROM yongasıyla en az 256 KB seviyesine çıkarılmıştır. EEPROM, I2C protokolü ile Arduino’ya bağlanmıştır. 24LC512, 128 bayta kadar sayfa yazma desteği, rastgele ve ardışık okuma özelliklerine sahiptir. Bellek yongası; dirençler, kapasitörler ve transistörlerden oluşan bir depolama aygıtıdır. PCB tasarımı Autodesk EAGLE ile gerçekleştirilmiş, çift katmanlı yapı kullanılmıştır. Yazılım C/C++ dilinde geliştirilmiştir."
        : "This project aims to enhance the memory of Arduino Uno R3 by integrating a 24LC512 serial EEPROM chip. The system increases memory capacity to at least 256KB using I2C communication. The 24LC512 supports page writes up to 128 bytes and allows both random and sequential reads. The memory chip is composed of resistors, capacitors, and transistors and functions as a storage device, either temporarily (RAM) or permanently (ROM). A double-layer PCB was designed in Autodesk EAGLE. The firmware was developed in C/C++.",
    category: "electronics",
    status: "completed",
    period: "2022",
    technologies: [SiArduino, SiCplusplus, FaMicrochip, FaTools],
    features: [
      language === "TR"
        ? "256KB genişletilmiş EEPROM"
        : "256KB expanded EEPROM",
      language === "TR" ? "24LC512 yongası" : "24LC512 chip",
      language === "TR" ? "I2C protokolü" : "I2C protocol",
      language === "TR" ? "Çift katmanlı PCB" : "Double-layer PCB",
      language === "TR" ? "EAGLE ile şematik" : "EAGLE schematic design",
      language === "TR" ? "C/C++ yazılım" : "C/C++ firmware",
    ],
    challenges: [
      language === "TR" ? "I2C entegrasyonu" : "I2C integration",
      language === "TR"
        ? "PCB yönlendirme optimizasyonu"
        : "PCB routing optimization",
      language === "TR"
        ? "EEPROM iletişim zamanlamaları"
        : "EEPROM timing handling",
    ],
    results: [
      language === "TR" ? "256KB hafıza artırımı" : "256KB memory extension",
      language === "TR"
        ? "EEPROM başarıyla entegre edildi"
        : "EEPROM successfully integrated",
      language === "TR"
        ? "Çift katmanlı PCB üretildi"
        : "Double-layer PCB manufactured",
    ],
    team: language === "TR" ? "Bireysel Proje" : "Individual Project",
    role:
      language === "TR"
        ? "PCB & Gömülü Sistem Mühendisi"
        : "PCB & Embedded Systems Engineer",
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
        label: language === "TR" ? "Bağlantı Arayüzü" : "Interface",
        value: "I2C",
      },
      {
        label: language === "TR" ? "Geliştirme Süresi" : "Development Time",
        value: "2 ay",
      },
      {
        label: language === "TR" ? "Şematik Aracı" : "Schematic Tool",
        value: "Autodesk EAGLE",
      },
      {
        label: language === "TR" ? "Programlama Dili" : "Programming Language",
        value: "C",
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
