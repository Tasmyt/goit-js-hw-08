import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const ListImage = document.querySelector(".gallery");
const cardImages = galleryCardsMarkup(galleryItems);
ListImage.insertAdjacentHTML("beforeend", cardImages);

function galleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class='gallery__link' href = '${original}'>
            <img
                class="gallery__image"
                src= "${preview}" 
                alt = '${description}' /> 
        </a>
        </li>`;
    })
    .join("");
}


new SimpleLightbox(".gallery__item a", {
captionsData: "alt",
captionPosition: "bottom",
captionDelay: 250,
});

console.log(galleryItems);
