// Template de la galerie

export default `
<div data-slider="slider1">
   <div class="slider fullsize">
      <div class="slides">
         <ul style="width: 500%">
         </ul>
      </div>
         <div class="menu">
            <div class="slider-menu">
               <h1>Titre</h1>
               <ul class="slides">
                  <li>
                     <a href="#0" class="">
                        <img src="assets/slides/image1.jpg" alt="A cat game">
                     </a>
                  </li>

                  <li>
                     <a href="#1" class="">
                        <img src="assets/slides/image2.jpg" alt="Tatoo &amp; cat">
                     </a>
                  </li>

                  <li>
                     <a href="#2" class="">
                        <img src="assets/slides/image3.jpg" alt="Tatoo &amp; cat">
                     </a>
                  </li>

                  <li>
                     <a href="#3" class="">
                        <img src="assets/slides/image4.jpg" alt="Tatoo &amp; cat">
                     </a>
                  </li>

                  <li>
                     <a href="#4" class="">
                        <img src="assets/slides/image5.jpg" alt="Tatoo &amp; cat">
                     </a>
                  </li>
               </ul>
            </div>
         </div>
               <div class="navigation">
                  <div>
                     <ul class="navigation">
                        <li class="previous"><a href="#"><i class="material-icons">fast_rewind</i></a></li>
                        <li class="stop active"><a href="#"><i class="material-icons">pause_circle_filled</i></a></li>
                        <li class="play"><a href="#"><i class="material-icons">play_circle_filled</i></a></li>
                        <li class="next"><a href="#"><i class="material-icons">fast_forward</i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
`;
