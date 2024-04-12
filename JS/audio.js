var audio = document.getElementById("myAudio");

function playMusic() {
  audio.play();

}

function pauseMusic() {
  audio.pause();
}


function ativarAnimacao() {
  var box = document.getElementById('animatee');
  box.classList.add('img');
}

// Adicionando um event listener ao botão
var button = document.getElementById('myButton');
button.addEventListener('click', ativarAnimacao);