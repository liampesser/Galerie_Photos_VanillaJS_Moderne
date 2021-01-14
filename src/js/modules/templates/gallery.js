// Template de la galerie

export default `
  <div data-slider="slider1">
     <div class="slider fullsize">
        <div class="slides">
           <ul style="width: 500%" class="image-slider">

              <!-- IMAGE DU SLIDE -->

           </ul>
        </div>
        <div class="menu">
           <div class="slider-menu">
             <h1>Titre</h1>
             <ul class="slides image-menu">

                <!-- IMAGES DU MENU -->

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
