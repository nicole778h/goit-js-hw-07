import { galleryItems } from './gallery-items.js';

const list = document.querySelector(".gallery");

function imagePaletteItems() {
    for (const photo of galleryItems) {
        const image = document.createElement("img");
        image.classList.add("gallery__image");
        image.setAttribute("src", photo.preview);
        image.setAttribute("data-source", photo.original);
        image.setAttribute("alt", photo.description);

        const elem = document.createElement("li");
        elem.classList.add("gallery__item");

        const link = document.createElement("a");
        link.setAttribute("href", photo.original);
        link.classList.add("gallery__link");
        link.appendChild(image);
        elem.appendChild(link);
        list.appendChild(elem);

        link.addEventListener("click", (event) => {
            event.preventDefault();
            const instance = basicLightbox.create(`<img width="800" height="600" src="${photo.original}">`);
            instance.show();
            // Închiderea ferestrei modale la apăsarea tastei Escape
            const closeListener = (event) => {
                if (event.key === 'Escape') {
                    instance.close();
                    document.removeEventListener('keyup', closeListener);
                }
            };
            document.addEventListener('keyup', closeListener);
        });
    }
}

imagePaletteItems();
