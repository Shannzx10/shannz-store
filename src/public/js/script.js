const tele = 'data:image/png;base64,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'
const ig = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPbEdSyZrjNPqoAeroD0go1aOOes-JJv8v1jYwWSD-Zd10JR3&s'
const fb = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3qskp70YrxHrZfWJ58W1XhM1xaoO7A1tI9Eio34n1ZqS5es&s'
const wa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png'
const email = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPTMkZOlVCzWEJL4-PHTEahJq3szxYIycZ6Kg6LjxG04Goqn8&s'
const web = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVcU3XLSEQMZPeJRSDJtxDY8WGkfoRhPKaqMIEsYpmlJSct0&s'

const teleD = 'Chat Via Telegram'
const igD = 'Chat Via Instagram'
const fbD = 'Chat Via Facebook'
const waD = 'Chat Via WhatsApp'
const emailD = 'Chat Via Email'
const webD = 'Order Via Website'

const products = [
    {
        id: 1,
        name: "Panel Pterodactyl",
        price: 7000,
        image: "https://telegra.ph/file/1679b6df9fbe3e697c0cf.jpg",
        description: "Panel Unli Murah, Kualitas Istimewah.",
        author: "ShannModerz",
        features: [
            "Unlimited",
            "Server Privat",
            "Garansi 15D",
            "Max Durasi 30D"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://link-wa'
            },
        ]
    },
    {
        id: 2,
        name: "SC XBOT V1.6",
        price: 40000,
        image: "https://telegra.ph/file/28de0fcf83d3aa1ab0733.png",
        description: "script bot whatsapp tipe case menggunakan baileys whiskeysocket original versi terbaru.",
        author: "ShannModerz",
        features: [
            "Pairing Code",
            "Fitur 600+",
            "Full Button",
            "Banyak Fitur Langkah"
        ],
        paymentMethods: [
            {
               logo: wa,
               description: waD,
               link: 'https://link-wa'
            },
        ]
    },
    {
        id: 28,
        name: "Jasa Pembuatan Aplikasi",
        price: 50000,
        image: "https://endpoint.web.id/server/file/82v41e405aMPd5H.jpg",
        description: "Jasa membuat aplikasi android, Bisa untuk kebutuhan bisnis, atau lainnya, Kecuali hal yang melanggar aturan dan konsep yang berlebihan",
        author: "DitzOfc",
        features: [
            "Open Source (Setelah jadi, Project yang di kerjakan penjoki akan di kirim ke konsumen)",
            "Menggunakan Java, Harga Murah Mulai dari 50k",
            "Pengerjaan cepat maksimal 2 bulan, Tergantung Aplikasi apa yang di request"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285717062467'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/@Ditzstore236'
            },
        ]
    },
    {
        id: 10,
        name: "SC BOT LENWY",
        price: 25000,
        image: "https://telegra.ph/file/8d5874daf03be2a5797ec.jpg",
        description: "Sc bot whatsapp dengan type case, Menggunakan whiskey baileys",
        author: "Lenwy",
        features: [
            "Pairing Code",
            "Free Apikey",
            "Setmenu",
            "Button Menu",
            "RPG Dengan Story (perkembangan)",
            "Selengkapnya Tanyakan Saja"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283829814737'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/@ilenwy'
            },
        ]
    },
    {
        id: 12,
        name: "VPS ISP DIGITAL OCEAN",
        price: 20000,
        image: "https://telegra.ph/file/aa107831e82ec120fb062.png",
        description: "20k-75k Bisa untuk buat panel pterodactyl, WHM, Dll",
        author: "ISNZOFC STORE",
        features: [
            "Free Instsll Panel Pterodactyl"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/62895326036822'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/IsnzOfc'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/isna.zip'
            }
        ]
    },
    {
        id: 3,
        name: "Sc GisellBot",
        price: 40000,
        image: "https://telegra.ph/file/4c96073370c1f31e015c1.jpg",
        description: "blablabla",
        author: "Liiixd_",
        features: [
            "Kelebihan banyak: v"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283134213550'
            },
            {
               logo: ig,
               description: igD,
               link: 'https://www.instagram.com/aliilaid_/?utm_source=other&utm_medium=copy_link&utm_content=sc+gisellbot?'
            },
            {
               logo: fb,
               description: fbD,
               link: 'https://www.facebook.com'
            },
        ]
    },
    {
        id: 5,
        name: "Nokos Virtual All Country",
        price: 7000,
        image: "https://telegra.ph/file/1aa5f3490241098746a03.jpg",
        description: "Sell Nomor kosong virtual OTP All country Murah Harga 7k-15k Testi Contact me aja dan bisa request negara",
        author: "ErerexID Chx",
        features: [
            "Bisa Di Pakai"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/62895342022385'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/ErerexIDOfc'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/ramzy_chx'
            },
            {
                logo: email,
                description: emailD,
                link: 'mailto:ererexidnewbie21@yahoo.com'
            },
        ]
    },
    {
        id: 4,
        name: "SC KOMARI_BOTZ",
        price: 65000,
        image: "https://telegra.ph/file/925f1006a95e568bb6b1b.jpg",
        description: "Harga Bisa Nego",
        author: "Ditz Offc",
        features: [
            "Function SendButton",
            "Hd Video",
            "Fast Respon",
            "Free Update"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285717062467'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/Ditzstore236'
            },
        ]
    },
    {
        id: 11,
        name: "VPS DO & PANEL PRIVAT",
        price: 2000,
        image: "https://telegra.ph/file/6998249dbf2154f63df33.jpg",
        description: "Yuki menyediakan panel privat dan VPS",
        author: "Yuki Host",
        features: [
            "Terjamin Kualitas"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288229683561'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/SariiRooti'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/ammarbn27'
            }
        ]
    },
    {
        id: 6,
        name: "Sc Bot Md Getaway Qris",
        price: 40000,
        image: "https://telegra.ph/file/519c96a636118ee9ba1bf.jpg",
        description: "Script bot no ENC Full 100% fitur 80% work masih dalam tanganan jika ada yang error",
        author: "ErerexID Chx",
        features: [
            "Qris Tanpa Ktp"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/62895342022385'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/ErerexIDOfc'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/ramzy_chx'
            },
            {
                logo: email,
                description: emailD,
                link: 'mailto:ererexidnewbie21@yahoo.com'
            },
        ]
    },
    {
        id: 14,
        name: "VPS DIGITAL OCEAN",
        price: 35000,
        image: "https://telegra.ph/file/35bb4006e051f63fe5c78.jpg",
        description: "KUALITAS TERBAIK GARANSI 15D FREE INSTALL PTERODACTYL FREE REQ OS, REQ VERSI FREE REQ SUBDOMAIN PTERODACTYL FREE INSTALL THEMA",
        author: "LEXCZXBAKZ",
        features: [
            "Bergaransi 15D",
            "Digital Ocean Kualitas Terbaik"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6287743212449'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/LeXcZ_Alok'
            },
        ]
    },
    {
        id: 13,
        name: "PT PANEL",
        price: 15000,
        image: "https://telegra.ph/file/e8193b642f56d654d8625.jpg",
        description: "Pt panel murah",
        author: "elaina store",
        features: [
            "Bisa Open Admin Panel"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283144856150'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/elainastore'
            },
        ]
    },
    {
        id: 9,
        name: "Sc Bot Wa Fiisya MD",
        price: 35000,
        image: "https://telegra.ph/file/b15eabc4184aa41e90a2d.jpg",
        description: `➠ SCRIPT TYPE CASE\n➠ STORE MENU\n➠ CPANEL BUTTON\n➠ PUSHKONTAK\n➠ GAME MENU\n➠ DDOS MENU\n➠ BUG MENU\n➠ AI/AIIMAGE MENU\n➠ DOWNLOADER MENU
➠ DLL

TOTAL FEATURE 600+`,
        author: "ALFIXD",
        features: [
            "Free Update",
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/62895615063060'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/alfisyahrial'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/alfisyahriaal'
            },
            {
                logo: fb,
                description: fbD,
                link: 'https://www.facebook.com/alfi.syahriall.3?mibextid=ZbWKwL'
            }
        ]
    },
    {
        id: 7,
        name: "Vps Kyouka Digital",
        price: 15000,
        image: "https://telegra.ph/file/68dd346dbe531bb79884c.jpg",
        description: "15k-70k VpsCore adalah solusi VPS premium yang dirancang untuk memenuhi kebutuhan komputasi dan hosting Anda. Dengan performa tinggi dan keandalan yang terjamin, VpsCore memastikan bisnis dan aplikasi Anda berjalan tanpa hambatan. Dapatkan kebebasan penuh dalam mengelola server Anda dengan keamanan tingkat tinggi.",
        author: "Kyouka Digital",
        features: [
            "Performa Tinggi: Didukung oleh hardware terbaru untuk memastikan kecepatan dan responsivitas optimal. Sesuai dengan Ram Vps yang kamu inginkan.",
            "Keandalan: Uptime 99,99% yang memastikan situs atau aplikasi Anda selalu online. Garansi 20 Hari",
            "Fleksibilitas: Pilihan konfigurasi yang dapat disesuaikan sesuai kebutuhan Anda."
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288293622523'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/StoreyusID'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/arastor'
            },
        ]
    },
    {
        id: 8,
        name: "Pterodactyl (host bot whatsapp)",
        price: 1000,
        image: "https://telegra.ph/file/9419de0b2cea6b8beb096.jpg",
        description: "Menjual Panel Bot WhatsApp Dengan Harga Terjangkau Dan Kualitas Terjamin",
        author: "NabilGtPs",
        features: [
            "Server Terjaga",
            "Harga Terjangkau",
            "Kualitas Terjamin",
            "Hemat Kuota",
            "Hemat Penyimpanan",
            "Web close Bot tetap on",
            "Menggunakan vps 8GB RAM 4VCPU Intel Premium"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285180768293'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/NaBiLGTPS'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/nabilgtps'
            },
        ]
    },
    {
        id: 15,
        name: "CPANEL WHM",
        price: 15000,
        image: "https://telegra.ph/file/aa543f8cc8199225780f7.jpg",
        description: "Whm mini 15k, whm medium 20k, whm extra 25k, whm super 30k, Server Lanjayy",
        author: "King Of Bear",
        features: [
            "100% Amanah Dan Sudah Banyak Testimoni"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288279268363'
            },
        ]
    },
    {
        id: 16,
        name: "Vps Digital Ocean",
        price: 20000,
        image: "https://telegra.ph/file/549a841b6be097d7fbc9f.png",
        description: "20k-85k Murah bergaransi 15 Hari",
        author: "FahryCruel",
        features: [
            "100% Amanah Dan Sudah Banyak Testimoni"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6281578268507'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/FahryCruell'
            },
        ]
    },
    {
        id: 17,
        name: "NOKOS",
        price: 7000,
        image: "https://telegra.ph/file/6451f43ed8feb866b592e.png",
        description: "NOKOS ALL CONTRY",
        author: "Petra Store",
        features: [
            "Otp max 3x",
            "Bisa Request Operator"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6281389190294'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/PetraStore'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/petrastore19'
            },
        ]
    },
    {
        id: 18,
        name: "Admin Panel Perbulan Fresh",
        price: 20000,
        image: "https://telegra.ph/file/3bfeb2e539f20afe44d42.jpg",
        description: "Panel Khusus Bot Wa, Open murbug juga",
        author: "Kevin Official",
        features: [
            "Create Panel Sepuasnya"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283898383437'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/KevinOfficial12'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/KevinOfficialReal'
            },
            {
                logo: fb,
                description: fbD,
                link: 'https://www.facebook.com/KevinOfficial32'
            }
        ]
    },
    {
        id: 19,
        name: "SC SinBotz",
        price: 40000,
        image: "https://telegra.ph/file/562b0c675c2356b37c6a9.png",
        description: "SCRIPT BOT WHATSAPP YANG DILENGKAPI BERBAGAI AI, MULAI DARI GPT 4 TURBO,   GEMINI DAN AI GENERATE IMAGE, DAN FITUR UNGGULAN LAINNYA DENGAN VERSI BUTTON, DAN BISA DI SETMENU (1-7), Rp40.000 GAK DAPAT UPDATE, Rp75.000 UPDATE TIAP BULAN",
        author: "AFSIN STORE",
        features: [
            "Free Panel Unlimited"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283873123398?text=BANG+MAU+BUY'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/afsin_store'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/afsin_store'
            },
        ]
    },
    {
        id: 20,
        name: "PANEL PTERODACTYL",
        price: 15000,
        image: "https://telegra.ph/file/35c3f0416df1c2f55325b.jpg",
        description: "SEBUAH PRODUK DIGITAL UNTUK RUNNING BOT WHATSAPP, TELE MAUPUN DISCORD",
        author: "AFSIN STORE",
        features: [
            "PANEL PRIVAT"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283873123398?text=BANG+MAU+BUY'
            },
            {
                logo: tele,
                description: teleD,
                link: 'https://t.me/afsin_store'
            },
            {
                logo: ig,
                description: igD,
                link: 'https://instagram.com/afsin_store'
            },
        ]
    },
    {
        id: 21,
        name: "Panel Pterodactyl",
        price: 6000,
        image: "https://telegra.ph/file/c9f1904ea024bdad17184.jpg",
        description: "PANEL UNLI MURAH",
        author: "Zax",
        features: [
            "UNLIMITED",
            "SERVER PRIVAT",
            "GARANSI 14D",
            "MAX DURASI 30D"
        ],
        paymentMethods: [
             {
               logo: tele,
               description: teleD,
               link: 'https://t.me/hamz0875'
            },
        ]
    },
    {
        id: 22,
        name: "Website Builder",
        price: 80000,
        image: "https://telegra.ph/file/db067838a27d976ebcd3d.jpg",
        description: "Untuk Jasa Pembuatan Store Dengan Harga 80.000 Sudah Terima Jadi, Dapat Sub Domain .shop dan mendapatkan gratis whatsapp Api Geteway Trial Dengan Exp 5Days Untuh Preview Website Bisa Cek oredigital.shop",
        author: "Ore Digital",
        features: [
            "Setting website via admin panel",
            "Free sub domain",
            "Proses instalasi 10mnt - 1jam",
            "Website dipastikan aman 100%",
            "Perpanjangan Web 10k/bln"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6283170801193'
            },
            {
               logo: tele,
               description: teleD,
               link: 'https://t.me/@oredigital'
            },
            {
              logo: web,
              description: webD,
              link: 'https://oredigital.shop'
            },
        ]
    },
    {
        id: 23,
        name: "Panel Murah",
        price: 5000,
        image: "https://telegra.ph/file/cd80c20567e83a217c784.jpg",
        description: "📮 RAM 4GB CPU 100% : 4K, 📮 RAM 5GB CPU 120% : 5K, 📮 RAM 6GB CPU 150% : 6K, 📮 RAM 7GB CPU 180% : 7K, 📮 RAM 8GB CPU 210% : 8K, 📮 UNLI GB CPU UNLI : 10K",
        author: "© caca shop",
        features: [
            "BANYAK"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6285283090385'
            },
            {
               logo: tele,
               description: teleD,
               link: 'https://t.me/prettyluvv.caa_'
            },
        ]
    },
    {
        id: 24,
        name: "Panel Privat",
        price: 6000,
        image: "https://telegra.ph/file/717ccd1513e792014a9d2.jpg",
        description: "Panel Unli Murah",
        author: "Valiant Store",
        features: [
            "Server aman + terjaga",
            "Sc aman"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6282253595771'
            },
            {
               logo: tele,
               description: teleD,
               link: 'https://t.me/valiant29'
            },
        ]
    },
    {
        id: 25,
        name: "ADP",
        price: 5000,
        image: "https://telegra.ph/file/e166a815f4211d5ce6757.jpg",
        description: "Admin panel spek gg dengan harga yang murah",
        author: "zen",
        features: [
            "No Lag"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288226340200'
            },
        ]
    },
    {
        id: 26,
        name: "Netflix Premium",
        price: 30000,
        image: "https://telegra.ph/file/d320b84f1154ea08535d4.jpg",
        description: "Akun netflix premium murah 1bulan",
        author: "MolarAzka Tore",
        features: [
            "Lebih murah dan terjangkau"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6282329141154'
            },
            {
              logo: email,
              description: emailD,
              link: 'mailto:bussidazka@gmail.com'
            }
        ]
    },
    {
        id: 27,
        name: "SCRIPT NOVA-TECH",
        price: 40000,
        image: "https://telegra.ph/file/6be4af7f7dd2a3a7f84a7.jpg",
        description: "Script bot wa free update dan fix simple fitur",
        author: "SANZMD",
        features: [
            "Free Update",
            "Free Fix Keamanan Script",
            "Simple Dan Size Ringan"
        ],
        paymentMethods: [
             {
               logo: wa,
               description: waD,
               link: 'https://wa.me/6288706430660'
            },
        ]
    },
];







