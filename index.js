function play_sound(key) {
    
    var sound_path = "./sounds/" + key + ".mp3"
    var audio = new Audio(sound_path);
    audio.play();

};

function buttonAnimation(key) {

    var pressedButton = document.querySelector("." + key);

    pressedButton.classList.add("pressed");

    setTimeout(
        function() {
            pressedButton.classList.remove("pressed");
        },
        100
    )
}

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfDrumButtons ; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",
     function(){
        play_sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        });

}

document.addEventListener("keypress",
 function(event) {
    play_sound(event.key);
    buttonAnimation(event.key);
    }
)