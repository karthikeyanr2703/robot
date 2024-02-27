let myAudio = document.getElementById("myAudio");
function playSound(){
    myAudio.play()
    
}
playSound();
function goToPage() {
    // Change "another_page.html" to the desired page URL
    window.location.href = "index.html";
}

// Event listener for icon click
document.getElementById("goToPage").addEventListener("click", goToPage);
