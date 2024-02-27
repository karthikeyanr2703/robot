let myAudio = document.getElementById("myAudio");
let audio = document.getElementById("audio");
let icon = document.getElementById('icon'); 

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    button1.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './techEvents.html';
    });
    button2.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './nonEvents.html';
    });

});
function playSound(){
    myAudio.play()
    
}
playSound();
// Array of MP3 audio files
const audioFiles = [
    "Maamadura-Annakodi.mp3",
    "Rakita-Rakita.mp3",
    "Mallipoo-Vachi-Vachi.mp3",
    "Yethi-Yethi.mp3",
    "Naa-Ready-MassTamilan.dev.mp3",
    "Damaku-Damaku.mp3",
    "Aathangara-Orathil.mp3",
    "badass.mp3",
    "arjan.mp3",
    "missing.mp3",

  ];
  
  let currentAudioIndex = 0;
  const audioPlayer = document.getElementById('audioPlayer');
  
  function playAudios() {
    // Play the current audio
    audioPlayer.src = audioFiles[currentAudioIndex];
    audioPlayer.play();
  }
  
  function pauseResumeAudio() {
    
    

    if (audioPlayer.paused) {
        // If audio is paused, resume it
        audioPlayer.play();
        icon.className = 'ri-pause-fill';
        
    } else {
        // If audio is playing, pause it
        audioPlayer.pause();
        icon.className = 'ri-play-fill';
    }
}
  
  function playNext() {
    // Move to the next audio file
    currentAudioIndex++;
    // If reached the end of the array, start over
    if (currentAudioIndex >= audioFiles.length) {
      currentAudioIndex = 0;
    }
    // Play the next audio
    audioPlayer.src = audioFiles[currentAudioIndex];
    audioPlayer.play();
  }