import Image from './Image';
import galleryTemplate from './templates/gallery';

export default class Gallery {
  // Récupération des données new Gallery [el, images]
  constructor (data) {
    this.el = document.querySelector(data.el); // propriété el du data
    this.sliderListEl;
    this.menuListEl;
    this.index = 0;
    this.timer = null;
    this.isPlaying = false;
    this.intervalTime = 2000;
    this.images = []; // Pour transformer les objets en type images et leur mettre des méthodes
    this.loadImages(data.images); // Lancement de la méthode de chargement des données
    this.template = galleryTemplate;
    this.galleryRender();
    this._displaySlide();
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
      this._activateButtons();
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
        this._displaySlide();
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

  // ACTIVATION DES BOUTONS ----------
  _activateButtons () {
    // Bouton previous
    this.el.querySelector('.previous').onclick = (e) => {
      this._previous();
    }
    // Bouton next
    this.el.querySelector('.next').onclick = (e) => {
      this._next();
    }
    // Bouton play
    this.el.querySelector('.play').onclick = (e) => {
      this._play();
    }
    // Bouton stop
    this.el.querySelector('.stop').onclick = (e) => {
      this._stop();
    }
  }

  // AFFICHAGE DE L'IMAGE DU SLIDER ----------
  _displaySlide () {
    this.h1 = this.el.querySelector('.slider-menu h1');
    this.sliderListEl.style.left = "-" + this.index + "00%";
    this.h1.innerText = this.images[this.index].alt;
  }

  // AFFICHAGE DE L'IMAGE PRECEDENTE ----------
  _previous () {
    this.index === 0
    ? this.index = this.images.length - 1
    : this.index -= 1;
    this._displaySlide();
  }

  // AFFICHAGE DE L'IMAGE SUIVANTE ----------
  _next () {
    this.index + 1 < this.images.length
    ? this.index += 1
    : this.index =0;
    this._displaySlide();
  }

  // DEFILEMENT DES IMAGES SELON UN INTERVALLE ----------
  _play() {
    this.isPlaying = true;
    this._toggleActiveClass();
    this.timer === null
      ? (this.timer = setInterval(() => {
          this._next();
        }, this.intervalTime))
      : this._stop();
  }

  // ARRET DU DEFILEMENT DES IMAGES ----------
  _stop () {
    this.isPlaying = false;
    this._toggleActiveClass();
    clearInterval(this.timer);
    this.timer = null;
  }

  // TOGGLE DE LA CLASSE ACTIVE DES BOUTONS PLAY ET STOP ----------
  _toggleActiveClass () {
    if (this.isPlaying === true) {
      this.el.querySelector('.play').classList.add('active');
      this.el.querySelector('.stop').classList.remove('active');
    }
    else {
      this.el.querySelector('.play').classList.remove('active');
      this.el.querySelector('.stop').classList.add('active');
    }
  }

}