// Generate product list
const productsSection = document.querySelector(".products");
products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2 class="tityd">${product.name}</h2>
        <p>Rp ${product.price.toLocaleString('id-ID')}</p>
    `;
    productCard.addEventListener('click', () => openProductDetail(product));
    productsSection.appendChild(productCard);
});

function openProductDetail(product) {
    const overlay = document.getElementById("product-detail-overlay");
    const detailContent = document.getElementById("product-detail");
    const overlayContent = document.getElementById("product-detail-content");
    
    detailContent.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        </div>
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
            <p>${product.description}</p>
            <h3>Di Publikasi Oleh</h3>
              <h5>✒️ ${product.author}</h5>
            <h3>Keunggulan Produk</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="buy-button" onclick="openPaymentMenu(${product.id})">Beli Produk</button>
    `;
    
    overlay.style.display = "block";
    overlayContent.scrollTop = 0;
    
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);

    // Reset payment menu state
    document.getElementById('payment-menu').classList.remove('active');
    document.getElementById('close-detail').style.display = 'flex';
}

function openPaymentMenu(productId) {
    const product = products.find(p => p.id === productId);
    const paymentMenu = document.getElementById('payment-menu');
    const paymentOptions = document.getElementById('payment');

    paymentOptions.innerHTML = product.paymentMethods.map(method => `
        <div class="payment-option" onclick="selectPaymentMethod('${method.link}')">
        <img src="${method.logo}" alt="${method.description}">
        <span class="payy">${method.description}</span>
      </div>
    `).join('');

    paymentMenu.classList.add('active');
}

