# Portfolio Website

Modern ve responsive bir portfolio web sitesi. React ve Vite kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Çok Dilli Destek**: Türkçe ve İngilizce dil desteği
- **Dark/Light Mode**: Karanlık ve aydınlık tema desteği
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile akıcı animasyonlar
- **Lazy Loading**: Performans optimizasyonu için lazy loading
- **Modern UI**: Material-UI ile modern ve kullanıcı dostu arayüz
- **İletişim Formu**: Email gönderme özelliği ile iletişim formu

## 📋 Proje Yapısı

```
myblog/
├── public/              # Statik dosyalar
├── src/
│   ├── components/      # Yeniden kullanılabilir bileşenler
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/         # React Context API
│   │   └── LanguageContext.jsx
│   ├── pages/           # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   └── [Project Details]
│   ├── styles/          # Global stiller
│   ├── translations/    # Çeviri dosyaları
│   └── App.jsx          # Ana uygulama bileşeni
├── package.json
└── vite.config.js
```

## 🛠️ Kullanılan Teknolojiler

- **React 19** - UI kütüphanesi
- **Vite** - Build tool ve dev server
- **Material-UI (MUI)** - UI component library
- **Framer Motion** - Animasyon kütüphanesi
- **React Router DOM** - Routing
- **Axios** - HTTP istekleri
- **React Toastify** - Bildirimler

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd portfolio/myblog
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` adresine gidin.

## 🏗️ Build ve Deploy

### Production Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne oluşturulur.

### Preview Build

```bash
npm run preview
```

### GitHub Pages'e Deploy

```bash
npm run predeploy  # Build oluşturur
npm run deploy     # GitHub Pages'e yükler
```

## 🎨 Sayfalar

- **Home**: Ana sayfa ve tanıtım
- **About**: Hakkımda bölümü ve yetenekler
- **Projects**: Proje portföyü
- **Experience**: Eğitim ve deneyimler
- **Work**: İş deneyimleri
- **Contact**: İletişim formu ve sosyal medya linkleri

### Proje Detay Sayfaları

- `/auction` - Açık Arttırma Web Sitesi
- `/cybersecurity` - Siber Güvenlik Simülasyonu
- `/artificial-intelligence` - Yapay Zeka Projesi
- `/gambling` - Kumarhane Projesi
- `/isealim-portal` - İşe Alım Portalı

## 🌐 Çok Dilli Destek

Proje, `src/translations/translations.js` dosyasında çevirileri tutar. Dil değiştirmek için `LanguageContext` kullanılır.

## ⚙️ Yapılandırma

### Vite Yapılandırması

- Base path: `/myblog/`
- Port: `3000`
- Code splitting: Vendor chunk'lar ayrıştırılmış
- Production build: Terser ile minify ve optimize edilmiş

## 📝 Scripts

- `npm run dev` - Geliştirme sunucusunu başlatır
- `npm run build` - Production build oluşturur
- `npm run preview` - Build'i önizler
- `npm run lint` - ESLint ile kod kontrolü
- `npm run predeploy` - Build oluşturur
- `npm run deploy` - GitHub Pages'e deploy eder

## 🔧 Özelleştirme

### Renk Teması

Renk temasını değiştirmek için `src/App.jsx` dosyasındaki `createTheme` fonksiyonunu düzenleyin:

```javascript
const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: '#2196f3',  // Ana renk
    },
    // ...
  },
});
```

### İçerik Güncelleme

- **Çeviriler**: `src/translations/translations.js`
- **Proje Bilgileri**: `src/pages/Projects.jsx`
- **Kişisel Bilgiler**: `src/pages/Home.jsx` ve `src/pages/About.jsx`

## 📄 Lisans

Bu proje kişisel kullanım için oluşturulmuştur.

## 👤 Geliştirici

**Emre Meral**

- GitHub: [@emremeralzn](https://github.com/emremeralzn)
- LinkedIn: [Emre Meral](https://www.linkedin.com/in/emre-meralsm/)
- Instagram: [@emremzn](https://instagram.com/emremzn)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
