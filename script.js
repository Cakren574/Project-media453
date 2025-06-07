// Ambil elemen-elemen yang dibutuhkan
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const galleryImgs = document.querySelectorAll(".gallery img");

// Saat gambar diklik, munculkan pop-up
galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});
 // Fungsi untuk menangani klik tombol like
    function toggleLike(button) {
      const countDiv = button.nextElementSibling; // Ambil div like-count di bawah tombol
      let count = parseInt(countDiv.textContent); // Ambil jumlah saat ini
      
       // Tambah atau kurangi suka berdasarkan status
      if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        count--;
      } else {
        button.classList.add('liked');
        count++;
      }

      // Update teks jumlah suka
      countDiv.textContent = count + " suka";
    }
      

// Saat pop-up diklik, tutup pop-up
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