function selectPaymentMethod(link) {
    window.location.href = link;
}

// Close payment menu when clicking outside
document.addEventListener('click', (event) => {
    const paymentMenu = document.getElementById('payment-menu');
    if (paymentMenu.classList.contains('active') && !paymentMenu.contains(event.target) && !event.target.classList.contains('buy-button')) {
        paymentMenu.classList.remove('active');
    }
});

function animateCount(elementId, target, duration) {
    const element = document.getElementById(elementId);
    const start = 0;
    const increment = target / (duration / 16); // 16ms adalah sekitar 60fps
    let current = start;

    const animateCount = () => {
        current += increment;
        element.textContent = Math.floor(current).toLocaleString();

        if (current < target) {
            requestAnimationFrame(animateCount);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    animateCount();
}

document.addEventListener('DOMContentLoaded', () => {
    animateCount('seller-count', 24, 4000); // Total Penjual
    animateCount('sales-count', 28, 4000); // Total Terjual
    animateCount('sell', 56, 4000);
    
    const closeButton = document.getElementById('close-detail');
    closeButton.addEventListener('click', closeProductDetail);
});

document.querySelectorAll('.product-item').forEach((item, index) => {
    item.addEventListener('click', () => openProductDetail(products[index]));
});

// Close the overlay when clicking outside the content
document.getElementById("product-detail-overlay").addEventListener('click', (event) => {
    if (event.target.id === "product-detail-overlay") {
        closeProductDetail();
    }
});

// Function to close product detail overlay
let lastScrollPosition = 0;

function closeProductDetail() {
    const overlay = document.getElementById("product-detail-overlay");
    const overlayContent = document.getElementById("product-detail-content");
    const closeButton = document.getElementById('close-detail');
    
    // Save the last scroll position
    lastScrollPosition = overlayContent.scrollTop;
    
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = "none";
        closeButton.style.display = 'none'; // Hide the close button
    }, 300); // Wait for the animation to complete
}

const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const searchTrigger = document.querySelector('.search-container .search-bar input');
const searchTriggerBtn = document.querySelector('.search-container .search-bar button');
const backButton = document.getElementById('back-button');

function openSearchOverlay() {
    searchOverlay.classList.add('active');
    searchInput.focus();
    searchInput.placeholder = searchTrigger.placeholder;
}

function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
}

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    displaySearchResults(filteredProducts);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p>No products found.</p>';
        return;
    }

    results.forEach(product => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Rp ${product.price.toLocaleString('id-ID')}</p>
            </div>
        `;
        resultItem.addEventListener('click', () => {
            openProductDetail(product);
            closeSearchOverlay();
        });
        searchResults.appendChild(resultItem);
    });
}

searchTrigger.addEventListener('click', openSearchOverlay);
searchTriggerBtn.addEventListener('click', openSearchOverlay);
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

backButton.addEventListener('click', closeSearchOverlay);

document.getElementById("product-detail-overlay").addEventListener('transitionend', (event) => {
    if (event.propertyName === 'transform' && event.target.classList.contains('active')) {
        const overlayContent = document.getElementById("product-detail-content");
        overlayContent.scrollTop = 0;
    }
});