const nicolasCage =
  "https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=620&quality=45&dpr=2&s=none";

const changeImg = () => {
  const imgs = document.querySelectorAll("img");
  const images = document.querySelectorAll("image");

  imgs.forEach((img) => {
    img.src = nicolasCage;
    img.srcset = "";
  });

  images.forEach((img) => {
    img.src = nicolasCage;
  });
};

changeImg();

window.addEventListener("scroll", changeImg);
