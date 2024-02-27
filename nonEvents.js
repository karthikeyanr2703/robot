let myAudio = document.getElementById("myAudio");

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    button1.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event5.html';
    });
    button2.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event6.html';
    });
    button3.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event7.html';
    });
    
});
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