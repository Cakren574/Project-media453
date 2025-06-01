const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const galleryImgs = document.querySelectorAll(".gallery img");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});


popup.addEventListener("click", () => {
  popup.style.display = "none";
});
