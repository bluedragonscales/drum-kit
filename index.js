const drums = {
    w: 'sounds/tom-1.mp3',
    a: 'sounds/tom-2.mp3',
    s: 'sounds/tom-3.mp3',
    d: 'sounds/tom-4.mp3',
    j: 'sounds/crash.mp3',
    k: 'sounds/snare.mp3',
    l: 'sounds/kick-bass.mp3'
}



// Add keydown listener to whole document.
document.addEventListener("keydown", function(event) {
    // Assign the event's key to the drums object to pass the correct sound file to the Audio object.
    let music = new Audio(drums[event.key]);
    music.play();

    let btn = document.querySelector(`.${event.key}`);
    btn.style.boxShadow = '0 0 5px 5px white';
});