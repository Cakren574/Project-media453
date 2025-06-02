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

// Saat pop-up diklik, tutup pop-up
popup.addEventListener("click", () => {
  popup.style.display = "none";
});
