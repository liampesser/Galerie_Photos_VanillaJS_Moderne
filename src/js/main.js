"use strict"

import images from  './data.js';
import Gallery from './modules/Gallery.js';

// Instanciation d'un nouvel objet de type Gallery
new Gallery({
  el: '#app',
  images  // data -> nom du tiroir et variable identiques
});
