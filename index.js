// JavaScript untuk mengontrol tampilan navbar offcanvas dan tombol
const openBtn = document.querySelector(".open-navbar-btn");
const closeBtn = document.querySelector(".close-navbar-btn");
const offcanvas = document.querySelector(".offcanvas");

openBtn.addEventListener("click", () => {
    offcanvas.style.right = "0";
    openBtn.classList.add("clicked"); // Menambah kelas "clicked" ke tombol ketika diklik
});

closeBtn.addEventListener("click", () => {
    offcanvas.style.right = "-340px";
    openBtn.classList.remove("clicked"); // Menghapus kelas "clicked" dari tombol ketika ditutup
});



   // Tanggal target (gantilah dengan tanggal target Anda)
   const targetDate = new Date('2023-12-31 00:00:00').getTime();

   // Update hitung mundur setiap 1 detik
   const countdownInterval = setInterval(function() {
       const currentDate = new Date().getTime();
       const timeRemaining = targetDate - currentDate;

       // Hitung hari, jam, menit, dan detik
       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

       // Update tampilan hitung mundur
       document.getElementById('days').textContent = days.toString().padStart(2, '0');
       document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
       document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
       document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

       // Hentikan hitung mundur jika waktu target telah tercapai
       if (timeRemaining <= 0) {
           clearInterval(countdownInterval);
           document.getElementById('countdown').textContent = 'Waktu telah habis!';
       }
   }, 1000); // 1 detik

  