// Injeta o menu toggle hamburguer em telas pequenas
document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("nav-toggle");
  });

// Garante que remova o submenu hamburguer quando a tela for maior
document.querySelectorAll(".navbar a").forEach(function(anchor) {
    anchor.addEventListener("click", function() {
      document.querySelector(".navbar").classList.remove("nav-toggle");
    });
  });


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
fetch('Website_text/princ_eventos.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_princ_eventos').innerHTML = text;
                });

// Fetch the text file
fetch('Website_text/doe.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_doe').innerHTML = text;
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