# 🚀 omerhalisdemir.com.tr

> Modern ve dinamik kişisel portföy web sitesi - Next.js 15, Prisma ve PostgreSQL ile geliştirilmiştir.

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)

## 📋 İçindekiler

- [Hakkında](#-hakkında)
- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Veritabanı Yapısı](#-veritabanı-yapısı)
- [Ortam Değişkenleri](#-ortam-değişkenleri)
- [Proje Yapısı](#-proje-yapısı)
- [İletişim](#-iletişim)

## 🎯 Hakkında

Bu proje, yazılım geliştirme kariyerim boyunca edindiğim deneyimleri, tamamladığım projeleri ve teknik yeteneklerimi sergilemek amacıyla geliştirdiğim kişisel portföy web sitesidir. Modern web teknolojileri kullanılarak, responsive tasarım prensipleri ve kullanıcı deneyimi odaklı bir yaklaşımla oluşturulmuştur.

### 🌟 Temel Hedefler

- ✨ Modern ve kullanıcı dostu arayüz
- 🌍 Çok dilli destek (Türkçe/İngilizce)
- 📱 Tam responsive tasarım
- ⚡ Yüksek performans ve hız
- 🎨 Özelleştirilebilir tema sistemi
- 📊 Dinamik içerik yönetimi

## ✨ Özellikler

### 🎨 Arayüz ve Kullanıcı Deneyimi

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Dark/Light Mode**: Kullanıcı tercihine göre tema değiştirme
- **Smooth Animations**: CSS ve JavaScript ile akıcı geçişler
- **Interactive Components**: Dinamik ve etkileşimli bileşenler
- **Modern UI/UX**: Güncel tasarım trendleri

### 🌐 Çok Dilli Destek

- **Türkçe/İngilizce**: Tam dil desteği
- **Dynamic Translation**: Veritabanı tabanlı çeviri sistemi
- **SEO Optimized**: Her dil için optimize edilmiş içerik

### 📊 Dinamik İçerik Yönetimi

- **Projeler**: GitHub entegrasyonu ile proje listesi
- **Yetenekler**: Teknoloji yığını ve yetkinlik seviyeleri
- **Deneyimler**: Eğitim, iş deneyimi ve sertifikalar
- **İletişim**: Form ile direkt mesaj gönderme (Nodemailer)

### ⚡ Performans

- **Server-Side Rendering**: Next.js App Router
- **Image Optimization**: Next.js Image component
- **Prisma + PostgreSQL**: Tip güvenli sorgular ve bağlantı yönetimi
- **Caching Strategy**: Statik ve dinamik içerik cache'leme

## 🛠 Teknolojiler

### Frontend

| Teknoloji | Versiyon | Kullanım Alanı |
|-----------|----------|----------------|
| **Next.js** | 15.5.x | Framework |
| **React** | 19.2.x | UI Library |
| **Tailwind CSS** | 4.1.x | Styling |

### Backend

| Teknoloji | Versiyon | Kullanım Alanı |
|-----------|----------|----------------|
| **Node.js** | 20.x | Runtime |
| **Prisma** | 6.x | ORM |
| **PostgreSQL** | 14+ | Veritabanı |
| **Nodemailer** | 7.x | Email Servisi |

### DevOps & Tools

- **ESLint**: Code quality
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes
- **Git**: Version control

## 📦 Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- PostgreSQL 14 veya üzeri
- npm veya yarn

### Adım 1: Projeyi Klonlayın

```bash
git clone https://github.com/omerhd34/omerhalisdemir.com.tr.git
cd omerhalisdemir.com.tr
```

### Adım 2: Bağımlılıkları Yükleyin

```bash
npm install
# veya
yarn install
```

### Adım 3: Ortam Değişkenlerini Ayarlayın

`.env.local` dosyası oluşturun:

```env
# PostgreSQL (Prisma)
DATABASE_URL="postgresql://KULLANICI:SIFRE@localhost:5432/portfolio_db?schema=public"

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=recipient@email.com

# Optional
NODE_ENV=development
PORT=3000
```

### Adım 4: Veritabanını Hazırlayın

PostgreSQL üzerinde `portfolio_db` veritabanını oluşturun, ardından şemayı uygulayın:

```bash
npx prisma db push
# veya migration kullanıyorsanız: npx prisma migrate dev
```

İsteğe bağlı örnek veriler:

```bash
npm run seed:all
```

### Adım 5: Geliştirme Sunucusunu Başlatın

```bash
npm run dev
# veya
yarn dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

### Adım 6: Production Build

```bash
npm run build
npm start
```

## 🗄 Veritabanı Yapısı (PostgreSQL / Prisma)

Şema `prisma/schema.prisma` içinde tanımlıdır. Tablolar (`@@map`) özetle:

| Tablo | Açıklama |
|-------|----------|
| `languages` | Desteklenen diller |
| `translation_keys` | Çeviri anahtarları |
| `translation` | Dil bazlı çeviri metinleri |
| `skills` | Teknik yetenekler |
| `experience` | Eğitim ve iş deneyimleri |
| `projects` | Projeler |

## 🔐 Ortam Değişkenleri

| Değişken | Açıklama | Örnek |
|----------|----------|-------|
| `DATABASE_URL` | PostgreSQL bağlantı URL’si (Prisma) | `postgresql://user:pass@localhost:5432/portfolio_db` |
| `EMAIL_USER` | Gönderici email adresi | `your@gmail.com` |
| `EMAIL_PASS` | Email uygulama şifresi | `xxxx xxxx xxxx xxxx` |
| `EMAIL_TO` | Alıcı email adresi | `contact@example.com` |
| `NODE_ENV` | Ortam modu | `production` |
| `PORT` | Sunucu portu | `3000` |

### Email Kurulumu (Gmail)

1. Google hesabınıza gidin
2. "2-Step Verification" aktif edin
3. "App passwords" oluşturun
4. Oluşturulan şifreyi `EMAIL_PASS` olarak kullanın

## 📁 Proje Yapısı

```
omerhalisdemir.com.tr/
├── app/
│   ├── (pages)/           # Sayfa rotaları
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── skills/
│   ├── api/               # API rotaları
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── translations/
│   ├── context/           # React Context
│   │   ├── DataContext.jsx
│   │   └── LanguageContext.jsx
│   ├── styles/            # CSS dosyaları
│   └── layout.jsx
├── components/
│   ├── extra/             # Yardımcı bileşenler
│   ├── Footer/
│   ├── Header/
│   └── PageComponents/    # Sayfa özel bileşenler
├── lib/
│   └── prisma.js          # Prisma istemcisi
├── prisma/
│   └── schema.prisma      # PostgreSQL şeması
├── public/
│   ├── images/
│   └── pdf/
├── scripts/               # Seed scriptleri
├── .env.local
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 👤 İletişim

**Ömer Halis Demir**

- 🌐 Website: [omerhalisdemir.com.tr](https://omerhalisdemir.com.tr)
- 💼 LinkedIn: [linkedin.com/in/ömer-halis-demir](https://www.linkedin.com/in/ömer-halis-demir-7a9b79169/)
- 📧 Email: omerhd16@outlook.com
- 💻 GitHub: [@omerhd34](https://github.com/omerhd34)

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullandığım açık kaynak toplulukların ve teknolojilerin geliştiricilerine teşekkür ederim.

---


**Made with by Ömer Halis Demir**
