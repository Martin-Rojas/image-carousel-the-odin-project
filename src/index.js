import "./styles.css";

const btnPrev = document.getElementById(`prev`);
const image = document.getElementById(`img`);
const btnNext = document.getElementById(`next`);
const navigationDots = document.getElementsByClassName(`fa-circle`);
const navigationDotsContainer = document.getElementById(`navigation-dots`);

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

  const setIndex = (newIndex) => {
    index = newIndex;

    return index;
  };

  const getIndex = () => index;

  return { nextImg, prevImg, setIndex, getIndex };
}
const index = changeImg();

// Initialize the image carousel and dot navegation
image.setAttribute(`src`, images[0]);
navigationDots[0].classList.add(`navigation-dots-color`);

// Get new and old index
const changeIndexes = (prevIndex, newIndex) => {
  let oldIndex = prevIndex;
  let currentIndex = newIndex;

  image.setAttribute(`src`, images[currentIndex]);

  navigationDots[currentIndex].classList.add(`navigation-dots-color`);
  navigationDots[oldIndex].classList.remove(`navigation-dots-color`);
};

// handle the next click and change image
btnNext.addEventListener(`click`, () => {
  changeIndexes(index.getIndex(), index.nextImg());
});

// Handle the prev btn and change image
btnPrev.addEventListener(`click`, () => {
  changeIndexes(index.getIndex(), index.prevImg());
});

// Link the navegations dots with the images
navigationDotsContainer.addEventListener(`click`, (event) => {
  let oldIndex = index.getIndex();
  let clickedIndex = event.target.getAttribute("value");

  index.setIndex(clickedIndex);

  image.setAttribute(`src`, images[clickedIndex]);

  navigationDots[clickedIndex].classList.add(`navigation-dots-color`);
  navigationDots[oldIndex].classList.remove(`navigation-dots-color`);
});

// Change imgs avery 5 sec
setInterval(() => {
  let oldIndex = index.getIndex();
  let nextIndex = index.nextImg();

  index.setIndex(nextIndex);

  image.setAttribute(`src`, images[nextIndex]);

  navigationDots[nextIndex].classList.add(`navigation-dots-color`);
  navigationDots[oldIndex].classList.remove(`navigation-dots-color`);
}, 5000);
