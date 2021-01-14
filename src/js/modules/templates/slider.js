// Template de l'image du slide

export default `
     <figure>
        <img src={{src}} alt={{alt}}>
        <figcaption>
           <a href="#" class="icon icon-info">
              <i class="material-icons">add_circle</i>
           </a>
           <div>{{content}}</div>
        </figcaption>
     </figure>
`;
