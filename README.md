# YouTube Video İndirici

Modern, hızlı ve kullanıcı dostu YouTube video indirici. React JS ve Tailwind CSS ile geliştirilmiştir.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Özellikler

- 🎨 Modern ve profesyonel UI tasarımı
- 🌓 Koyu / Açık tema desteği
- 📱 Responsive tasarım (mobil / tablet / desktop)
- 🎬 Yüksek çözünürlük format desteği (720p, 1080p, 1440p, 4K)
- 🔊 Video + Ses birleşik (combined) indirme
- 📊 H.264 ve H.265 codec desteği
- 🚀 aria2c ile yüksek hızlı indirme (16 paralel bağlantı)
- 📈 Gerçek zamanlı indirme ilerlemesi (hız, ETA, yüzde)
- 🔔 Toast bildirim sistemi

## 🛠️ Gereksinimler

- **Node.js** 18+ 
- **yt-dlp** - YouTube video indirme aracı
- **FFmpeg** - Video/ses birleştirme için
- **aria2c** (opsiyonel) - Yüksek hızlı indirme için

### Araçları Yükleme (Windows)

```powershell
# yt-dlp ve FFmpeg
winget install yt-dlp

# aria2c (yüksek hız için önerilir)
winget install aria2.aria2
```

### Araçları Yükleme (macOS)

```bash
brew install yt-dlp ffmpeg aria2
```

### Araçları Yükleme (Linux)

```bash
# Ubuntu/Debian
sudo apt install ffmpeg aria2
pip install yt-dlp

# Arch Linux
sudo pacman -S yt-dlp ffmpeg aria2
```

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Server bağımlılıklarını yükle
cd server && npm install && cd ..
```

## 💻 Geliştirme

```bash
# Terminal 1: Frontend (Vite dev server)
npm run dev

# Terminal 2: Backend API
npm run server:dev
```

Frontend: http://localhost:5173
Backend: http://localhost:3001

## 📦 Production Build

```bash
# Frontend'i build et
npm run build

# Production modunda başlat (tek komut)
npm run start:prod
```

Uygulama http://localhost:3001 adresinde çalışacak.

## 🌐 Dağıtım (Deployment)

### VPS / Sunucu

1. Projeyi sunucuya yükleyin
2. Gereksinimleri yükleyin (yt-dlp, ffmpeg, aria2c)
3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   cd server && npm install && cd ..
   npm run build
   ```
4. PM2 ile başlatın:
   ```bash
   npm install -g pm2
   pm2 start "npm run start:prod" --name youtube-downloader
   pm2 save
   ```

### Docker (Opsiyonel)

```dockerfile
FROM node:20-alpine

RUN apk add --no-cache python3 py3-pip ffmpeg aria2
RUN pip3 install yt-dlp

WORKDIR /app
COPY . .

RUN npm install
RUN cd server && npm install && cd ..
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001
CMD ["npm", "run", "start:prod"]
```

### Nginx Reverse Proxy (Önerilir)

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }
}
```

## 📁 Proje Yapısı

```
youtube-downloader/
├── dist/                 # Production build (build sonrası)
├── public/               # Static dosyalar
├── server/               # Backend API
│   ├── index.js          # Express server
│   ├── package.json
│   └── temp/             # Geçici indirme dosyaları
├── src/
│   ├── components/       # React bileşenleri
│   │   ├── Header.jsx
│   │   ├── URLInput.jsx
│   │   ├── VideoInfo.jsx
│   │   ├── FormatList.jsx
│   │   ├── Toast.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── mockApi.js    # API fonksiyonları
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## ⚠️ Yasal Uyarı

Bu uygulama sadece eğitim amaçlıdır. Telif hakkı korumalı içerikleri indirmek yasalara aykırı olabilir. Kullanıcılar, indirdikleri içeriklerin telif haklarına saygı göstermekle yükümlüdür.

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.
