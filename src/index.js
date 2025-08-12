import "./styles.css";

const btnPrev = document.getElementById(`prev`);
const image = document.getElementById(`img`);
const btnNext = document.getElementById(`next`);

const images = [
  "./images/img01.webp",
  "./images/img02.webp",
  "./images/img03.webp",
  "./images/img04.webp",
  "./images/img05.webp",
  "./images/img06.webp",
  "./images/img07.webp",
  "./images/img08.webp",
  "./images/img09.webp",
  "./images/img10.webp",
  "./images/img11.webp",
  "./images/img12.webp",
];

// Closure to keep with current index to next imgs
function changeImg() {
  let index = 0;

  const nextImg = () => {
    index = (index + 1) % images.length;

    return index;
  };

  const prevImg = () => {
    index = (index - 1 + images.length) % images.length;
    return index;
  };

  return { nextImg, prevImg };
}
const index = changeImg();

// Initialize the image carousel
image.setAttribute(`src`, images[0]);

// handle the next click and change image
btnNext.addEventListener(`click`, () => {
  image.setAttribute(`src`, images[index.nextImg()]);
});

// Handle the prev btn and change image
btnPrev.addEventListener(`click`, () => {
  image.setAttribute(`src`, images[index.prevImg()]);
});
