import menuTemplate  from './templates/menu';
import sliderTemplate from './templates/slider';


// Tableau Json envoyé dans Gallery
// data: {
//   parent: Gallery,
//   image: {id: 1, src: './assets/slides/image1.jpg', alt: "A cat game", content: "Lorem ipsum dolor sit amet, consectetur"};
// }

export default class Image {
  constructor (data) {
    this.parent = data.parent;
    this.id = data.image.id;
    this.href = data.image.href;
    this.src = data.image.src;
    this.alt = data.image.alt;
    this.desc = data.image.desc;
    this.menuTemplate = menuTemplate;
    this.sliderTemplate = sliderTemplate;
    this.menuEl;
    this.sliderEl;
  }

  /**
   * [menuRender description]
   * @return {[type]} [description]
   */
  imageMenuRender () {
    for (let propriete in this) {
      this.menuTemplate = this.menuTemplate.replace('{{' + propriete + '}}', this[propriete]);
    }
    this.menuEl = document.createElement('li');
    this.menuEl.innerHTML = this.menuTemplate;
    this.parent.menuListEl.appendChild(this.menuEl);
  }

  imageSliderRender() {
    for (let propriete in this) {
      this.sliderTemplate = this.sliderTemplate.replace('{{' + propriete + '}}', this[propriete]);
    }
    this.sliderEl = document.createElement('li');
    this.sliderEl.classList.add("slide"); // class slide au nouveau élément li
    this.sliderEl.innerHTML = this.sliderTemplate;
    this._displayDesc();
    this.parent.sliderListEl.appendChild(this.sliderEl);
  }

  _displayDesc () {
    this.sliderEl.querySelector('.icon.icon-info').onclick = (e) => { // Active le click sur l'icône
      if (this.sliderEl.querySelector('.slide figcaption').style.right === '0%') {
        this.sliderEl.querySelector('.slide figcaption').style.right = '-20%';
        this.sliderEl.querySelector('.slide figcaption i').innerHTML = 'add_circle';
      }
      else {
        this.sliderEl.querySelector('.slide figcaption').style.right = '0%';
        this.sliderEl.querySelector('.slide figcaption i').innerHTML = 'remove_circle';
      }
    }
  }
}
