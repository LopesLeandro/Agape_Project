

// Fetch the text file
fetch('textos/sobre.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('texto_sobre').innerHTML = text;
                });