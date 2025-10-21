# cPanel'e Deployment Rehberi

Bu rehber, Next.js projenizi cPanel'e nasıl yükleyeceğinizi adım adım açıklar.

## Gereksinimler

- cPanel hesabı (Node.js desteği olan)
- SSH erişimi (opsiyonel ama önerilen)
- MySQL veritabanı
- Gmail hesabı (iletişim formu için)

## Adım 1: cPanel'de Node.js Uygulaması Oluşturma

1. cPanel'e giriş yapın
2. **"Setup Node.js App"** bölümüne gidin
3. **"Create Application"** butonuna tıklayın
4. Aşağıdaki ayarları yapın:
   - **Node.js version**: 18.x veya 20.x seçin (önerilen: 20.x)
   - **Application mode**: Production
   - **Application root**: `public_html` veya domain klasörünüz
   - **Application URL**: Alan adınız
   - **Application startup file**: `server.js`

## Adım 2: Dosyaları Yükleme

### Seçenek A: SSH ile (Önerilen)

```bash
# Yerel bilgisayarınızda build alın
npm run build

# Dosyaları sıkıştırın (node_modules hariç)
tar -czf project.tar.gz --exclude='node_modules' --exclude='.git' .

# cPanel sunucusuna yükleyin
scp project.tar.gz kullanici@sunucu.com:~/public_html/

# SSH ile bağlanın
ssh kullanici@sunucu.com

# Dosyaları açın
cd public_html
tar -xzf project.tar.gz
rm project.tar.gz
```

### Seçenek B: File Manager ile

1. Projeyi ZIP olarak sıkıştırın (node_modules hariç)
2. cPanel File Manager'ı açın
3. `public_html` klasörüne gidin
4. ZIP dosyasını yükleyin ve çıkartın

## Adım 3: Bağımlılıkları Yükleme

cPanel'deki Node.js App ayarlarında veya SSH ile:

```bash
cd ~/public_html
npm install --production
```

## Adım 4: Environment Variables Ayarlama

1. cPanel'de **"Setup Node.js App"** bölümüne gidin
2. Uygulamanızı seçin
3. **"Environment Variables"** bölümüne aşağıdakileri ekleyin:

```
NODE_ENV=production
DB_HOST=localhost
DB_USER=cpanel_kullanici_veritabani_kullanici
DB_PASSWORD=veritabani_sifresi
DB_NAME=veritabani_adi
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=gmail_uygulama_sifresi
EMAIL_TO=mesajlarin_gonderilecegi_email@gmail.com
```

### Gmail App Password Oluşturma:

1. Google hesabınıza gidin
2. **Güvenlik** > **2 Adımlı Doğrulama** (aktif olmalı)
3. **Uygulama şifreleri** seçin
4. Yeni bir uygulama şifresi oluşturun
5. Bu şifreyi `EMAIL_PASS` olarak kullanın

## Adım 5: MySQL Veritabanı Kurulumu

1. cPanel'de **"MySQL Databases"** bölümüne gidin
2. Yeni bir veritabanı oluşturun
3. Yeni bir kullanıcı oluşturun ve veritabanına atayın
4. **Tüm yetkiler**i verin (ALL PRIVILEGES)
5. phpMyAdmin'e gidin ve gerekli tabloları oluşturun

### Gerekli SQL Tabloları:

```sql
-- Örnek tablo yapısı (gerekirse özelleştirin)
CREATE TABLE IF NOT EXISTS translations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  lang VARCHAR(10) NOT NULL,
  key_name VARCHAR(100) NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Diğer tablolarınızı buraya ekleyin
```

## Adım 6: .htaccess Dosyasını Düzenleme

`.htaccess` dosyasında aşağıdaki satırı kendi kullanıcı adınıza göre düzenleyin:

```apache
PassengerAppRoot /home/KULLANICI_ADINIZ/public_html
```

Örnek:
```apache
PassengerAppRoot /home/omerhali/public_html
```

## Adım 7: Uygulamayı Başlatma

1. cPanel'de **"Setup Node.js App"** bölümüne gidin
2. **"Restart"** butonuna tıklayın
3. Uygulamanızın çalıştığını kontrol edin

## Sorun Giderme

### Uygulama başlamıyor

```bash
# Log dosyalarını kontrol edin
cd ~/public_html
cat logs/error.log

# Node.js versiyonunu kontrol edin
node --version

# Bağımlılıkları yeniden yükleyin
rm -rf node_modules package-lock.json
npm install --production
```

### Database bağlantı hatası

- cPanel'de MySQL Remote Access ayarlarını kontrol edin
- `localhost` yerine `127.0.0.1` deneyin
- Veritabanı kullanıcısının yetkilerini kontrol edin

### Email gönderilmiyor

- Gmail App Password doğru mu kontrol edin
- 2FA aktif mi kontrol edin
- Gmail hesabınızın "Daha az güvenli uygulamalar" ayarını kontrol edin

### Port hatası

cPanel kendi port numarasını otomatik atar. `.env` dosyasında PORT değişkeni varsa silin veya:

```bash
PORT=$(grep "PORT" ~/public_html/.env | cut -d '=' -f2)
```

### Statik dosyalar (resimler, CSS) yüklenmiyor

`next.config.js` dosyasında `output: 'standalone'` ayarı var mı kontrol edin.

## Güncelleme Yaparken

```bash
# Uygulamayı durdurun
cd ~/public_html

# Yeni dosyaları yükleyin

# Bağımlılıkları güncelleyin
npm install --production

# Build alın (gerekirse)
npm run build

# Uygulamayı yeniden başlatın (cPanel'den)
```

## Performans İpuçları

1. **PM2 kullanın** (cPanel izin veriyorsa):
```bash
npm install -g pm2
pm2 start server.js --name "portfolio"
pm2 save
```

2. **Cloudflare kullanın**: Ücretsiz CDN ve DDoS koruması

3. **Image optimization**: Next.js otomatik optimize ediyor, `images.unoptimized: true` ayarı zaten mevcut

4. **Caching**: `.htaccess`'te browser caching aktif

## Güvenlik

- `.env` dosyasını `.gitignore`'a ekleyin
- Hassas bilgileri asla kod içine yazmayın
- SSL sertifikası kullanın (Let's Encrypt ücretsiz)
- cPanel'de "ModSecurity" aktif edin

## Destek

Sorun yaşarsanız:
1. cPanel error loglarını kontrol edin
2. Node.js app loglarını kontrol edin
3. Hosting sağlayıcınızın desteğine başvurun
4. GitHub Issues açın

---

**Not**: Her hosting sağlayıcının cPanel yapılandırması farklı olabilir. Yukarıdaki adımlar genel bir rehberdir.
