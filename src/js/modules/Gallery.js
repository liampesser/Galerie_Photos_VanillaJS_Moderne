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
    this.h1 = this.el.querySelector('.slider-menu h1')
    this.images = []; // Pour transformer les objets en type images et leur mettre des méthodes
    this.loadImages(data.images); // Lancement de la méthode de chargement des données
    this.template = galleryTemplate;
    this.galleryRender(); // affichage
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
      this.renderImgMenu();
      this.renderImgSlider();
  }

  // RENDU IMAGE MENU ----------
  renderImgMenu() {
    this.menuListEl = this.el.querySelector(".image-menu");
    for (let image of this.images) {
      image.menuRender();


    }
  }

  // RENDU IMAGE SLIDE ----------
  renderImgSlider() {
    this.sliderListEl = this.el.querySelector(".image-slide");
    // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
    for (let image of this.images) {
      image.sliderRender();
    }
  }

}
