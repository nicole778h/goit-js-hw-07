import { galleryItems } from './gallery-items.js';
// Change code below this line


function imagePaletteItems() {
    const list = document.querySelector(".gallery");
    for (const photo of galleryItems) {
        // img + atribute
        const image = document.createElement("img");
        image.classList.add("gallery__image");
        image.setAttribute("src", photo.preview);
        image.setAttribute("alt", photo.description);

        //li si atribute
        const elem = document.createElement("li");
        elem.classList.add("gallery__item");

        //tag a si atribute
        const link = document.createElement("a");
        link.setAttribute("href", photo.original);
        link.classList.add("gallery__link");
  
    
        elem.appendChild(link);
        link.appendChild(image);    
        list.appendChild(elem);

       
        link.addEventListener("click", (event) => {
        event.preventDefault();
        });
       
        
    }
        //delay si animatie
        const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
 
}

imagePaletteItems();
console.log(galleryItems);