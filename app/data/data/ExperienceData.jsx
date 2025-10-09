import {
 FaGraduationCap,
 FaUniversity,
 FaSchool,
 FaBriefcase,
 FaBookOpen,
 FaCertificate,
 FaMicrochip,
 FaDraftingCompass,
 FaCubes,
 FaServer,
 FaGlobeEurope,
 FaNetworkWired,
 FaCloud,
 FaDatabase,
 FaHdd,
 FaCogs,
 FaShieldAlt,
 FaLanguage,
 FaGlobe,
 FaCalculator,
 FaFlask,
 FaAtom,
 FaBrain,
 FaGithub,
 FaHtml5,
 FaCss3,
 FaJava,
 FaReact,
} from "react-icons/fa";

import {
 SiReact,
 SiJavascript,
 SiAutodesk,
 SiHtml5,
 SiCss3,
 SiBootstrap,
 SiNextdotjs,
 SiNodedotjs,
 SiMongodb,
 SiTypescript,
 SiTailwindcss,
 SiExpress,
} from "react-icons/si";

import ixirhost from "../../../public/images/ixirhost.png";
import tepas from "../../../public/images/tepas.jpg";
import Image from "next/image";

const ImageIcon = ({ src, alt = "Icon", onClick }) => (
 <Image
  src={typeof src === "string" ? src : src.src}
  alt={alt}
  height={24}
  width={24}
  className={`w-6 h-6 object-contain ${onClick ? "cursor-pointer hover:opacity-80 transition-opacity" : ""
   }`}
  onClick={onClick}
 />
);

