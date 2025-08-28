
//Select all keys 
const keys = document.querySelectorAll('.key');

// -- Watchers -- //
//Add an event Watcher to all keys
keys.forEach((key)=> {
    key.addEventListener('click', () => playNote(key));
});

// -- Writers -- // 
function playNote(key) {
    // Get the note's letter value
    const noteAudio = document.getElementById(key.dataset.note);

    // Reset the note's current time to 0
    noteAudio.currentTime = 0;

    // Playing notes 
    noteAudio.play();

    // Styling purposes. 
    key.classList.add('active');

    //Listen for when the sound has ended.
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });

}
