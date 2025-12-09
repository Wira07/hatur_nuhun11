// Konfigurasi - GANTI dengan email dan nomor WA Anda
const CONFIG = {
    emailTo: 'wirasukmasaputra@gmail.com', // Ganti dengan email Wira
    whatsappNumber: '6281219195308', // Ganti dengan nomor WA Wira (format: 62xxx)
    luckyNumber: Math.floor(Math.random() * 30) + 1 // Nomor hadiah yang beruntung (1-30)
};

function moveButton() {
    const btn = document.getElementById('btnNo');
    const buttons = document.querySelector('.buttons');
    
    const maxX = window.innerWidth - btn.offsetWidth - 40;
    const maxY = window.innerHeight - btn.offsetHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

// Tampilkan form ucapan
function showForm() {
    const initialContent = document.getElementById('initialContent');
    const formContent = document.getElementById('formContent');
    
    initialContent.style.transition = 'opacity 0.5s ease';
    initialContent.style.opacity = '0';
    
    setTimeout(() => {
        initialContent.classList.add('hidden');
        formContent.classList.remove('hidden');
        formContent.style.opacity = '0';
        
        setTimeout(() => {
            formContent.style.transition = 'opacity 0.5s ease';
            formContent.style.opacity = '1';
        }, 50);
    }, 500);
}

// Submit ucapan dan kirim email
function submitWish(event) {
    event.preventDefault();
    
    const senderName = document.getElementById('senderName').value;
    const wishMessage = document.getElementById('wishMessage').value;
    
    // Simpan nama pengirim untuk ditampilkan
    document.getElementById('senderNameDisplay').textContent = `Terima kasih, ${senderName}!`;
    
    // Kirim email menggunakan EmailJS atau mailto
    sendEmail(senderName, wishMessage);
    
    // Tampilkan celebration content
    const formContent = document.getElementById('formContent');
    const celebrationContent = document.getElementById('celebrationContent');
    
    formContent.style.transition = 'opacity 0.5s ease';
    formContent.style.opacity = '0';
    
    setTimeout(() => {
        formContent.classList.add('hidden');
        celebrationContent.classList.remove('hidden');
        celebrationContent.style.opacity = '0';
        
        setTimeout(() => {
            celebrationContent.style.transition = 'opacity 0.5s ease';
            celebrationContent.style.opacity = '1';
        }, 50);
        
        
        createConfetti();
        createBalloons();
    }, 500);
}

// Fungsi kirim email (menggunakan mailto sebagai fallback)
function sendEmail(senderName, wishMessage) {
    const subject = `🎉 Ucapan Ulang Tahun dari ${senderName}`;
    const body = `
Nama Pengirim: ${senderName}

Ucapan & Doa:
${wishMessage}

---
Dikirim dari Web Ucapan Ulang Tahun
Tanggal: ${new Date().toLocaleString('id-ID')}
    `;
    
    // Method 1: Menggunakan mailto (akan membuka email client)
    const mailtoLink = `mailto:${CONFIG.emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Buka di tab baru (tidak mengganggu experience)
    // window.open(mailtoLink, '_blank');
    
    // Method 2: Jika ingin menggunakan service email API seperti EmailJS
    // Uncomment code di bawah dan setup EmailJS
    /*
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: senderName,
        message: wishMessage,
        to_email: CONFIG.emailTo
    });
    */
    
    // Simpan ke localStorage sebagai backup
    const wishes = JSON.parse(localStorage.getItem('birthdayWishes') || '[]');
    wishes.push({
        name: senderName,
        message: wishMessage,
        date: new Date().toISOString()
    });
    localStorage.setItem('birthdayWishes', JSON.stringify(wishes));
    
    console.log('Ucapan tersimpan:', { senderName, wishMessage });
}

// Generate 30 kotak hadiah
function generateGiftBoxes() {
    const container = document.getElementById('giftBoxes');
    container.innerHTML = '';
    
    for (let i = 1; i <= 30; i++) {
        const giftBox = document.createElement('div');
        giftBox.className = 'gift-box';
        giftBox.textContent = '🎁';
        giftBox.onclick = () => openGift(i);
        container.appendChild(giftBox);
    }
    
    console.log('Nomor hadiah beruntung:', CONFIG.luckyNumber);
}

// Game pilih hadiah
function openGift(giftNumber) {
    const celebrationContent = document.getElementById('celebrationContent');
    const prizeContent = document.getElementById('prizeContent');
    
    let prize;
    
    // Cek apakah ini hadiah yang beruntung
    if (giftNumber === CONFIG.luckyNumber) {
        // MENANG!
        prize = {
            title: '🎉 SELAMAT! KAMU BERUNTUNG! 🎉',
            message: 'Horee! Kamu mendapat hadiah spesial dari Wira! 🎁💰<br><br>Hubungi Wira via WhatsApp sekarang untuk klaim hadiahmu!'
        };
    } else {
        // Tidak beruntung
        prize = {
            title: '😊 Kurang Beruntung',
            message: 'Waduh, sepertinya kamu kurang beruntung kali ini! 😅<br><br>Tapi terima kasih banyak ya sudah mau mengucapkan selamat ulang tahun! ❤️<br><br>Ucapanmu sangat berarti untuk Wira! 🎂✨'
        };
    }
    
    document.getElementById('prizeTitle').textContent = prize.title;
    document.getElementById('prizeMessage').innerHTML = prize.message;
    
    // Update WhatsApp link
    const waLink = document.querySelector('.btn-whatsapp');
    const senderName = document.getElementById('senderName').value;
    
    let waMessage;
    if (giftNumber === CONFIG.luckyNumber) {
        waMessage = `Halo Wira! Selamat Ulang Tahun! 🎉 Saya ${senderName}, dan saya BERUNTUNG dapat hadiah nomor ${giftNumber}! Mau klaim hadiahnya nih! 🎁`;
    } else {
        waMessage = `Halo Wira! Selamat Ulang Tahun! 🎉 Saya ${senderName}, sudah mengucapkan selamat lewat website kamu. Semoga panjang umur dan sukses selalu! 🎂`;
    }
    
    waLink.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
    
    celebrationContent.style.transition = 'opacity 0.5s ease';
    celebrationContent.style.opacity = '0';
    
    setTimeout(() => {
        celebrationContent.classList.add('hidden');
        prizeContent.classList.remove('hidden');
        prizeContent.style.opacity = '0';
        
        setTimeout(() => {
            prizeContent.style.transition = 'opacity 0.5s ease';
            prizeContent.style.opacity = '1';
        }, 50);
        
        if (giftNumber === CONFIG.luckyNumber) {
            createConfetti();
            createBalloons();
        }
    }, 500);
}

function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#85c1e2', '#ff6348', '#ff9ff3', '#fff'];
            const container = document.body;
            
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.style.position = 'fixed';
                    confetti.style.width = Math.random() * 20 + 5 + 'px';
                    confetti.style.height = Math.random() * 20 + 5 + 'px';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.top = '-30px';
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    confetti.style.opacity = Math.random() * 0.8 + 0.2;
                    confetti.style.zIndex = '9999';
                    confetti.style.pointerEvents = 'none';
                    confetti.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                    confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear`;
                    
                    container.appendChild(confetti);
                    
                    setTimeout(() => {
                        confetti.remove();
                    }, 5000);
                }, i * 25);
            }
        }

        function createBalloons() {
            const balloons = ['🎈', '🎉', '🎊', '🎁', '🎂', '🌟', '✨', '💫', '🎵', '🎶'];
            const container = document.body;
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
                    balloon.style.position = 'fixed';
                    balloon.style.fontSize = Math.random() * 40 + 30 + 'px';
                    balloon.style.left = Math.random() * 100 + '%';
                    balloon.style.bottom = '-80px';
                    balloon.style.zIndex = '9999';
                    balloon.style.pointerEvents = 'none';
                    balloon.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
                    balloon.style.animation = `balloon-rise ${Math.random() * 4 + 3}s ease-out`;
                    
                    container.appendChild(balloon);
                    
                    setTimeout(() => {
                        balloon.remove();
                    }, 7000);
                }, i * 80);
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const content = document.querySelector('.content');
            if (content) {
                content.style.opacity = '0';
                content.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    content.style.transition = 'all 0.8s ease';
                    content.style.opacity = '1';
                    content.style.transform = 'scale(1)';
                }, 100);
            }
            
            // Generate 30 gift boxes saat halaman load
            generateGiftBoxes();
        });