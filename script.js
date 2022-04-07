let gridBtn = document.querySelector('.grid');
const dropdown = document.querySelector('#dropdown');



gridBtn.addEventListener('click', ()=>{
    const visibility = dropdown.getAttribute('data-visible');
 
    if(visibility === 'false'){
        dropdown.setAttribute('data-visible', true);
        gridBtn.setAttribute('aria-expanded', true);
      } else{
        dropdown.setAttribute('data-visible', false);
        gridBtn.setAttribute('aria-expanded', false);
     }
})

//Blue on click
const all = document.getElementById('all');
const image = document.getElementById('images');

image.addEventListener('click', ()=>{
    image.classList.add('blue');
    all.classList.remove('blue');
})

