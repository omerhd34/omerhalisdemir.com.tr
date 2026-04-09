import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const projectsData = [
 {
  category: "web",
  titleTr: "Kişisel Portfolio Web Sitesi",
  titleEn: "Personal Portfolio Website",
  descriptionTr:
   "Next.js ve React ile geliştirdiğim, TR/EN çoklu dil desteği, dinamik proje yönetimi ve iletişim formu entegrasyonu içeren kişisel portföy platformu. Hem teknik yetkinliğimi hem de gerçek müşteri projelerimi sergileyen aktif bir dijital vitrin.",
  descriptionEn:
   "A personal portfolio platform developed with Next.js and React, featuring TR/EN multi-language support, dynamic project management, and contact form integration. An active digital showcase presenting both my technical skills and real client projects.",
  longDescriptionTr:
   "Bu portföy platformu, Next.js, React ve Node.js teknolojileriyle geliştirilmiş; PostgreSQL ve Prisma ORM ile güvenli bir veri katmanı kurulmuştur. TR/EN çoklu dil desteği, SSR ile SEO optimizasyonu ve gelişmiş animasyonlar kullanıcı deneyimini ön plana çıkarır. Dinamik içerik yönetimi sayesinde yeni projeler ve deneyimler kolayca güncellenebilmektedir. İletişim formu entegrasyonu ile ziyaretçiler doğrudan iletişime geçebilir. Vercel üzerinde yayınlanan platform aktif olarak kullanılmakta ve sürekli geliştirilmektedir.",
  longDescriptionEn:
   "This portfolio platform is built with Next.js, React, and Node.js, with a secure data layer powered by PostgreSQL and Prisma ORM. TR/EN multi-language support, SSR-based SEO optimization, and advanced animations put user experience at the forefront. Dynamic content management allows new projects and experiences to be updated with ease. Contact form integration enables visitors to reach out directly. Published on Vercel, the platform is actively used and continuously improved.",
  status: "completed",
  technologies: [
   "FaJsSquare",
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiPostgresql",
   "SiPrisma",
   "FaNodeJs",
  ],
  featuresTr: [
   "Çok dilli destek (TR/EN)",
   "Dinamik içerik yönetimi",
   "SEO optimizasyonu (SSR)",
   "Gelişmiş animasyonlar",
   "İletişim formu entegrasyonu",
   "Responsive tasarım",
   "Güvenli ve ölçeklenebilir altyapı",
   "Bileşen tabanlı mimari",
  ],
  featuresEn: [
   "Multi-language support (TR/EN)",
   "Dynamic content management",
   "SEO optimization (SSR)",
   "Advanced animations",
   "Contact form integration",
   "Responsive design",
   "Secure and scalable infrastructure",
   "Component-based architecture",
  ],
  liveUrl: "https://omerhalisdemir.com.tr",
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "3 hafta" },
   { label: "Dil Desteği", value: "TR / EN" },
   { label: "Durum", value: "Aktif" },
   { label: "Deploy", value: "Vercel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "3 weeks" },
   { label: "Language Support", value: "TR / EN" },
   { label: "Status", value: "Active & Improving" },
   { label: "Deploy", value: "Vercel" },
  ],
  displayOrder: 1,
 },
 {
  category: "web",
  titleTr: "Yazıcı Ticaret E-Ticaret Sitesi",
  titleEn: "Yazıcı Ticaret E-Commerce Website",
  descriptionTr:
   "Beyaz eşya ve ev elektroniği sektöründe faaliyet gösteren Yazıcı Ticaret için geliştirilen tam kapsamlı e-ticaret platformu. Profilo ve LG ürünlerini listeleyen platform; ödeme entegrasyonu, sipariş takip sistemi ve güçlü admin paneliyle aktif olarak kullanılmaktadır.",
  descriptionEn:
   "A full-featured e-commerce platform developed for Yazıcı Ticaret, operating in the home appliances and electronics sector. Listing Profilo and LG products, the platform is actively used with payment integration, order tracking, and a powerful admin panel.",
  longDescriptionTr:
   "Yazıcı Ticaret için Next.js, React ve Node.js teknolojileriyle geliştirilen bu e-ticaret platformu, müşterilerin Profilo ve LG gibi markalardan ürün satın almasını, siparişlerini takip etmesini ve hesaplarını yönetmesini sağlar. Ürün filtreleme, karşılaştırma ve arama özellikleriyle kullanıcı deneyimi ön planda tutulmuştur. Güvenli ödeme entegrasyonu ile kredi/banka kartı işlemleri sorunsuz gerçekleşmekte; her sipariş için üretilen benzersiz takip numarası sayesinde müşteriler siparişlerini anlık olarak takip edebilmektedir. Kapsamlı admin paneli aracılığıyla ürün yönetimi, stok takibi, fiyat güncellemeleri ve sipariş süreçleri kolayca yönetilebilmektedir. MongoDB altyapısı ve Vercel deployment ile yüksek performans ve güvenilirlik sağlanmıştır.",
  longDescriptionEn:
   "Built with Next.js, React, and Node.js for Yazıcı Ticaret, this e-commerce platform allows customers to purchase products from brands like Profilo and LG, track their orders, and manage their accounts. Product filtering, comparison, and search features ensure a smooth user experience. Secure payment integration handles credit and debit card transactions reliably, while unique tracking numbers keep customers informed about their order status in real time. The comprehensive admin panel makes product management, inventory tracking, price updates, and order processing straightforward. MongoDB and Vercel deployment ensure high performance and reliability.",
  status: "completed",
  liveUrl: "https://yazici.gen.tr/",
  technologies: [
   "FaJsSquare",
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "FaNodeJs",
  ],
  featuresTr: [
   "Güvenli ödeme entegrasyonu",
   "Sipariş takip sistemi (benzersiz takip no)",
   "Kapsamlı admin paneli",
   "Kullanıcı hesap sistemi",
   "Ürün filtreleme, arama ve karşılaştırma",
   "Sepet ve stok yönetimi",
   "Server-side rendering & SEO",
   "Responsive tasarım",
   "Favoriye ekleme",
   "Bileşen tabanlı mimari",
  ],
  featuresEn: [
   "Secure payment integration",
   "Order tracking system (unique tracking number)",
   "Comprehensive admin panel",
   "User account system",
   "Product filtering, search and comparison",
   "Cart and inventory management",
   "Server-side rendering & SEO",
   "Responsive design",
   "Add to favorites",
   "Component-based architecture",
  ],
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "7 hafta" },
   { label: "Durum", value: "Aktif" },
   { label: "Ödeme", value: "Entegre" },
   { label: "Deploy", value: "Vercel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "7 weeks" },
   { label: "Status", value: "Actively Used" },
   { label: "Payment", value: "Integrated" },
   { label: "Deploy", value: "Vercel" },
  ],
  displayOrder: 2,
 },
 {
  category: "web",
  titleTr: "Uzman Klinik Psikolog Web Sitesi",
  titleEn: "Expert Clinical Psychologist Website",
  descriptionTr:
   "Uzman Klinik Psikolog Nisa Demir için geliştirilen profesyonel web platformu. Randevu talep sistemi, SEO optimizasyonu ve dinamik içerik yönetimiyle psikologun dijital varlığını güçlendiren, aktif olarak kullanılan bir çözüm.",
  descriptionEn:
   "A professional web platform developed for Expert Clinical Psychologist Nisa Demir. Featuring an appointment request system, SEO optimization, and dynamic content management — actively used by the client to strengthen their digital presence.",
  longDescriptionTr:
   "Uzman Klinik Psikolog Nisa Demir'in potansiyel danışanlarına ulaşmasını kolaylaştırmak amacıyla Next.js ve React ile geliştirilen tam kapsamlı bir web platformu. MongoDB ve Prisma ORM altyapısıyla güvenli veri yönetimi sağlanmış; randevu talep sistemi ile ziyaretçiler doğrudan uzmanla iletişime geçebilmektedir. Server-side rendering ile SEO skoru optimize edilmiş, Tailwind CSS ile tüm cihazlarda tutarlı kullanıcı deneyimi sunulmuştur. Vercel üzerinde yayınlanan platform, müşteri tarafından aktif olarak kullanılmaktadır.",
  longDescriptionEn:
   "A full-featured web platform built with Next.js and React to help Expert Clinical Psychologist Nisa Demir reach potential clients online. Secure data management is handled via MongoDB and Prisma ORM, while the integrated appointment request system allows visitors to contact the specialist directly. Server-side rendering ensures strong SEO performance, and Tailwind CSS delivers a consistent experience across all devices. The platform is live on Vercel and actively used by the client.",
  status: "completed",
  technologies: [
   "FaJsSquare",
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "FaNodeJs",
  ],
  featuresTr: [
   "Randevu talep sistemi",
   "SEO optimizasyonu (SSR)",
   "Dinamik içerik yönetimi",
   "İletişim formu entegrasyonu",
   "Responsive tasarım",
   "Güvenli veri koruma ve gizlilik",
   "Bileşen tabanlı mimari",
   "Performans optimizasyonu",
   "Erişilebilirlik özellikleri",
  ],
  featuresEn: [
   "Appointment booking system",
   "SEO optimization (SSR)",
   "Dynamic content management",
   "Contact form integration",
   "Responsive design",
   "Secure data protection and privacy",
   "Component-based architecture",
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
   { label: "Durum", value: "Aktif" },
   { label: "SEO", value: "Server-side Rendering" },
   { label: "Deploy", value: "Vercel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "1.5 weeks" },
   { label: "Status", value: "Actively Used" },
   { label: "SEO", value: "Server-side Rendering" },
   { label: "Deploy", value: "Vercel" },
  ],
  displayOrder: 3,
 },
 {
  category: "web",
  titleTr: "Mali Müşavir Web Platformu",
  titleEn: "Certified Public Accountant Web Platform",
  descriptionTr:
   "Serbest Muhasebeci Mali Müşavir Şahin Demir için geliştirilen profesyonel web platformu. SEO optimizasyonu ve dinamik içerik yönetimiyle müşavirin dijital varlığını güçlendiren, koyu/açık mod desteğiyle kişiselleştirilmiş kullanıcı deneyimi sunan aktif bir çözüm.",
  descriptionEn:
   "A professional web platform developed for Certified Public Accountant Şahin Demir. An actively used solution that strengthens the accountant's digital presence with SEO optimization and dynamic content management, offering a personalized user experience with dark/light mode support.",
  longDescriptionTr:
   "Mali Müşavir Şahin Demir'in potansiyel müşterilere ulaşmasını kolaylaştırmak amacıyla Next.js ve React ile geliştirilen bu platform, muhasebe hizmetlerini dijital ortamda etkili biçimde sunmaktadır. MongoDB ve Prisma ORM altyapısıyla güvenli veri yönetimi sağlanmış; iletişim formu entegrasyonu sayesinde ziyaretçiler doğrudan müşavirle bağlantı kurabilmektedir. Server-side rendering ile SEO skoru optimize edilmiş, dinamik içerik yönetimiyle site güncellemeleri kolaylaştırılmıştır. Koyu/açık mod özelliği, kullanıcılara tercihlerine göre kişiselleştirilmiş bir görsel deneyim sunar. Platform, ixirhost domainiyle cPanel üzerinden yönetilmekte ve aktif olarak kullanılmaktadır.",
  longDescriptionEn:
   "Developed with Next.js and React to help Certified Public Accountant Şahin Demir reach potential clients, this platform effectively presents accounting services in the digital space. Secure data management is handled via MongoDB and Prisma ORM, while contact form integration allows visitors to connect with the accountant directly. Server-side rendering ensures strong SEO performance, and dynamic content management simplifies site updates. The dark/light mode feature provides a personalized visual experience based on user preferences. The platform is managed via cPanel with an ixirhost domain and is actively in use.",
  status: "completed",
  technologies: [
   "FaJsSquare",
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "FaNodeJs",
  ],
  featuresTr: [
   "SEO optimizasyonu (SSR)",
   "Koyu/Açık mod",
   "Dinamik içerik yönetimi",
   "İletişim formu entegrasyonu",
   "Responsive tasarım",
   "Güvenli ve ölçeklenebilir altyapı",
   "Bileşen tabanlı mimari",
   "Veritabanı entegrasyonu",
  ],
  featuresEn: [
   "SEO optimization (SSR)",
   "Dark/Light mode",
   "Dynamic content management",
   "Contact form integration",
   "Responsive design",
   "Secure and scalable infrastructure",
   "Component-based architecture",
   "Database integration",
  ],
  liveUrl: "https://onlinemuhasebe.org/",
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "1.5 hafta" },
   { label: "Durum", value: "Aktif" },
   { label: "SEO", value: "Server-side Rendering" },
   { label: "Deploy", value: "cPanel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "1.5 weeks" },
   { label: "Status", value: "Actively Used" },
   { label: "SEO", value: "Server-side Rendering" },
   { label: "Deploy", value: "cPanel" },
  ],
  displayOrder: 4,
 },
 {
  category: "web",
  titleTr: "Yazıcı Ticaret Dijital Katalog Platformu",
  titleEn: "Yazıcı Ticaret Digital Catalog Platform",
  descriptionTr:
   "Beyaz eşya sektöründe faaliyet gösteren Yazıcı Ticaret için geliştirilen dijital katalog ve müşteri talep platformu. Stokta olmayan ürünler için talep oluşturma, benzersiz takip numarasıyla talep sorgulama ve kapsamlı admin paneliyle aktif olarak kullanılan bir çözüm.",
  descriptionEn:
   "A digital catalog and customer request platform developed for Yazıcı Ticaret, operating in the home appliances sector. An actively used solution featuring request submission for out-of-stock products, request tracking with unique numbers, and a comprehensive admin panel.",
  longDescriptionTr:
   "Yazıcı Ticaret'in müşterilerine daha iyi hizmet sunmasını sağlamak amacıyla Next.js, React ve Node.js ile geliştirilen bu platform, standart bir katalog sitesinin ötesine geçer. Stokta bulunmayan veya özel ürünler için müşteriler talep formu doldurabilir; her talep için üretilen benzersiz takip numarasıyla taleplerinin güncel durumunu sorgulayabilirler. Entegre iletişim modülü sayesinde müşteriler doğrudan firma yetkilileriyle iletişime geçebilmektedir. Admin paneli aracılığıyla ürün yönetimi, talep durumu güncellemeleri ve iletişim süreçleri kolayca yönetilmektedir. MongoDB ve Prisma ORM altyapısıyla güvenli veri yönetimi sağlanmış, platform cPanel üzerinden yönetilmekte ve aktif olarak kullanılmaktadır.",
  longDescriptionEn:
   "Developed with Next.js, React, and Node.js to help Yazıcı Ticaret serve its customers more effectively, this platform goes beyond a standard catalog site. Customers can submit request forms for out-of-stock or special products, and track their request status using unique tracking numbers generated for each submission. The integrated communication module allows customers to contact company representatives directly. Product management, request status updates, and communication processes are handled easily through the admin panel. Secure data management is powered by MongoDB and Prisma ORM, and the platform is managed via cPanel and actively in use.",
  status: "completed",
  technologies: [
   "FaJsSquare",
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiMongodb",
   "SiPrisma",
   "FaNodeJs",
  ],
  featuresTr: [
   "Ürün talep oluşturma sistemi",
   "Benzersiz takip numarasıyla talep sorgulama",
   "Kapsamlı admin paneli",
   "Entegre iletişim modülü",
   "Dijital ürün kataloğu",
   "Server-side rendering & SEO",
   "Responsive tasarım",
   "Güvenli ve ölçeklenebilir altyapı",
  ],
  featuresEn: [
   "Product request submission system",
   "Request tracking with unique number",
   "Comprehensive admin panel",
   "Integrated communication module",
   "Digital product catalog",
   "Server-side rendering & SEO",
   "Responsive design",
   "Secure and scalable infrastructure",
  ],
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "1 hafta" },
   { label: "Durum", value: "Aktif değil" },
   { label: "Talep Takibi", value: "Benzersiz No ile" },
   { label: "Deploy", value: "cPanel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "1 week" },
   { label: "Status", value: "Not active" },
   { label: "Request Tracking", value: "Unique Number" },
   { label: "Deploy", value: "cPanel" },
  ],
  displayOrder: 5,
 },
 {
  category: "web",
  titleTr: "Emlak Platformu",
  titleEn: "Real Estate Platform",
  descriptionTr: "Konut ve ticari gayrimenkul ilanlarını bir araya getiren modern emlak platformu. Harita tabanlı arama, sanal tur ve randevu sistemiyle aktif olarak kullanılmaktadır.",
  descriptionEn: "A modern real estate platform bringing together residential and commercial listings. Actively used with map-based search, virtual tour, and appointment booking features.",
  longDescriptionTr: "Next.js ve Prisma ile geliştirilen bu platform, kullanıcıların harita üzerinde konum bazlı mülk araması yapmasına, 360° sanal tur izlemesine ve doğrudan ilan sahibiyle randevu almasına olanak tanır. Gelişmiş filtre sistemi (fiyat aralığı, oda sayısı, metrekare, ısıtma tipi) sayesinde kullanıcılar istedikleri mülke hızla ulaşabilmektedir. İlan sahipleri için sunulan kapsamlı dashboard üzerinden ilan yönetimi, görüntülenme istatistikleri ve mesajlaşma özellikleri bulunmaktadır. PostgreSQL ve Prisma ORM altyapısı, Railway üzerinde deploy edilmiştir.",
  longDescriptionEn: "Built with Next.js and Prisma, this platform lets users search for properties on a map, view 360° virtual tours, and book appointments directly with listing owners. Advanced filters (price range, room count, square footage, heating type) make it easy to find the right property. The comprehensive owner dashboard includes listing management, view statistics, and messaging. Backed by PostgreSQL and Prisma ORM, deployed on Railway.",
  status: "completed",
  technologies: [
   "SiTypescript",
   "FaReact",
   "SiNextdotjs",
   "SiTailwindcss",
   "SiPostgresql",
   "FaNodeJs",
   "SiPrisma",
  ],
  featuresTr: [
   "Harita tabanlı mülk arama",
   "360° sanal tur",
   "Randevu ve takvim sistemi",
   "Gelişmiş filtre motoru",
   "İlan sahibi dashboard",
   "Görüntülenme istatistikleri",
   "Dahili mesajlaşma",
   "Responsive tasarım",
   "SEO optimizasyonu",
   "Rol tabanlı yetkilendirme",
  ],
  featuresEn: [
   "Map-based property search",
   "360° virtual tour",
   "Appointment and calendar system",
   "Advanced filter engine",
   "Listing owner dashboard",
   "View statistics",
   "Built-in messaging",
   "Responsive design",
   "SEO optimization",
   "Role-based authorization",
  ],
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "3 hafta" },
   { label: "Durum", value: "Aktif" },
   { label: "İlan Sayısı", value: "1,200+" },
   { label: "Deploy", value: "Vercel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "3 weeks" },
   { label: "Status", value: "Active" },
   { label: "Listings", value: "1,200+" },
   { label: "Deploy", value: "Vercel" },
  ],
  displayOrder: 6,
 },
 {
  category: "web",
  titleTr: "Dil Öğrenme Platformu",
  titleEn: "Language Learning Platform",
  descriptionTr:
   "Yapay zeka destekli kelime kartları, adaptif quiz motoru ve konuşma pratiği ile İngilizce öğrenmeyi kişiselleştiren interaktif web uygulaması.",
  descriptionEn:
   "An interactive web app that personalizes English learning with AI-powered flashcards, an adaptive quiz engine, and speaking practice.",
  longDescriptionTr:
   "Next.js ve Prisma ile geliştirilen bu platform, kullanıcının doğru/yanlış oranına göre tekrar aralıklarını dinamik olarak ayarlayan bir spaced repetition algoritması kullanır. OpenAI API entegrasyonu sayesinde her kelime için örnek cümleler ve bağlam açıklamaları otomatik üretilmektedir. Web Speech API ile desteklenen konuşma pratik modülü, telaffuz puanlama özelliği sunar. Kullanıcılar günlük hedef belirleyebilir, rozet kazanabilir ve haftalık ilerleme raporlarını e-posta ile alabilir.",
  longDescriptionEn:
   "Built with Next.js and Prisma, this platform uses a spaced repetition algorithm that dynamically adjusts review intervals based on the user's correct/incorrect ratio. OpenAI API integration auto-generates example sentences and context explanations for each word. The speaking practice module powered by the Web Speech API offers pronunciation scoring. Users can set daily goals, earn badges, and receive weekly progress reports by email.",
  status: "completed",
  technologies: [
   "FaJsSquare",
   "FaReact",
   "SiNextdotjs",
   "FaNodeJs",
   "SiPostgresql",
   "SiPrisma",
   "SiOpenai",
  ],
  featuresTr: [
   "Spaced repetition algoritması",
   "AI destekli kelime kartları",
   "Adaptif quiz motoru",
   "Telaffuz puanlama (Web Speech API)",
   "Günlük hedef ve rozet sistemi",
   "Haftalık ilerleme raporu (e-posta)",
   "OpenAI ile örnek cümle üretimi",
   "Kullanıcı istatistik dashboard",
   "Koyu/açık tema",
   "Responsive tasarım",
  ],
  featuresEn: [
   "Spaced repetition algorithm",
   "AI-powered flashcards",
   "Adaptive quiz engine",
   "Pronunciation scoring (Web Speech API)",
   "Daily goal and badge system",
   "Weekly progress report (email)",
   "OpenAI-generated example sentences",
   "User statistics dashboard",
   "Dark/light theme",
   "Responsive design",
  ],
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "4 hafta" },
   { label: "Durum", value: "Aktif" },
   { label: "Kayıtlı Kullanıcı", value: "900+" },
   { label: "Deploy", value: "Vercel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "4 weeks" },
   { label: "Status", value: "Actively Used" },
   { label: "Registered Users", value: "900+" },
   { label: "Deploy", value: "Vercel" },
  ],
  displayOrder: 7,
 },
 {
  category: "web",
  titleTr: "Depo Yönetim Sistemi",
  titleEn: "Warehouse Management System",
  descriptionTr:
   "Küçük ve orta ölçekli işletmelerin stok hareketlerini, tedarikçi ilişkilerini ve sevkiyat süreçlerini tek ekrandan yönetmesini sağlayan web tabanlı depo yönetim sistemi.",
  descriptionEn:
   "A web-based warehouse management system that lets small and mid-sized businesses manage stock movements, supplier relations, and shipping processes from a single screen.",
  longDescriptionTr:
   "Next.js ve Prisma ile geliştirilen bu sistem, barkod tarayıcı desteğiyle ürün giriş/çıkış işlemlerini hızlandırır. Kritik stok seviyesi eşiği aşıldığında sistem otomatik e-posta ve uygulama içi bildirim gönderir. Tedarikçi modülü; sipariş takibi, fatura yükleme ve ödeme durumu yönetimini kapsar. Sevkiyat entegrasyonu sayesinde kargo firması API'leriyle takip numaraları otomatik oluşturulmaktadır. Tüm hareketler tarih bazlı filtrelenebilir raporlara yansımaktadır.",
  longDescriptionEn:
   "Built with Next.js and Prisma, this system speeds up product check-in/check-out with barcode scanner support. When a critical stock level threshold is crossed, the system automatically sends email and in-app notifications. The supplier module covers order tracking, invoice uploads, and payment status management. Shipping integration auto-generates tracking numbers via courier company APIs. All movements are reflected in date-filterable reports.",
  status: "completed",
  technologies: [
   "SiTypescript",
   "FaReact",
   "SiNextdotjs",
   "FaNodeJs",
   "SiPrisma",
   "SiPostgresql",
   "SiTailwindcss",
  ],
  featuresTr: [
   "Barkod tarayıcı desteği",
   "Kritik stok seviyesi bildirimi",
   "Tedarikçi ve sipariş yönetimi",
   "Fatura yükleme ve ödeme takibi",
   "Kargo API entegrasyonu",
   "Tarih bazlı stok raporları",
   "Çoklu depo desteği",
   "Kullanıcı rol yönetimi",
   "CSV dışa aktarma",
   "Responsive tasarım",
  ],
  featuresEn: [
   "Barcode scanner support",
   "Critical stock level notification",
   "Supplier and order management",
   "Invoice upload and payment tracking",
   "Courier API integration",
   "Date-based stock reports",
   "Multi-warehouse support",
   "User role management",
   "CSV export",
   "Responsive design",
  ],
  teamTr: "Bireysel",
  teamEn: "Individual",
  roleTr: "Full Stack Developer",
  roleEn: "Full Stack Developer",
  metricsTr: [
   { label: "Geliştirme Süresi", value: "5 hafta" },
   { label: "Durum", value: "Aktif" },
   { label: "Ürün Kaydı", value: "5.000+" },
   { label: "Deploy", value: "Vercel" },
  ],
  metricsEn: [
   { label: "Development Time", value: "5 weeks" },
   { label: "Status", value: "Active" },
   { label: "Product Records", value: "5,000+" },
   { label: "Deploy", value: "Vercel" },
  ],
  displayOrder: 8,
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
