let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    }

// Fetch the text file
fetch('textos/sobre.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_sobre').innerHTML = text;
                });