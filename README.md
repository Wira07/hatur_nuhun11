# 🎉 Website Ucapan Ulang Tahun - Wira Sukma Saputra

Website interaktif untuk mengucapkan selamat ulang tahun dengan fitur game hadiah berhadiah!

## ✨ Fitur Utama

- 📝 **Form Ucapan & Doa** - Pengunjung bisa menulis ucapan personal
- 📧 **Notifikasi Email Otomatis** - Setiap ucapan masuk langsung ke email
- 🚫 **Anti Curang** - Satu nama hanya bisa submit sekali
- 🎁 **Game 30 Hadiah** - 30 kotak hadiah, hanya 1 yang beruntung!
- 💬 **WhatsApp Integration** - Langsung hubungi via WhatsApp
- 📱 **Fully Responsive** - Support semua device (Desktop, Tablet, Mobile)
- 🎨 **Animasi Cantik** - Background gradient animasi + confetti effect

## ⚙️ Setup & Konfigurasi

### 1. Setup Email Notifikasi

Edit file `script.js` bagian atas:

```javascript
const CONFIG = {
    emailTo: 'wirasukmasaputra@gmail.com', // ← Ganti dengan email Anda
    whatsappNumber: '6281219195308', // ← Ganti dengan nomor WA Anda (format: 62xxx)
    luckyNumber: Math.floor(Math.random() * 30) + 1
};
```

### 2. Aktivasi Email Notifikasi (FormSubmit)

Untuk menerima notifikasi email:

1. Buka website Anda di browser
2. Isi form ucapan dengan nama dan pesan test
3. Submit form
4. **FormSubmit akan kirim email konfirmasi ke email Anda**
5. **Buka email dan klik tombol "Activate"**
6. Setelah aktivasi, semua ucapan berikutnya akan langsung masuk ke email!

**Catatan:** Aktivasi hanya perlu dilakukan sekali saja.

## 🎮 Cara Kerja Game Hadiah

1. User mengisi form ucapan + doa
2. Setelah submit, muncul 30 kotak hadiah 🎁
3. User pilih 1 kotak
4. Sistem cek apakah itu nomor beruntung:
   - ✅ **MENANG** → Dapat hadiah! Hubungi via WhatsApp
   - ❌ **Kurang Beruntung** → Terima kasih sudah mengucapkan

## 🛡️ Fitur Anti Curang

- Sistem menyimpan nama yang sudah submit di `localStorage`
- Nama yang sama tidak bisa submit 2 kali
- Semua ucapan tersimpan di `localStorage` sebagai backup
- Notifikasi email terkirim setiap ada ucapan baru

## 📱 Responsive Design

Support semua ukuran layar:
- 💻 Desktop (1920px+)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile Portrait (375px - 480px)
- 📱 Mobile Landscape (orientation: landscape)
- 📱 iPhone SE & small devices (320px+)

## 🎨 Teknologi

- HTML5
- CSS3 (Animations, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- FormSubmit.co (Email Service)
- LocalStorage (Data persistence)

## 📂 Struktur File

```
ulang_tahun/
├── index.html      # Struktur HTML
├── style.css       # Styling & responsive design
├── script.js       # Logic & interactivity
└── README.md       # Dokumentasi
```

## 🚀 Deployment

Website ini sudah siap di-deploy ke:
- GitHub Pages
- Netlify
- Vercel
- Hosting PHP/Apache (Laragon, XAMPP, dll)

## 💡 Tips

- Cek console browser untuk melihat nomor hadiah beruntung (testing)
- Lihat semua ucapan tersimpan: `localStorage.getItem('birthdayWishes')`
- Reset nama yang sudah submit: `localStorage.removeItem('submittedNames')`
- Pastikan email sudah di-activate di FormSubmit untuk terima notifikasi

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, hubungi via WhatsApp yang tercantum di website.

---

**Selamat Ulang Tahun, Wira Sukma Saputra! 🎂🎉**