export const getExperienceData = (language = "TR") => ({
 education: {
  icon: FaGraduationCap,
  color: "from-red-900 to-red-400",
  items: [
   {
    id: "high-school",
    title: language === "TR" ? "Lise Eğitimi" : "High School Education",
    institution:
     language === "TR" ? "Ataşehir Fen Bilimleri" : "Anatolian High School",
    period: "2014-2018",
    status: "completed",
    location: "İstanbul, Türkiye",
    description:
     language === "TR"
      ? "Sayısal ağırlıklı bir eğitim programı sürecinden geçtim ve özellikle matematik ile fen bilimleri alanlarında yüksek başarı gösterdim. Analitik düşünme becerilerimi geliştiren bu süreç, problem çözme yeteneğimi ve akademik disiplinimi pekiştirdi. Eğitim hayatım boyunca sayısal alanlarda gösterdiğim tutarlılık ve güçlü performans, temel bilimsel bilgi birikimimi sağlamlaştırdı."
      : "I completed a science-oriented education program with a strong focus on mathematics and natural sciences. Throughout this period, I demonstrated high academic performance, especially in analytical and problem-solving areas. This background not only enhanced my scientific knowledge but also strengthened my ability to think critically and approach challenges with discipline and precision.",
    technologies: [FaCalculator, FaFlask, FaAtom, FaGraduationCap, FaSchool, FaBrain],
    icon: FaSchool,
    color: "text-green-500",
   },
   {
    id: "university-prep",
    title: language === "TR" ? "İngilizce Hazırlık" : "English Preparation",
    institution:
     language === "TR"
      ? "İstanbul Ticaret Üniversitesi"
      : "Istanbul Commerce University",
    period: "2018-2019",
    status: "completed",
    location: "İstanbul, Türkiye",
    description:
     language === "TR"
      ? "İngilizce hazırlık eğitimimi başarıyla tamamladım ve B1 seviyesinde İngilizce yeterliliği kazandım. Bu seviyede günlük konuşmaları anlayabiliyor, temel teknik dokümanları okuyabiliyor ve kendimi yazılı ve sözlü olarak ifade edebiliyorum."
      : "I successfully completed my English preparatory education and achieved a B1 level of English proficiency. At this level, I can understand daily conversations, read basic technical documents, and express myself both in writing and speaking.",
    technologies: [FaLanguage, FaBookOpen, FaGlobe],
    icon: FaBookOpen,
    color: "text-orange-500",
   },
   {
    id: "university",
    title:
     language === "TR"
      ? "Elektrik Elektronik Mühendisliği"
      : "Electric Electronic Engineering",
    institution:
     language === "TR"
      ? "İstanbul Ticaret Üniversitesi"
      : "Istanbul Commerce University",
    period: "2019-2025",
    status: "completed",
    location: "İstanbul, Türkiye",
    gpa: "2.5/4.0",
    description:
     language === "TR"
      ? "Elektrik Elektronik Mühendisliği lisans eğitimim boyunca, elektrik devreleri, sinyal işleme, mikrodenetleyiciler, kontrol sistemleri ve güç elektroniği gibi temel alanlarda sağlam bir teorik altyapı kazandım. AutoCAD ve Autodesk Eagle ile teknik çizimler yapma becerisi edindim; Proteus ve Arduino IDE gibi platformlar üzerinde devre simülasyonları gerçekleştirdim. Özellikle PCB tasarımı ve gömülü sistemler üzerinde yoğunlaşarak hem yazılım hem donanım alanında kendimi geliştirdim. Bu süreçte, mühendislik problemlerine çözüm üretme, proje geliştirme ve teknik dokümantasyon hazırlama konularında da deneyim sahibi oldum."
      : "During my undergraduate studies in Electrical and Electronics Engineering, I built a solid theoretical foundation in key areas such as electric circuits, signal processing, microcontrollers, control systems, and power electronics. I gained practical skills in technical drawing using AutoCAD and Autodesk Eagle, and carried out circuit simulations with tools like Proteus and Arduino IDE. I focused particularly on PCB design and embedded systems, improving both my hardware and software abilities. Throughout this journey, I also developed strong problem-solving skills, project development experience, and the ability to create comprehensive technical documentation.",
    technologies: [SiAutodesk, FaMicrochip, FaDraftingCompass, FaCubes],
    icon: FaUniversity,
    color: "text-blue-500",
   },
  ],
 },
 internship: {
  icon: FaBriefcase,
  color: "from-green-900 to-green-400",
  items: [
   {
    id: "freelancer",
    title: "Full Stack Developer",
    institution: "Freelancer",
    period: language === "TR" ? "Ocak 2025 - ..." : "January 2025 - ...",
    status: "current",
    location: "Online",
    description:
     language === "TR"
      ? "İnternet üzerinden çeşitli platformlarda freelance Full Stack Developer olarak çalışıyorum. Bu çalışma biçimi bana hem teknik becerilerimi geliştirme hem de farklı sektörlerden projelerle tanışma fırsatı sunuyor. Freelance dünyasında çalışmak, sürekli yeni zorluklarla karşılaşmak demek. Her proje farklı bir ihtiyaç, farklı bir teknoloji yığını ve farklı bir problem çözme yaklaşımı gerektiriyor. Bu çeşitlilik, beni hem teknik hem de kişisel olarak sürekli gelişmeye itiyor. Frontend tarafında React, Next.js ve modern CSS teknolojileriyle kullanıcı dostu, responsive ve performanslı arayüzler tasarlıyorum. Backend tarafında ise Node.js, Express.js ve MongoDB kullanarak güvenilir API'ler geliştiriyorum. Freelance çalışmanın en değerli tarafı, farklı müşterilerle çalışırken kazandığım deneyim. Her proje, yeni bir öğrenme fırsatı ve portföyüme eklediğim bir başarı hikayesi. Zaman yönetimi, müşteri iletişimi ve problem çözme becerilerimin yanı sıra, teknik yetkinliklerimi de sürekli keskinleştiriyorum. Bu yolculukta en çok keyif aldığım şey, bir fikrin dijital bir ürüne dönüşmesine katkı sağlamak ve müşterilerimin hedeflerine ulaşmalarına yardımcı olmak. Her başarılı proje, bir sonraki için beni daha da motive ediyor."
      : "I work as a freelance Full Stack Developer on various platforms across the internet. This way of working offers me the opportunity to both develop my technical skills and engage with projects from different industries. Working in the freelance world means constantly facing new challenges. Each project requires a different need, a different technology stack, and a different problem-solving approach. This diversity pushes me to grow continuously, both technically and personally. On the frontend side, I design user-friendly, responsive, and performant interfaces using React, Next.js, and modern CSS technologies. On the backend side, I develop reliable APIs using Node.js, Express.js, and MongoDB. The most valuable aspect of freelancing is the experience I gain while working with different clients. Each project is a new learning opportunity and a success story I add to my portfolio. Alongside time management, client communication, and problem-solving skills, I'm constantly sharpening my technical competencies as well. What I enjoy most about this journey is contributing to the transformation of an idea into a digital product and helping my clients achieve their goals. Every successful project motivates me even more for the next one.",
    technologies: [
     FaHtml5,
     FaCss3,
     SiJavascript,
     SiTypescript,
     FaJava,
     FaReact,
     SiNextdotjs,
     SiNodedotjs,
     SiExpress,
     SiMongodb,
     SiTailwindcss,
     SiBootstrap,
    ],
    icon: () => <FaCertificate />,
    color: "text-red-400",
   },
   {
    id: "software",
    title: language === "TR" ? "Yazılım Stajyeri" : "Software Intern",
    institution:
     language === "TR" ? "İksir İnternet Hizmetleri A.Ş." : "IXIRHOST",
    period:
     language === "TR" ? "Temmuz 2020 - Ağustos 2020" : "July 2020 - August 2020",
    status: "completed",
    location: "Ümraniye, İstanbul, Türkiye",
    description:
     language === "TR"
      ? "Bu staj sürecinde, teorik bilgilerimi pratiğe dökerek web hosting, sunucu yönetimi ve alan adı yönetimi gibi konularda kapsamlı bilgiler edindim. İxirhost bünyesindeki deneyimlerim, yazılım geliştirme alanına olan ilgimi artırdı. Bu doğrultuda full stack development, backend ve frontend teknolojileri üzerine kendimi geliştirmeye karar verdim."
      : "During this internship, I transformed my theoretical knowledge into practice and gained comprehensive experience in areas such as web hosting, server management, and domain administration. My time at İxirhost further increased my interest in software development, leading me to pursue growth in full stack development, as well as backend and frontend technologies.",
    technologies: [
     FaServer,
     FaGlobeEurope,
     FaNetworkWired,
     FaCloud,
     FaDatabase,
     FaHdd,
     FaCogs,
     FaShieldAlt,
    ],
    icon: () => (
     <ImageIcon
      src={ixirhost}
      alt="IXIRHOST"
      onClick={() => window.open("https://www.ixirhost.com/", "_blank")}
     />
    ),
    color: "text-cyan-400",
   },
   {
    id: "design-intern",
    title: language === "TR" ? "Tasarım Stajyeri" : "Design Intern",
    institution: language === "TR" ? "TEPAŞ" : "TEPAŞ",
    period:
     language === "TR" ? "Haziran 2021 - Temmuz 2021" : "June 2021 - July 2021",
    status: "completed",
    location: "İstanbul, Türkiye",
    description:
     language === "TR"
      ? "Staj sürecimde AutoCAD programını aktif olarak kullanarak bina içi elektrik tesisatı tasarımı üzerine detaylı çalışmalar gerçekleştirdim. Aydınlatma, priz yerleşimi, buat noktaları ve kablo güzergahları gibi elektrik altyapı elemanlarının projelendirilmesini sağladım. Teknik çizimlerin hazırlanması, projelerin standartlara uygun olarak uygulanması ve saha kontrollerine yönelik süreçlerde aktif rol alarak pratik deneyim kazandım. Bu süreç, elektrik projelerinin planlama ve uygulama aşamalarını daha iyi kavramamı sağladı."
      : "During my internship, I actively used AutoCAD to work on detailed electrical installation designs for buildings. I created project layouts involving lighting systems, socket placements, junction box positions, and cable routing. I gained hands-on experience in preparing technical drawings, ensuring compliance with relevant standards, and contributing to on-site project implementation processes. This experience significantly enhanced my understanding of planning and executing electrical infrastructure projects.",
    technologies: [SiAutodesk],
    icon: () => (
     <ImageIcon
      src={tepas}
      alt="TEPAŞ"
      onClick={() => window.open("http://www.tepasmuhendislik.com.tr/", "_blank")}
     />
    ),
    color: "text-emerald-400",
   },
  ],
 },
 certificates: {
  icon: FaCertificate,
  color: "from-orange-900 to-orange-400",
  items: [
   {
    id: "react-cert",
    title: "Full Stack Development",
    institution: "Europe Coding School & Ecodation",
    period:
     language === "TR" ? "Mart 2024 - Ağustos 2024" : "March 2024 - August 2024",
    status: "completed",
    description:
     language === "TR"
      ? "Bu eğitim programı kapsamında, modern web teknolojilerine kapsamlı bir giriş yaptım. HTML, CSS ve JavaScript gibi temel dillerden başlayarak, React ve Next.js gibi ileri seviye JavaScript framework'leri üzerine yoğunlaştım. Eğitim süresince, gerçek dünya senaryolarına uygun projeler geliştirerek hem frontend hem de backend alanlarında uygulamalı deneyim kazandım. Veritabanı yönetimi (MySQL, MongoDB vb.) ve sunucu taraflı programlama konularında da bilgi sahibi olarak, tam yığın (full stack) bir geliştirici olma yolunda önemli bir adım attım. Ayrıca, takım çalışması, proje yönetimi ve versiyon kontrol sistemleri (Git, GitHub) gibi yazılım geliştirme süreçlerinde kullanılan araçları aktif şekilde kullanarak, yazılım geliştirme disiplinlerini yerinde uyguladım. Bu eğitim sonucunda, modern ve kullanıcı dostu web uygulamaları geliştirebilecek bilgi ve yetkinliğe ulaştım."
      : "Throughout this comprehensive training program, I gained a solid foundation in modern web technologies. Starting with core languages like HTML, CSS, and JavaScript, I progressed to advanced frameworks such as React and Next.js. By developing various hands-on projects based on real-world scenarios, I acquired practical experience in both frontend and backend development. I also gained knowledge in database management (such as MySQL and MongoDB) and server-side programming, which allowed me to build complete, end-to-end web applications. During the program, I actively used tools like Git and GitHub, and participated in collaborative projects, which enhanced my understanding of software development workflows, teamwork, and project management. As a result of this training, I have developed the skills and confidence to create modern, professional, and user-friendly web applications as a full stack developer.",
    achievements:
     language === "TR"
      ? [
       "Kişisel ve profesyonel portföy web sitesi tasarımı ve geliştirilmesi",
       "Yeniden kullanılabilir React komponentleri kütüphanesi oluşturulması",
       "Responsive tasarım prensipleriyle mobil uyumlu web uygulamaları geliştirme",
      ]
      : [
       "Design and development of personal and professional portfolio websites",
       "Creation of a library of reusable React components",
       "Developing mobile-compatible web applications with responsive design principles",
      ],
    technologies: [SiHtml5, SiCss3, SiBootstrap, SiReact, SiJavascript, FaGithub],
    icon: FaCertificate,
    color: "text-yellow-500",
   },
  ],
 },
});