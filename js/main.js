// Array percorsi delle immagini
const img = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// Array titoli delle immagini
const title = [
    'Lorem',
    'Ipsum',
    'Dolor',
    'Sit',
    'Amet'
]

// Array descrizioni delle immagini
const description = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, enim.',
    'Id beatae eligendi quae optio eaque voluptas soluta animi. Illum possimus cum maiores incidunt esse distinctio illo.',
    'Sapiente consectetur mollitia nesciunt suscipit labore voluptatum amet?',
    'Veritatis similique doloremque corrupti odit! Ad.',
    'Debitis autem delectus distinctio consequatur excepturi a esse soluta nam!'
]

// Oggetti testo e descrizione
let showTitle = document.getElementById("title");
let showDesc = document.getElementById("description");

// Controlli slide
let forward = document.getElementById('down');
let backward = document.getElementById('up');

// Variabile che raccoglie tutti gli elementi
let slides = '';

// Aggiungere le slide al dom
for(let i = 0; i < img.length; i++) {

    slides+= `<div class="item">
                 <img src="${img[i]}" alt="prima immagine">
             </div>`

}

let itemsContainer = document.querySelector('.show-container');
itemsContainer.innerHTML = slides;
let previewContainer = document.querySelector('.preview-container');
previewContainer.innerHTML = slides;


let clicker = 0;
let showItems = document.querySelector('.show-container').getElementsByClassName('item');
let previewItems = document.querySelector('.preview-container').getElementsByClassName('item');
showItems[0].classList.add('active');
previewItems[0].classList.add('active');

forward.addEventListener('click',
    
    function(){


        clicker = clicker + 1;

        if(clicker == img.length) {
            clicker = 0;
        }

        if(clicker == 0) {
            showItems[img.length-1].classList.remove('active')
            previewItems[img.length-1].classList.remove('active')
        }else {
            showItems[clicker-1].classList.remove('active')
            previewItems[clicker-1].classList.remove('active')
        }
        showItems[clicker].classList.add('active');
        previewItems[clicker].classList.add('active');
        
        // debug
        console.log(clicker);
    }
);

backward.addEventListener('click',
    
    function(){

        if(clicker == 0) {
            clicker = img.length;
        }
        
        clicker = clicker -1;
        
        if(clicker == img.length-1) {
            showItems[0].classList.remove('active')
            previewItems[0].classList.remove('active')
        } else {
            showItems[clicker+1].classList.remove('active')
            previewItems[clicker+1].classList.remove('active')
        }

        showItems[clicker].classList.add('active');
        previewItems[clicker].classList.add('active');
        // debug
        console.log(clicker);
    }
);