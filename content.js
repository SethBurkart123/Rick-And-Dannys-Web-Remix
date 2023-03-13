const dannyDevito =
  [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito2.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito3.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito4.avif"
  ]
//rickRoll = "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/nevergonnagiveyouup.mp4";
//rickRollYoutube = "blob:https://www.youtube.com/76f6d70c-8305-4bda-b3a6-1f6581852bbc";

const changeImg = () => {
  /*if (window.location.href.includes("youtube.com/watch") && (window.location.href != 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')) {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }*/
  const imgs = document.querySelectorAll("img");
  const images = document.querySelectorAll("image");
  /*const videos = document.getElementsByTagName("video");

  if (videos.length > 0) {
    document.getElementsByTagName("html").innerHTML = "<video autoplay loop><source src='" + rickRoll + "' type='video/mp4'></video>"
  }*/

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
window.addEventListener('locationchange', changeImg);