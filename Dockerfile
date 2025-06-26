# Node.js base image kullan
FROM node:18-alpine AS base

# Çalışma dizinini ayarla
WORKDIR /app

# Package dosyalarını kopyala
COPY package*.json ./

# Dependencies kurulumu
FROM base AS deps
# Eğer yarn kullanıyorsan yarn.lock da kopyala
# COPY yarn.lock ./
RUN npm ci --only=production

# Build stage
FROM base AS builder
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Güvenlik için non-root user oluştur
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Gerekli dosyaları kopyala
COPY --from=builder /app/public ./public

# Build çıktılarını kopyala
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Uygulamayı başlat
CMD ["node", "server.js"]