"use strict"

import Image from './Image';
import galleryTemplate from './templates/gallery';

export default class Gallery {
  constructor (data) { // new Gallery [el, images]
    this.el = document.querySelector(data.el); // propriété el du data
    // Pour transformer les objets en type images et leur mettre des méthodes
    this.images = [];
    // Lancement de la méthode de chargement des données
    this.loadImages(data.images);
    this.template = galleryTemplate;
    this.render(); // convention (affichage)
  }

  // Chargement des données
  loadImages (images) {
    for (let image of images) { // parcourt toutes les images
      this.images.push(new Image(image)); // les transforme en objet de type image
    }
  }
  render() {
    this.el.innerHTML = this.template;
  }
}
