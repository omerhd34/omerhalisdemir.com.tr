# Hangi base image kullanacağız
FROM node:18

# Çalışma dizini
WORKDIR /app

# Package dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Kod dosyalarını kopyala
COPY . .

# Port açılımı
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]