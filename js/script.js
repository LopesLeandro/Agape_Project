let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    }




// Fetch the text file
fetch('Website_text/sobre.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_sobre').innerHTML = text;
                });

// Fetch the text file
fetch('Website_text/Projetos.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_projetos').innerHTML = text;
                });
// Fetch the text file
fetch('Website_text/noticias.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_noticias').innerHTML = text; 
                });

// Fetch the text file
fetch('Website_text/Contato.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_contato').innerHTML = text;
                });

// Fetch the text file
fetch('Website_text/missao.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_missao').innerHTML = text;
                });

// Fetch the text file
fetch('Website_text/visao.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_visao').innerHTML = text;
                });

// Fetch the text file
fetch('Website_text/valores.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_valores').innerHTML = text;
                });

// Fetch the text file
fetch('Website_text/mensagem.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_mensagem').innerHTML = text;
                });

// Carrousel AUTO-NAVIGATION
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);