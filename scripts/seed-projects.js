const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const projectsData = [
 {
  category: "web",
  titleTr: "Uzman Klinik Psikolog Web Sitesi",
  titleEn: "Expert Clinical Psychologist Website",
  descriptionTr:
   "Uzman Klinik Psikolog Nisa Demir için geliştirilen modern ve profesyonel web platformu. Ziyaretçiler, uzman hizmetler hakkında detaylı bilgi alabilir, randevu talep edebilir ve iletişime geçebilirler. Modern tasarım anlayışı ile şekillendirilmiş, responsive yapıya sahip platform tüm cihazlarda mükemmel bir kullanıcı deneyimi sunmaktadır.",
  descriptionEn:
   "A modern and professional web platform developed for Expert Clinical Psychologist Nisa Demir. Visitors can access detailed information about expert services, request appointments, and get in touch. Shaped with a modern design approach, the responsive platform delivers an excellent user experience across all devices.",
  longDescriptionTr:
   "Bu proje, Uzman Klinik Psikolog Nisa Demir için Next.js ve React teknolojileri kullanılarak geliştirilmiş, profesyonel kimliği yansıtan modern bir web platformudur. MongoDB veritabanı altyapısı ve Prisma ORM ile güvenli ve ölçeklenebilir bir yapı kurulmuştur. Tailwind CSS ile şekillendirilmiş modern ve responsive tasarım, tüm cihazlarda mükemmel kullanıcı deneyimi sağlar. Server-side rendering ile SEO optimizasyonu sağlanmış, dinamik içerik yönetimi ile kolay güncelleme imkanı sunulmuştur. İletişim formu entegrasyonu, ziyaretçilerin doğrudan uzmanla bağlantı kurabilmesini mümkün kılar. Proje, Vercel platformunda yayınlanmış ve modern deployment yöntemleri ile yönetilmektedir. Bu platform, profesyonel psikoloji hizmetlerinin dijital dünyada etkili bir şekilde sunulmasını hedefler.",
  longDescriptionEn:
   "This project is a modern web platform developed using Next.js and React technologies for Expert Clinical Psychologist Nisa Demir, reflecting a professional identity. A secure and scalable structure has been established with MongoDB database infrastructure and Prisma ORM. The modern and responsive design shaped with Tailwind CSS ensures an excellent user experience across all devices. SEO optimization has been achieved with server-side rendering, and dynamic content management offers easy update capabilities. Contact form integration enables visitors to connect directly with the expert. The project is published on the Vercel platform and managed through modern deployment methods. This platform aims to effectively present professional psychology services in the digital world.",
  status: "completed",
  technologies: [
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "SiNodedotjs",
  ],
  featuresTr: [
   "Responsive tasarım",
   "Bileşen tabanlı mimari",
   "Güvenli ve Ölçeklenebilir Altyapı",
   "Server-side rendering",
   "Veritabanı entegrasyonu",
   "İletişim formu",
   "Randevu talep sistemi",
   "Dinamik içerik yönetimi",
   "SEO optimizasyonu",
   "Güvenli veri koruma ve gizlilik",
   "Performans optimizasyonu",
   "Erişilebilirlik özellikleri",
  ],
  featuresEn: [
   "Responsive design",
   "Component-based architecture",
   "Secure and Scalable Infrastructure",
   "Server-side rendering",
   "Database integration",
   "Contact form",
   "Appointment booking system",
   "Dynamic content management",
   "SEO optimization",
   "Secure data protection and privacy",
   "Performance optimization",
   "Accessibility features",
  ],
  liveUrl: "https://nisademir.com/",
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "1.5 hafta" },
   { label: "Boyut", value: "1.16 GB" },
  ],
  metricsEn: [
   { label: "Development Time", value: "1.5 weeks" },
   { label: "Size", value: "1.16 GB" },
  ],
  displayOrder: 3,
 },
 {
  category: "web",
  titleTr: "Yazıcı Ticaret E-Ticaret Sitesi",
  titleEn: "Yazıcı Ticaret E-Commerce Website",
  descriptionTr:
   "Yazıcı Ticaret, beyaz eşya, TV, elektrikli süpürge ve benzeri ev aletleri sektöründe faaliyet gösteren köklü bir firmanın modern e-ticaret platformudur. Profilo ve LG gibi önde gelen markaların ürünlerini satan platform, müşterilere geniş bir ürün kataloğu sunmaktadır. Müşteriler, ürünleri inceleyebilir, karşılaştırabilir, sepete ekleyebilir, güvenli ödeme işlemlerini gerçekleştirebilir ve siparişlerini benzersiz takip numaraları ile sistem üzerinden takip edebilirler. Platform, kullanıcı hesapları, sepet yönetimi, ödeme entegrasyonu, sipariş takip sistemi ve ürün karşılaştırma gibi kapsamlı e-ticaret özellikleri sunmaktadır. Güçlü admin paneli sayesinde site yöneticileri yeni ürün ekleme, ürün güncelleme/silme, stok takibi, sipariş yönetimi ve müşteri ilişkilerini kolayca yönetebilmektedir.",
  descriptionEn:
   "Yazıcı Ticaret is a modern e-commerce platform for an established company operating in the home appliances, TV, vacuum cleaners, and similar household appliances sector. The platform sells products from leading brands such as Profilo and LG, offering customers a wide product catalog. Customers can browse products, compare them, add to cart, complete secure payment transactions, and track their orders using unique tracking numbers through the system. The platform offers comprehensive e-commerce features including user accounts, cart management, payment integration, order tracking system, and product comparison. With the powerful admin panel, site administrators can easily manage adding new products, updating/deleting products, inventory tracking, order management, and customer relations.",
  longDescriptionTr:
   "Yazıcı Ticaret, beyaz eşya, TV, elektrikli süpürge ve benzeri ev aletleri sektöründe faaliyet gösteren köklü bir firmanın tam özellikli e-ticaret platformudur. Profilo ve LG gibi önde gelen markaların ürünlerini satan platform, müşterilere geniş bir ürün kataloğu sunmaktadır. Müşteriler, ürün detay sayfalarında teknik özellikleri ve görselleri görüntüleyebilir, ürünleri kategorilere göre filtreleyebilir, arama yapabilir ve ürün karşılaştırma özelliği ile farklı ürünleri yan yana karşılaştırabilirler. Gelişmiş sepet sistemi sayesinde kullanıcılar ürünleri sepete ekleyebilir, miktar değişiklikleri yapabilir ve sepet içeriğini yönetebilirler. Güvenli ödeme entegrasyonu ile müşteriler kredi kartı, banka kartı veya diğer ödeme yöntemleriyle alışverişlerini tamamlayabilirler. Her sipariş için benzersiz bir takip numarası oluşturulur ve müşteriler bu numara ile siparişlerinin durumunu (hazırlanıyor, kargoya verildi, teslim edildi) gerçek zamanlı olarak takip edebilirler. Kullanıcı hesapları sayesinde müşteriler sipariş geçmişlerini görüntüleyebilir, adres bilgilerini yönetebilir ve favori ürünlerini kaydedebilirler. Güçlü admin paneli ile site yöneticileri, yeni ürün ekleme, ürün güncelleme ve silme, stok yönetimi, fiyat güncellemeleri, sipariş durumu yönetimi, müşteri bilgileri ve iletişim formlarını yönetme gibi tüm e-ticaret operasyonlarını kolayca gerçekleştirebilmektedir. React.js, Next.js ve Node.js teknolojileriyle geliştirilen platform, MongoDB veritabanı ile desteklenerek yüksek performans, güvenlik ve güvenilirlik sağlamaktadır. Proje, ixirhost şirketinden alınan domain ile Vercel platformunda yayınlanmış ve modern deployment yöntemleri ile yönetilmektedir.",
  longDescriptionEn:
   "Yazıcı Ticaret is a full-featured e-commerce platform for an established company operating in the home appliances, TV, vacuum cleaners, and similar household appliances sector. The platform sells products from leading brands such as Profilo and LG, offering customers a wide product catalog. Customers can view technical specifications and images on product detail pages, filter products by categories, perform searches, and compare different products side by side using the product comparison feature. Through the advanced shopping cart system, users can add products to cart, modify quantities, and manage cart contents. With secure payment integration, customers can complete their purchases using credit cards, debit cards, or other payment methods. A unique tracking number is generated for each order, and customers can track their order status (preparing, shipped, delivered) in real-time using this number. Through user accounts, customers can view their order history, manage address information, and save favorite products. With the powerful admin panel, site administrators can easily perform all e-commerce operations such as adding new products, updating and deleting products, inventory management, price updates, order status management, customer information, and managing contact forms. Developed with React.js, Next.js and Node.js technologies, the platform is supported by MongoDB database, ensuring high performance, security, and reliability. The project is published on the Vercel platform with a domain obtained from ixirhost company and managed through modern deployment methods.",
  status: "completed",
  technologies: [
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiNodedotjs",
  ],
  featuresTr: [
   "Responsive tasarım",
   "Bileşen tabanlı mimari",
   "Güvenli ve Ölçeklenebilir Altyapı",
   "Server-side rendering",
   "Veritabanı entegrasyonu",
   "Kullanıcı hesap sistemi",
   "Sepet yönetimi",
   "Ödeme entegrasyonu",
   "Sipariş takip sistemi",
   "Ürün filtreleme ve arama",
   "Ürün karşılaştırma",
   "Favoriye ekleme",
   "Stok yönetimi",
   "Admin paneli",
  ],
  featuresEn: [
   "Responsive design",
   "Component-based architecture",
   "Secure and Scalable Infrastructure",
   "Server-side rendering",
   "Database integration",
   "User account system",
   "Shopping cart management",
   "Payment integration",
   "Order tracking system",
   "Product filtering and search",
   "Product comparison",
   "Add to favorites",
   "Inventory management",
   "Admin panel",
  ],
  liveUrl: "",
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "6 hafta" },
   { label: "Boyut", value: "1065 MB" },
  ],
  metricsEn: [
   { label: "Development Time", value: "6 week" },
   { label: "Size", value: "1065 MB" },
  ],
  displayOrder: 2,
 },
 {
  category: "web",
  titleTr: "Serbest Muhasebeci Mali Müşavir Web Sitesi",
  titleEn: "Free Certified Public Accountant Website",
  descriptionTr:
   "Modern ve profesyonel tasarım anlayışıyla geliştirilmiş, serbest muhasebeci mali müşavir Şahin Demir'in dijital kimliğini yansıtan kapsamlı web platformu. Ziyaretçiler, uzman hizmetler hakkında detaylı bilgi alabilir, koyu/açık mod özelliği ile kişiselleştirilmiş deneyim yaşayabilir ve doğrudan iletişime geçebilir.",
  descriptionEn:
   "A comprehensive web platform developed with a modern and professional design approach, reflecting the digital identity of certified public accountant Şahin Demir. Visitors can access detailed information about expert services, enjoy a personalized experience with dark/light mode, and get in touch directly.",
  longDescriptionTr:
   "Bu proje, serbest muhasebeci mali müşavir Şahin Demir için Next.js ve React teknolojileri kullanılarak geliştirilmiş, güçlü bir dijital varlık sunan web platformudur. MongoDB veritabanı altyapısı ve Node.js backend desteği ile güvenli, hızlı ve ölçeklenebilir bir yapı kurulmuştur. Tailwind CSS ile şekillendirilmiş modern ve responsive tasarım, tüm cihazlarda mükemmel kullanıcı deneyimi sağlar. Koyu/açık mod özelliği, kullanıcıların tercihlerine göre kişiselleştirilmiş görsel deneyim sunarken, bileşen tabanlı mimari sayesinde bakımı kolay ve performansı yüksek bir sistem elde edilmiştir. Server-side rendering ile SEO optimizasyonu sağlanmış, dinamik içerik yönetimi ile kolay güncelleme imkanı sunulmuştur. İletişim formu entegrasyonu, müşterilerin doğrudan bağlantı kurabilmesini mümkün kılar. Proje, ixirhost(İksir İnternet Hizmetleri A.Ş.) şirketinden alınan domain ile yayınlanmış ve cPanel üzerinden yönetilmektedir. Bu platform, profesyonel muhasebe hizmetlerinin dijital dünyada etkili bir şekilde sunulmasını hedefler.",
  longDescriptionEn:
   "This project is a web platform developed using Next.js and React technologies for certified public accountant Şahin Demir, providing a strong digital presence. A secure, fast, and scalable structure has been established with MongoDB database infrastructure and Node.js backend support. The modern and responsive design shaped with Tailwind CSS ensures an excellent user experience across all devices. The dark/light mode feature offers a personalized visual experience according to user preferences, while component-based architecture provides an easily maintainable and high-performance system. SEO optimization has been achieved with server-side rendering, and dynamic content management offers easy update capabilities. Contact form integration enables customers to connect directly. The project is published with a domain obtained from ixirhost company and managed through cPanel. This platform aims to effectively present professional accounting services in the digital world.",
  status: "completed",
  technologies: [
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "SiNodedotjs",
  ],
  featuresTr: [
   "Responsive tasarım",
   "Bileşen tabanlı mimari",
   "Güvenli ve Ölçeklenebilir Altyapı",
   "Server-side rendering",
   "SEO optimizasyonu(Arama Motorları Optimizasyonu)",
   "Veritabanı entegrasyonu",
   "İletişim formu",
   "Dinamik içerik yönetimi",
   "Koyu/Açık Mod",
  ],
  featuresEn: [
   "Responsive design",
   "Component-based architecture",
   "Secure and Scalable Infrastructure",
   "Server-side rendering",
   "SEO optimization(Search Engine Optimization)",
   "Database integration",
   "Contact form",
   "Dynamic content management",
   "Dark/Light Mode",
  ],
  liveUrl: "https://onlinemuhasebe.org/",
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "1.5 hafta" },
   { label: "Boyut", value: "1,78 GB" },
  ],
  metricsEn: [
   { label: "Development Time", value: "1.5 weeks" },
   { label: "Size", value: "1,78 GB" },
  ],
  displayOrder: 4,
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
   "Bu proje, JavaScript, React ve Next.js teknolojileriyle geliştirilen, modern tasarım prensiplerine dayalı kişisel bir portföy çalışmasıdır. Tailwind CSS ile stil tasarımı güçlendirilmiş, Node.js ve MongoDB altyapısıyla güvenli ve ölçeklenebilir bir yapı sağlanmıştır. Çoklu dil desteği, responsive tasarım, performans optimizasyonu ve component tabanlı mimari gibi modern yazılım yaklaşımlarını temel alır. Bu sayede proje; yeniden kullanılabilirlik, sürdürülebilirlik ve yüksek kullanıcı deneyimi açısından dikkat çekici bir çözüm sunar. Proje, ixirhost (İksir İnternet Hizmetleri A.Ş.) şirketinden alınan domain'in Vercel platformuna transfer edilmesiyle yayınlanmış ve Vercel üzerinden yönetilmektedir. Hedef, sade ama güçlü bir arayüzle profesyonel kimliğimi yansıtan bir dijital vitrin oluşturmaktır.",
  longDescriptionEn:
   "This project is a personal portfolio developed using JavaScript, React, and Next.js, built upon modern design principles. The visual design is enhanced with Tailwind CSS, while Node.js and MongoDB provide a secure and scalable backend structure. It embraces modern software approaches such as multi-language support, responsive design, performance optimization, and component-based architecture. As a result, the project stands out with its reusability, maintainability, and high-quality user experience. The project is published by transferring the domain obtained from ixirhost company to the Vercel platform and is managed through Vercel. The goal is to create a clean yet powerful interface that reflects my professional identity through a modern digital showcase.",
  status: "completed",
  technologies: [
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "SiNodedotjs",
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
  displayOrder: 1,
 },
 {
  category: "web",
  titleTr: "Yazıcı Ticaret Web Sitesi",
  titleEn: "Yazıcı Ticaret Website",
  descriptionTr:
   "Yazıcı Ticaret, beyaz eşya sektöründe faaliyet gösteren köklü bir firmanın dijital katalog ve müşteri iletişim platformudur. Müşteriler, geniş ürün yelpazesini inceleyebilir, stoklarda bulunmayan veya özel ürünler için talep oluşturabilir ve bu taleplerin durumunu benzersiz takip numaraları ile sistem üzerinden sorgulayabilirler. Platform, müşteri odaklı bir yaklaşımla geliştirilmiş olup, kullanıcılar ürün talebi oluşturma formunu doldurarak ihtiyaçlarını detaylı bir şekilde iletebilmektedir. Güçlü admin paneli sayesinde site yöneticileri ürün yönetimi, müşteri talepleri ve iletişim süreçlerini kolayca yönetebilmektedir.",
  descriptionEn:
   "Yazıcı Ticaret is a digital catalog and customer communication platform for an established company operating in the home appliances sector. Customers can browse the extensive product range, submit requests for out-of-stock or special products, and track the status of these requests using unique tracking numbers through the system. The platform has been developed with a customer-centric approach, allowing users to submit their needs in detail by filling out a product request form. With the powerful admin panel, site administrators can easily manage products, customer requests, and communication processes.",
  longDescriptionTr:
   "Yazıcı Ticaret, beyaz eşya sektöründe faaliyet gösteren köklü bir firmanın dijital katalog ve müşteri iletişim platformudur. Müşteriler, geniş ürün yelpazesini inceleyebilir, stoklarda bulunmayan veya özel ürünler için talepte bulunabilir ve bu taleplerin durumunu sistem üzerinden takip edebilirler. Platform, müşteri odaklı bir yaklaşımla geliştirilmiş olup, kullanıcılar ürün talebi oluşturma formunu doldurarak ihtiyaçlarını detaylı bir şekilde iletebilmektedir. Her talep için benzersiz bir takip numarası oluşturulur ve müşteriler bu numara ile taleplerinin güncel durumunu sorgulayabilirler. Entegre iletişim modülü sayesinde, müşteriler doğrudan firma yetkilileriyle iletişime geçebilir, ürünler hakkında detaylı bilgi alabilir veya teknik destek talep edebilirler. Güçlü admin paneli ile site yöneticileri, ürün ekleme/güncelleme, müşteri taleplerini yönetme, talep durumlarını güncelleme ve iletişim formlarını yanıtlama gibi işlemleri kolayca gerçekleştirebilmektedir. React.js, Next.js ve Node.js teknolojileriyle geliştirilen platform, MongoDB veritabanı ile desteklenerek yüksek performans ve güvenilirlik sağlamaktadır. Proje, ixirhost(İksir İnternet Hizmetleri A.Ş.) şirketinden alınan domain ile yayınlanmış ve cPanel üzerinden yönetilmektedir.",
  longDescriptionEn:
   "Yazıcı Ticaret is a digital catalog and customer communication platform for an established company operating in the home appliances sector. Customers can browse the extensive product range, submit requests for out-of-stock or special products, and track the status of these requests through the system. The platform has been developed with a customer-centric approach, allowing users to submit their needs in detail by filling out a product request form. A unique tracking number is generated for each request, and customers can check the current status of their requests using this number. Through the integrated communication module, customers can directly contact company representatives, obtain detailed information about products, or request technical support. With the powerful admin panel, site administrators can easily perform operations such as adding/updating products, managing customer requests, updating request statuses, and responding to contact forms. Developed with React.js, Next.js and Node.js technologies, the platform is supported by MongoDB database, ensuring high performance and reliability. The project is published with a domain obtained from ixirhost company and managed through cPanel.",
  status: "completed",
  technologies: [
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "SiNodedotjs",
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
  displayOrder: 5,
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
  displayOrder: 6,
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
  displayOrder: 7,
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
