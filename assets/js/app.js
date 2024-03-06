const textArea = document.querySelector('.apresentacao__conteudo__mensagem');
const mensagem = document.querySelector('.apresentacao__conteudo__mensagem__copiar');




// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


////---------------------------------------------------------------

 function btnEncriptar() {
     const textoEncriptado = encriptar(textArea.value);
     mensagem.value = textoEncriptado;
     textArea.value = '';


 }

function encriptar(stringEncriptada) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
     stringEncriptada = stringEncriptada.toLowerCase();

     for (let i = 0; i < matrizCodigo.length; i++) {
         if(stringEncriptada.includes(matrizCodigo[i][0])) {
             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }
     }

     return stringEncriptada;
 }


 function btnDesencriptar() {
     const textoDesencriptado = desencriptar(textArea.value);
     mensagem.value = textoDesencriptado;
     textArea.value = '';
 }

 function desencriptar(stringDesencriptada) {

     let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
     stringDesencriptada = stringDesencriptada.toLowerCase();

     for (let i = 0; i < matrizCodigo.length; i++) {
         if(stringDesencriptada.includes(matrizCodigo[i][1])) {
             stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
         }
     }

     return stringDesencriptada;
 }


 function copiar() {
    var textarea = document.getElementById('texto');

    if (textarea.value.trim() !== '') {    
    var texto = document.getElementById('texto');
    texto.select();
    document.execCommand('copy');
    
    document.getElementById('copyButton').textContent = 'Copiado';

    document.getElementById('copyButton').removeAttribute('onclick');

    document.getElementById('texto').addEventListener('click', resetButton);

    document.getElementById('copyButton').innerHTML += '<i class="fas solid fa-check" style="margin-left: 10px; color: green;"></i>';
    }
}


function resetButton(event) {
    if (document.getElementById('copyButton').textContent === 'Copiado') {

    document.getElementById('copyButton').textContent = 'Copiar';

    document.getElementById('copyButton').setAttribute('onclick', 'copiar()');

    document.getElementById("texto").removeEventListener('click', resetButton);

    document.getElementById('copyButton').innerHTML += '<i class="fa-solid fa-copy" style="margin-left: 10px"></i>';
    }
}

