"use strict";
import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const closeLightbox = document.querySelector('[data-action="close-lightbox"]');
const lightBox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

const createMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a
  class="gallery__link"
  href= ${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;

const createGalery = (galleryItems) =>
  galleryItems.map((item) => createMarkup(item)).join("");

gallery.insertAdjacentHTML("beforeend", createGalery(galleryItems));

const openImg = (event) => {
  event.preventDefault();
  lightBox.classList.add("is-open");
  lightboxImage.src = event.target.dataset.source;
};

const closeImg = (event) => {
  lightBox.classList.remove("is-open");
  lightboxImage.src = "";
};

const handlingGalleryClose = (event) => {
  if (event.target === closeLightbox) closeImg(event);
};

gallery.addEventListener("click", openImg);
lightBox.addEventListener("click", handlingGalleryClose);
