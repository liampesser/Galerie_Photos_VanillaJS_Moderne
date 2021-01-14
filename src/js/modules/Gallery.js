import Image from './Image';
import galleryTemplate from './templates/gallery';

export default class Gallery {
  // Récupération des données new Gallery [el, images]
  constructor (data) {
    this.el = document.querySelector(data.el); // propriété el du data
    this.sliderListEl;
    this.menuListEl;
    this.index = 0;
    this.intervalTime = 3000;
    this.images = []; // Pour transformer les objets en type images et leur mettre des méthodes
    this.loadImages(data.images); // Lancement de la méthode de chargement des données
    this.template = galleryTemplate;
    this.galleryRender();
    this._displaySLide();
  }

  /**
   * Chargement des images sous forme d'objets de type Image dans this.images
   * @param  {[type]} images [description]
   * @return {[type]}        [description]
   */
  loadImages (images) {
    for (let image of images) { // parcourt toutes les images
      this.images.push(new Image({parent: this, image})); // les transforme en objet de type image -> tableau Json avec ses propriétés (id, src, alt, content)
    }
  }


  // RENDER GALLERY ------------
  galleryRender() {
      this.el.innerHTML = this.template; // Intégration du template sur l'élément app
      // Le DOM de Gallery existe pour le navigateur

      // Activation des éléments dynamiques
      this.menuRender();
      this.sliderRender();
  }

  // RENDER IMAGE MENU ----------
  menuRender() {
    this.menuListEl = this.el.querySelector(".image-menu");
    for (let image of this.images) {
      image.imageMenuRender();
      // Activation des boutons du menu
      image.menuEl.querySelector('a').onclick = (e) => {
        this.index = image.id - 1;
        this._displaySLide();
      }
    }
  }

  // RENDER IMAGE SLIDER ----------
  sliderRender() {
    this.sliderListEl = this.el.querySelector(".image-slider");
    // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
    for (let image of this.images) {
      image.imageSliderRender();
    }
  }

  _displaySLide () {
    this.h1 = this.el.querySelector('.slider-menu h1');
    this.sliderListEl.style.left = "-" + this.index + "00%";
    this.h1.innerText = this.images[this.index].alt;
  }

}
