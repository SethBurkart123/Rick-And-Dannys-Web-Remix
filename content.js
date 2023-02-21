const dannyDevito =
  [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito2.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito3.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito4.avif"
  ]
rickRoll = 

const changeImg = () => {
  const imgs = document.querySelectorAll("img");
  const images = document.querySelectorAll("image");
  const videos = document.querySelectorAll(".video");

  videos.forEach((video) => {
    if(video.rickroll.includes('rickrolled')) {
      if(video.src.includes("blob")) {
        video.src = rickRollYoutube;
        video.setAttribute('rickrolled', 'true');
      }
    }
  });

  imgs.forEach((img) => {
    if (!dannyDevito.includes(img.src)) {
      img.src = dannyDevito[Math.floor(Math.random()*dannyDevito.length)];
      img.srcset = "";
      img.style = 'object-fit: cover !important;';
    }
  });

  images.forEach((img) => {
    if (!dannyDevito.includes(img.src)) {
      img.src = dannyDevito[Math.floor(Math.random()*dannyDevito.length)];
      img.style = 'object-fit: cover !important;';
    }
  });
};

changeImg();

window.addEventListener("scroll", changeImg);