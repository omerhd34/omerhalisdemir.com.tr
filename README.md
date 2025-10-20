# 🚀 omerhalisdemir.com.tr

> Modern ve dinamik kişisel portföy web sitesi - Next.js 15 & MySQL ile geliştirilmiştir.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.10-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat&logo=mysql)](https://www.mysql.com/)

## 📋 İçindekiler

- [Hakkında](#-hakkında)
- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Veritabanı Yapısı](#-veritabanı-yapısı)
- [Ortam Değişkenleri](#-ortam-değişkenleri)
- [Proje Yapısı](#-proje-yapısı)
- [Lisans](#-lisans)
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
- **Database Connection Pooling**: MySQL connection optimization
- **Caching Strategy**: Statik ve dinamik içerik cache'leme

## 🛠 Teknolojiler

### Frontend

| Teknoloji | Versiyon | Kullanım Alanı |
|-----------|----------|----------------|
| **Next.js** | 15.3.3 | Framework |
| **React** | 19.1.0 | UI Library |
| **Tailwind CSS** | 4.1.10 | Styling |

### Backend

| Teknoloji | Versiyon | Kullanım Alanı |
|-----------|----------|----------------|
| **Node.js** | 20.x | Runtime |
| **Express.js** | 20.x | Runtime |
| **MySQL** | 8.0 | Veritabanı |
| **Nodemailer** | 7.0.6 | Email Servisi |

### DevOps & Tools

- **ESLint**: Code quality
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes
- **Git**: Version control

## 📦 Kurulum

### Gereksinimler

- Node.js 18.x veya üzeri
- MySQL 8.0 veya üzeri
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
# Database
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=portfolio_db

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_TO=recipient@email.com

# Optional
NODE_ENV=development
PORT=3000
```

### Adım 4: Veritabanını Oluşturun

```bash
# MySQL'e bağlanın
mysql -u root -p

# Veritabanını oluşturun
CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# SQL dosyasını import edin
mysql -u root -p portfolio_db < database/schema.sql
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

## 🗄 Veritabanı Yapısı

### Tablolar

#### `languages`
Desteklenen diller
```sql
- id: INT (PK)
- code: VARCHAR(10) (TR, EN)
- name: VARCHAR(50)
```

#### `translation_keys`
Çeviri anahtarları
```sql
- id: INT (PK)
- key_path: VARCHAR(255) (örn: home.title)
```

#### `translation`
Çeviriler
```sql
- id: INT (PK)
- key_id: INT (FK → translation_keys)
- language_id: INT (FK → languages)
- translation_text: TEXT
```

#### `skills`
Teknik yetenekler
```sql
- id: INT (PK)
- category: VARCHAR(50)
- name: VARCHAR(100)
- icon: VARCHAR(50)
- experience: DECIMAL(3,1)
- level: VARCHAR(20)
- percentage: INT
- display_order: INT
```

#### `experience`
Eğitim ve iş deneyimleri
```sql
- id: INT (PK)
- category: VARCHAR(50)
- title_tr/title_en: VARCHAR(200)
- institution_tr/institution_en: VARCHAR(200)
- period: VARCHAR(100)
- status: VARCHAR(20)
- location: VARCHAR(100)
- gpa: VARCHAR(10)
- technologies: JSON
- achievements_tr/achievements_en: JSON
```

#### `projects`
Projeler
```sql
- id: INT (PK)
- category: VARCHAR(50)
- title_tr/title_en: VARCHAR(200)
- description_tr/description_en: TEXT
- long_description_tr/long_description_en: TEXT
- status: VARCHAR(20)
- technologies: JSON
- features_tr/features_en: JSON
- live_url: VARCHAR(500)
- github_url: VARCHAR(500)
- metrics_tr/metrics_en: JSON
```

## 🔐 Ortam Değişkenleri

| Değişken | Açıklama | Örnek |
|----------|----------|-------|
| `DB_HOST` | MySQL sunucu adresi | `localhost` |
| `DB_USER` | Veritabanı kullanıcı adı | `root` |
| `DB_PASSWORD` | Veritabanı şifresi | `password123` |
| `DB_NAME` | Veritabanı adı | `portfolio_db` |
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
│   ├── lib/               # Utility fonksiyonlar
│   │   └── db.js
│   ├── styles/            # CSS dosyaları
│   └── layout.jsx
├── components/
│   ├── extra/             # Yardımcı bileşenler
│   ├── Footer/
│   ├── Header/
│   └── PageComponents/    # Sayfa özel bileşenler
├── public/
│   ├── images/
│   └── pdf/
├── database/              # SQL dosyaları
├── .env.local
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Deployment

### Vercel (Önerilen)

```bash
# Vercel CLI yükleyin
npm i -g vercel

# Deploy edin
vercel
```

### Manuel Deployment

```bash
# Production build
npm run build

# PM2 ile başlatın
pm2 start npm --name "portfolio" -- start
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
