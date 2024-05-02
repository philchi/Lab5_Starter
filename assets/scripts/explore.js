// explore.js

window.addEventListener('DOMContentLoaded', init);

const select = document.getElementById('voice-select');
const img = document.querySelector('img');
let speaking = false;
let voices = [];

function populateVoices() {
  voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    select.appendChild(option);
  }
}

function init() {
  // TODO
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  document.querySelector('button').addEventListener('click', function() {
    let newSpeech = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value)

    newSpeech.onstart = () => {img.setAttribute('src', 'assets/images/smiling-open.png');}
    newSpeech.onend = () => {img.setAttribute('src', 'assets/images/smiling.png');}
    const selectedOption = select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        newSpeech.voice = voices[i];
      }
    }
    
    speechSynthesis.speak(newSpeech);
  });

}