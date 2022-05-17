import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems)
gallery.insertAdjacentHTML("afterbegin", galleryMarkup)

function createGalleryItems(item) {
    return item
        .map(({preview, original, description}) => {
            return `<div class="gallery__item">
            <a class="gallery__link" onclick="event.preventDefault()" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`})
        .join("")
}

gallery.addEventListener("click", selectItem);





function selectItem(event) {
    if (event.target.nodeName != "IMG") {
        return
    }
    const instance  = basicLightbox.create(`
      <img width="1400" height="900" src="${event.target.dataset.source}">
    `, {onShow: (instance) => {
      
      document.addEventListener("keydown", function(e) {
        if ( e.key === "Escape" ) {
          instance.close();
        }
      }) 
    }})
  

    instance.show()

}
 
