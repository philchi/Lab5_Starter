// expose.js

window.addEventListener('DOMContentLoaded', init);

var hornimg;
var hornsound;
var volumeImg;
const jsConfetti = new JSConfetti();

function init() {
  hornimg = document.querySelector('img[src="assets/images/no-image.png"]');
  hornsound = document.getElementsByClassName('hidden')[0];
  volumeImg = document.querySelector('#volume-controls img');

  hornsound.volume = .5;

  document.getElementById('horn-select').addEventListener('change', function() {
    let pickedValue = document.getElementById('horn-select').value;

    hornimg.setAttribute('src', 'assets/images/' + pickedValue + '.svg');
    hornimg.setAttribute('alt', pickedValue);

    hornsound.setAttribute('src', 'assets/audio/' + pickedValue + '.mp3');

  });

  document.getElementById('volume').addEventListener('input', function (e){
    let newVolume = e.target.value;
    let volumeIcon = document.getElementById('')
    let actualVolume = newVolume / 100;

    if (newVolume == 0) {
      volumeImg.setAttribute('src', 'assets/icons/volume-level-0.svg');
      volumeImg.setAttribute('alt', 'Muted Icon');
    } else if (newVolume >= 1 && newVolume < 33) {
      volumeImg.setAttribute('src', 'assets/icons/volume-level-1.svg');
      volumeImg.setAttribute('alt', 'Level 1 volume Icon');
    } else if (newVolume >= 33 && newVolume < 67) {
      volumeImg.setAttribute('src', 'assets/icons/volume-level-2.svg');
      volumeImg.setAttribute('alt', 'Level 2 volume Icon');
    } else if (newVolume >= 67) {
      volumeImg.setAttribute('src', 'assets/icons/volume-level-3.svg');
      volumeImg.setAttribute('alt', 'Level 3 volume Icon');
    }

    hornsound.volume = actualVolume;
    
  });

  document.querySelector('button').addEventListener('click', function() {
    hornsound.play();

    if (document.getElementById('horn-select').value == 'party-horn') {

      

      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#FFEA00', '#00FF00', '#ff85a1', '#fbb1bd', '#00FFFF',
        ],
        confettiNumber: 200
      })

    }


  })

}