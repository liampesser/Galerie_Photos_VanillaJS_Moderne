import images  from './data';
import Gallery from './modules/Gallery';

// Instanciation d'un nouvel objet de type Gallery
new Gallery({
  el: '#app',
  images  // data -> nom du tiroir et variable identiques
});
