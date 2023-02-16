const nicolasCage =
  [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito2.jpg"
  ]

const changeImg = () => {
  const imgs = document.querySelectorAll("img");
  const images = document.querySelectorAll("image");

  imgs.forEach((img) => {
    if (!nicolasCage.includes(img.src)) {
      img.src = nicolasCage[Math.floor(Math.random()*nicolasCage.length)];
      img.srcset = "";
      img.style = 'object-fit: contain !important;';
    }
  });

  images.forEach((img) => {
    img.src = nicolasCage[Math.floor(Math.random()*nicolasCage.length)];
    img.style = 'object-fit: contain !important;';
  });
};

changeImg();

window.addEventListener("scroll", changeImg);
