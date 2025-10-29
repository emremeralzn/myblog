export const translations = {
  tr: {
    // Navbar
    navbar: {
      about: 'Hakkımda',
      projects: 'Projeler',
      education: 'Eğitim',
      contact: 'İletişim',
      experience: 'Deneyim',
      blog: 'Blog'
    },
    // Home Page
    home: {
      greeting: 'Merhaba, Ben Emre',
      title: "Full Stack Developer'ım",
      description: 'React ve .NET teknolojilerini kullanarak modern, kullanıcı dostu ve ölçeklenebilir web uygulamaları geliştiriyorum. Hem frontend hem de backend geliştirme süreçlerinde deneyimliyim.',
      contactButton: 'İletişime Geç',
      cvButton: "CV'mi İndir",
      cvLink: 'https://drive.google.com/file/d/1rapInHVp1tqRaQrhZjKH8OTLGh2nswCI/view?usp=sharing'
    },
    // About Page
    about: {
      title: 'Hakkımda',
      description: "Bilgisayar Mühendisiyim ve Full Stack geliştirme yapıyorum. Backend tarafında ASP.NET Core ile RESTful API'ler geliştiriyor, SQL veritabanları üzerinde çalışıyor ve TypeScript, JavaScript gibi teknolojilerle verimli çözümler üretiyorum. Frontend tarafında ise React ile modern, kullanıcı dostu arayüzler geliştiriyor, TypeScript ile güçlü ve ölçeklenebilir yapılar kuruyorum. Git ve GitHub gibi araçlarla sürüm kontrolü yapıyor ve geliştirdiğim bileşenler için test yazma konusunda özen gösteriyorum. Yazılım geliştirme süreçlerinde analitik düşünme yeteneğim ve problem çözme becerimle projeleri başarıyla tamamlıyorum. Yeni teknolojileri öğrenmeye ve kendimi sürekli geliştirmeye büyük önem veriyorum.",
      skills: 'Yetenekler'
    },
    // Projects Page
    projects: {
      title: 'Projeler',
      viewDetails: 'Projeyi İncele',
      visitWebsite: 'Siteye Git',
      projectsList: [
        {
          title: 'İşe Alım Portalı Backend',
          description: 'Turkuvaz Medya\'nın işe alım portalının backend altyapısını ASP.NET Core ile sıfırdan geliştirdim. Katmanlı mimari, JWT tabanlı kimlik doğrulama ve FluentValidation ile güvenli ve sürdürülebilir bir yapı kurdum. Veritabanı yönetimini Database-First yaklaşımıyla Entity Framework Core üzerinden gerçekleştirdim. Proje kapsamında, EBA sistemine otomatik veri aktarımını sağlayan REST tabanlı bir entegrasyon API\'si geliştirdim.'
        },
        {
          title: 'Nakliyat Web Sitesi',
          description: 'Bu proje, modern web geliştirme teknolojileri kullanılarak inşa edilmiş bir nakliyat web sitesidir. Next.js ve Tailwind CSS ile tasarlanmış olan bu site, kullanıcı dostu bir deneyim sunmak amacıyla TypeScript ile güçlendirilmiştir. Aynı zamanda site, Git ile versiyon kontrolü yapılırken, Cloudinary ve Netlify gibi servisler ile medya yönetimi ve dağıtım kolaylaştırılmıştır. SEO dostu yapısı sayesinde arama motorlarında daha görünür bir hale gelir. JSON verileriyle entegre çalışarak verimli ve hızlı veri yönetimi sağlar.'
        },
        {
          title: 'Açık Arttırma Web Sitesi',
          description: 'Bu proje, ASP.NET Core ve React kullanılarak geliştirilmiş tam kapsamlı bir e-ticaret uygulamasıdır. Clean Architecture ve CQRS desenleri kullanılmıştır. SignalR ile gerçek zamanlı bildirim, JWT ile kimlik doğrulama sağlanmıştır. Veritabanı olarak MSSQL tercih edilmiştir.'
        },
        {
          title: 'Siber Güvenlik Simülasyonu',
          description: 'Bu proje, ASP.NET Core (backend) ve React (frontend) teknolojileri kullanılarak geliştirilmiş bir siber güvenlik simülasyonudur. Backend tarafında katmanlı ve sürdürülebilir bir yapı için Onion Architecture tercih edilmiştir. Uygulama, kullanıcıların belirli güvenlik senaryoları üzerinden etkileşimli bir şekilde test yapmasını ve sonuçları analiz etmesini sağlamaktadır.'
        },
        {
          title: 'Yapay Zeka Destekli Görüntü Sınıflandırıcı',
          description: 'Bu projede, kullanıcıların yüklediği görselleri analiz ederek belirli bir kategoriye (örneğin meyve, hayvan, nesne) sınıflandıran bir görüntü sınıflandırma modeli geliştirilmiştir. Görsel veriler, ön işleme adımlarından (yeniden boyutlandırma, normalize etme vb.) geçirildikten sonra, eğitimli bir yapay zeka modeli tarafından analiz edilir ve sınıf tahmini yapılır.'
        },
        {
          title: 'Kumar Bağımlılığı Web Sitesi',
          description: 'Bu proje, kumar bağımlılığı hakkında farkındalık oluşturmak ve bilgilendirme sağlamak amacıyla hazırlanmıştır. Uygulama React ile geliştirilmiş olup, modern ve sade bir yapıda sunulmuştur. Kullanıcıların bağımlılıkla ilgili içeriklere kolayca erişebilmesi hedeflenmiştir. Proje, Netlify altyapısı kullanılarak hızlı ve kolay bir şekilde yayınlanmıştır.'
        }
      ]
    },
    // Experience Page
    experience: {
      title: 'Eğitim Geçmişi',
      gpa: 'Ortalama',
      featuredCourses: 'Öne Çıkan Dersler',
      education: [
        {
          degree: 'Bilgisayar Mühendisliği',
          school: 'Erzurum Teknik Üniversitesi',
          period: '2021 - 2025',
          description: 'Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden mezunum.',
          gpa: '2.92',
          achievements: [
            'Bölüm 3.sü',
            'Yüksek Onur Öğrencisi'
          ],
          courses: [
            'Veri Yapıları ve Algoritmalar',
            'Nesne Yönelimli Programlama',
            'Veritabanı Yönetim Sistemleri',
            'Web Programlama',
            'Yapay Zeka'
          ]
        }
      ]
    },
    // Work Page
    work: {
      title: 'Deneyim',
      present: 'Günümüz',
      technologiesUsed: 'Kullanılan Teknolojiler',
      workExperience: [
        {
          position: 'Backend Developer',
          company: 'Turkuvaz Medya Grubu',
          period: 'Ağustos 2025 - Ekim 2025',
          location: 'İstanbul, Türkiye',
          description: `3 aylık zorunlu staj sürecinde, Turkuvaz Medya'nın işe alım süreçlerini dijitalleştirmeyi hedefleyen **İşe Alım Projesi**'nin backend mimarisini sıfırdan tasarladım ve geliştirdim. Proje boyunca **ASP.NET Core 8**, **Entity Framework Core** ve **MSSQL** teknolojilerini kullanarak RESTful API yapısını oluşturdum. Kullanıcı yönetimi, JWT tabanlı kimlik doğrulama, rol bazlı erişim kontrolü ve loglama mekanizmaları gibi temel modüllerin geliştirilmesini üstlendim. Kod kalitesini artırmak için **katmanlı mimari** ve **SOLID prensipleri**ne uygun yapı kurdum. Ayrıca ekip içi versiyon kontrolü ve iş birliği süreçlerinde **Git/GitHub** kullanarak aktif rol aldım.`
        }
      ]
    },
    // Contact Page
    contact: {
      title: 'İletişim',
      email: 'Email',
      subject: 'Konu',
      message: 'Mesaj',
      send: 'Gönder',
      emailPlaceholder: 'Email adresinizi girin',
      subjectPlaceholder: 'Konu başlığı',
      messagePlaceholder: 'Mesajınızı yazın',
      description: 'Herhangi bir sorunuz, öneriniz veya paylaşmak istediğiniz bir konu varsa, sizinle iletişimde olmaktan mutluluk duyarım. En kısa sürede size dönüş yapabilmek için elimden gelen tüm özeni göstereceğim.'
    },
    // Project Details Page (Common)
    projectDetails: {
      backButton: 'Geri Dön',
      featuresTitle: 'Öne Çıkan Özellikler',
      technologiesTitle: 'Kullanılan Teknolojiler',
      imageAlt: 'Proje görseli'
    },
    // Individual Projects
    recruitmentPortal: {
      title: 'İşe Alım Portalı (Backend)',
      description: `Turkuvaz Medya'nın işe alım süreçlerini dijitalleştirmek amacıyla geliştirilmiş kurumsal backend servisidir. Proje ASP.NET Core 8 ile sıfırdan geliştirilmiş olup, katmanlı mimari yapısı, Repository Pattern, AutoMapper, FluentValidation ve JWT tabanlı kimlik doğrulama özellikleriyle sürdürülebilir ve ölçeklenebilir bir yapı sunmaktadır. EBA sistemine otomatik veri aktarımı için REST tabanlı bir entegrasyon API'si de proje kapsamına dahil edilmiştir.`,
      features: [
        'ASP.NET Core 8 tabanlı RESTful API geliştirme',
        'Clean Architecture prensiplerine uygun katmanlı mimari',
        'Repository Pattern ve Unit of Work yaklaşımı',
        'Entity Framework Core (Database-First) ile veritabanı yönetimi',
        'Dependency Injection ile bağımlılıkların yönetimi',
        'AutoMapper ile Entity–DTO dönüşümleri',
        'FluentValidation ile model bazlı doğrulama',
        'Swagger ile API dokümantasyonu ve test desteği',
        'EBA sistemine REST API aracılığıyla veri aktarımı',
        'Postman ile API test senaryoları ve doğrulama',
        'JWT tabanlı kimlik doğrulama mekanizması',
        'Git ve Trello ile proje yönetimi ve versiyon kontrolü'
      ]
    },
    artificialIntelligence: {
      title: 'Yapay Zeka Destekli Görüntü Sınıflandırıcı',
      description: 'Bu projede, kullanıcıların yüklediği görselleri analiz ederek belirli bir kategoriye (örneğin meyve, hayvan, nesne) sınıflandıran bir görüntü sınıflandırma modeli geliştirilmiştir. Görsel veriler, ön işleme adımlarından (yeniden boyutlandırma, normalize etme vb.) geçirildikten sonra, eğitimli bir yapay zeka modeli tarafından analiz edilir ve sınıf tahmini yapılır.',
      features: [
        'Derin öğrenme tabanlı görüntü sınıflandırma modeli',
        'Kullanıcı dostu web arayüzü',
        'Gerçek zamanlı görüntü analizi',
        'Çoklu sınıf tahmin desteği',
        'Yüksek doğruluk oranı',
        'Detaylı sınıflandırma sonuçları',
        'Görsel ön işleme ve normalizasyon',
        'Model performans metrikleri',
        'Kolay entegrasyon API',
        'Detaylı dokümantasyon'
      ]
    },
    auction: {
      title: 'Online Açık Artırma Platformu',
      description: 'Bu proje, kullanıcıların çeşitli ürünleri açık artırma yoluyla alıp satabilecekleri bir online platformdur. Kullanıcılar ürünlerini listeyebilir, diğer kullanıcıların ürünlerine teklif verebilir ve gerçek zamanlı olarak artırma sürecini takip edebilirler. Platform, güvenli ödeme sistemi, kullanıcı değerlendirme sistemi ve detaylı ürün filtreleme özellikleri sunmaktadır.',
      features: [
        'Gerçek zamanlı açık artırma sistemi',
        'Kullanıcı dostu arayüz',
        'Güvenli ödeme altyapısı',
        'Detaylı ürün filtreleme ve arama',
        'Kullanıcı değerlendirme sistemi',
        'Otomatik teklif bildirimleri',
        'Ürün geçmişi ve fiyat analizi',
        'Çoklu dil desteği',
        'Mobil uyumlu tasarım',
        '7/24 müşteri desteği'
      ]
    },
    cybersecurity: {
      title: 'Siber Güvenlik Simülasyonu',
      description: 'Bu proje, siber güvenlik alanında eğitim ve simülasyon amaçlı geliştirilmiş bir web uygulamasıdır. Kullanıcılar, gerçek dünya senaryolarına dayalı siber saldırı ve savunma simülasyonlarını deneyimleyebilir. Proje, modern web teknolojileri kullanılarak geliştirilmiş ve kapsamlı bir öğrenme deneyimi sunmaktadır.',
      features: [
        'Gerçek dünya siber güvenlik senaryolarına dayalı simülasyonlar',
        'İnteraktif öğrenme modülleri ve alıştırmalar',
        'Detaylı güvenlik açığı analizi ve raporlama',
        'Kullanıcı dostu arayüz ve adım adım rehberlik',
        'Gerçek zamanlı saldırı ve savunma simülasyonları',
        'Kapsamlı güvenlik kontrol listeleri',
        'İlerleme takibi ve başarı istatistikleri',
        'Güvenlik en iyi uygulamaları eğitimi',
        'Çeşitli zorluk seviyelerinde senaryolar',
        'Detaylı dokümantasyon ve kaynaklar'
      ]
    },
    gambling: {
      title: 'Kumar Oyunu Simülasyonu',
      description: 'Bu proje, kullanıcıların sanal para birimi ile çeşitli kumar oyunlarını deneyimleyebilecekleri bir simülasyon platformudur. Kullanıcılar, slot makineleri, rulet, blackjack gibi popüler kumar oyunlarını oynayabilir ve sanal para kazanabilirler. Platform, gerçekçi oyun deneyimi sunarken, sorumlu kumar alışkanlıklarını teşvik eden özellikler de içermektedir.',
      features: [
        'Çeşitli kumar oyunları (Slot, Rulet, Blackjack)',
        'Sanal para sistemi',
        'Gerçekçi oyun mekanikleri',
        'Kullanıcı hesap yönetimi',
        'Oyun istatistikleri ve geçmiş',
        'Güvenli ödeme sistemi',
        'Sorumlu kumar özellikleri',
        'Canlı oyuncu desteği',
        'Mobil uyumlu tasarım',
        'Detaylı oyun kuralları ve yardım'
      ]
    },
    // Footer
    footer: {
      copyright: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    // Navbar
    navbar: {
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      experience: 'Experience',
      blog: 'Blog'
    },
    // Home Page
    home: {
      greeting: 'Hello, I am Emre',
      title: 'Full Stack Developer',
      description: 'I develop modern, user-friendly and scalable web applications using React and .NET technologies. I am experienced in both frontend and backend development processes.',
      contactButton: 'Get In Touch',
      cvButton: 'Download CV',
      cvLink: 'https://drive.google.com/file/d/12mCJ4qegVj7I7ZfxlzUEsZokpM0tqeV1/view?usp=sharing'
    },
    // About Page
    about: {
      title: 'About Me',
      description: "I am a Computer Engineer and Full Stack Developer. On the backend side, I develop RESTful APIs with ASP.NET Core, work with SQL databases, and produce efficient solutions with technologies such as TypeScript and JavaScript. On the frontend side, I develop modern, user-friendly interfaces with React and build strong and scalable structures with TypeScript. I perform version control with tools such as Git and GitHub and take care to write tests for the components I develop. I successfully complete projects with my analytical thinking ability and problem-solving skills in software development processes. I attach great importance to learning new technologies and constantly improving myself.",
      skills: 'Skills'
    },
    // Projects Page
    projects: {
      title: 'Projects',
      viewDetails: 'View Project',
      visitWebsite: 'Visit Website',
      projectsList: [
        {
          title: 'Recruitment Portal Backend',
          description: 'I developed the backend infrastructure of Turkuvaz Media\'s recruitment portal from scratch with ASP.NET Core. I built a secure and sustainable structure with layered architecture, JWT-based authentication, and FluentValidation. I managed the database through Entity Framework Core with a Database-First approach. Within the scope of the project, I developed a REST-based integration API that provides automatic data transfer to the EBA system.'
        },
        {
          title: 'Transportation Website',
          description: 'This project is a transportation website built using modern web development technologies. Designed with Next.js and Tailwind CSS, this site is powered by TypeScript to provide a user-friendly experience. At the same time, while version control is done with Git, media management and distribution are facilitated with services such as Cloudinary and Netlify. Thanks to its SEO-friendly structure, it becomes more visible in search engines. It works integrated with JSON data to provide efficient and fast data management.'
        },
        {
          title: 'Online Auction Website',
          description: 'This project is a full-fledged e-commerce application developed using ASP.NET Core and React. Clean Architecture and CQRS patterns are used. Real-time notifications with SignalR and authentication with JWT are provided. MSSQL was chosen as the database.'
        },
        {
          title: 'Cybersecurity Simulation',
          description: 'This project is a cybersecurity simulation developed using ASP.NET Core (backend) and React (frontend) technologies. Onion Architecture was preferred for a layered and sustainable structure on the backend side. The application allows users to interactively test through specific security scenarios and analyze the results.'
        },
        {
          title: 'AI-Powered Image Classifier',
          description: 'In this project, an image classification model has been developed that analyzes images uploaded by users and classifies them into a specific category (e.g., fruit, animal, object). After visual data goes through preprocessing steps (resizing, normalization, etc.), it is analyzed by a trained artificial intelligence model and class predictions are made.'
        },
        {
          title: 'Gambling Addiction Website',
          description: 'This project was prepared to raise awareness and provide information about gambling addiction. The application was developed with React and presented in a modern and simple structure. It is aimed that users can easily access content related to addiction. The project was published quickly and easily using the Netlify infrastructure.'
        }
      ]
    },
    // Experience Page
    experience: {
      title: 'Education History',
      gpa: 'GPA',
      featuredCourses: 'Featured Courses',
      education: [
        {
          degree: 'Computer Engineering',
          school: 'Erzurum Technical University',
          period: '2021 - 2025',
          description: 'I graduated from Erzurum Technical University, Department of Computer Engineering.',
          gpa: '2.92',
          achievements: [
            '3rd in Department',
            'High Honor Student'
          ],
          courses: [
            'Data Structures and Algorithms',
            'Object Oriented Programming',
            'Database Management Systems',
            'Web Programming',
            'Artificial Intelligence'
          ]
        }
      ]
    },
    // Work Page
    work: {
      title: 'Experience',
      present: 'Present',
      technologiesUsed: 'Technologies Used',
      workExperience: [
        {
          position: 'Backend Developer',
          company: 'Turkuvaz Media Group',
          period: 'August 2025 - October 2025',
          location: 'Istanbul, Turkey',
          description: `During my 3-month mandatory internship, I designed and developed the backend architecture of the **Recruitment Project**, which aims to digitalize Turkuvaz Media's recruitment processes, from scratch. Throughout the project, I created the RESTful API structure using **ASP.NET Core 8**, **Entity Framework Core**, and **MSSQL** technologies. I undertook the development of core modules such as user management, JWT-based authentication, role-based access control, and logging mechanisms. To improve code quality, I built a structure in accordance with **layered architecture** and **SOLID principles**. I also played an active role in team version control and collaboration processes using **Git/GitHub**.`
        }
      ]
    },
    // Contact Page
    contact: {
      title: 'Contact',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      emailPlaceholder: 'Enter your email address',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Write your message',
      description: 'If you have any questions, suggestions, or topics you would like to share, I would be happy to get in touch with you. I will do my best to get back to you as soon as possible.'
    },
    // Project Details Page (Common)
    projectDetails: {
      backButton: 'Back',
      featuresTitle: 'Key Features',
      technologiesTitle: 'Technologies Used',
      imageAlt: 'Project image'
    },
    // Individual Projects
    recruitmentPortal: {
      title: 'Recruitment Portal (Backend)',
      description: `This is a corporate backend service developed to digitalize Turkuvaz Media's recruitment processes. The project was developed from scratch with ASP.NET Core 8 and offers a sustainable and scalable structure with layered architecture, Repository Pattern, AutoMapper, FluentValidation, and JWT-based authentication features. A REST-based integration API for automatic data transfer to the EBA system is also included in the project scope.`,
      features: [
        'RESTful API development based on ASP.NET Core 8',
        'Layered architecture in accordance with Clean Architecture principles',
        'Repository Pattern and Unit of Work approach',
        'Database management with Entity Framework Core (Database-First)',
        'Dependency management with Dependency Injection',
        'Entity–DTO transformations with AutoMapper',
        'Model-based validation with FluentValidation',
        'API documentation and test support with Swagger',
        'Data transfer to EBA system via REST API',
        'API test scenarios and validation with Postman',
        'JWT-based authentication mechanism',
        'Project management and version control with Git and Trello'
      ]
    },
    artificialIntelligence: {
      title: 'AI-Powered Image Classifier',
      description: 'In this project, an image classification model has been developed that analyzes images uploaded by users and classifies them into specific categories (e.g., fruit, animal, object). Visual data goes through preprocessing steps (resizing, normalization, etc.), then is analyzed by a trained artificial intelligence model and class predictions are made.',
      features: [
        'Deep learning-based image classification model',
        'User-friendly web interface',
        'Real-time image analysis',
        'Multi-class prediction support',
        'High accuracy rate',
        'Detailed classification results',
        'Image preprocessing and normalization',
        'Model performance metrics',
        'Easy integration API',
        'Detailed documentation'
      ]
    },
    auction: {
      title: 'Online Auction Platform',
      description: 'This project is an online platform where users can buy and sell various products through auctions. Users can list their products, bid on other users\' products, and track the auction process in real-time. The platform offers secure payment system, user rating system, and detailed product filtering features.',
      features: [
        'Real-time auction system',
        'User-friendly interface',
        'Secure payment infrastructure',
        'Detailed product filtering and search',
        'User rating system',
        'Automatic bid notifications',
        'Product history and price analysis',
        'Multi-language support',
        'Mobile responsive design',
        '24/7 customer support'
      ]
    },
    cybersecurity: {
      title: 'Cybersecurity Simulation',
      description: 'This project is a web application developed for training and simulation purposes in the field of cybersecurity. Users can experience cyber attack and defense simulations based on real-world scenarios. The project is developed using modern web technologies and offers a comprehensive learning experience.',
      features: [
        'Simulations based on real-world cybersecurity scenarios',
        'Interactive learning modules and exercises',
        'Detailed vulnerability analysis and reporting',
        'User-friendly interface and step-by-step guidance',
        'Real-time attack and defense simulations',
        'Comprehensive security checklists',
        'Progress tracking and achievement statistics',
        'Security best practices training',
        'Scenarios at various difficulty levels',
        'Detailed documentation and resources'
      ]
    },
    gambling: {
      title: 'Gambling Game Simulation',
      description: 'This project is a simulation platform where users can experience various gambling games with virtual currency. Users can play popular gambling games such as slot machines, roulette, and blackjack and earn virtual money. The platform offers a realistic gaming experience while also including features that encourage responsible gambling habits.',
      features: [
        'Various gambling games (Slots, Roulette, Blackjack)',
        'Virtual currency system',
        'Realistic game mechanics',
        'User account management',
        'Game statistics and history',
        'Secure payment system',
        'Responsible gambling features',
        'Live player support',
        'Mobile responsive design',
        'Detailed game rules and help'
      ]
    },
    // Footer
    footer: {
      copyright: 'All rights reserved.'
    }
  }
};

