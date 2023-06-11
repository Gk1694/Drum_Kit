var arr = document.querySelectorAll("button");
// arr[0].addEventListener("click",function(){alert("I have been click.")});
// arr[1].addEventListener("click",function(){alert("I have been click.")});
// arr[2].addEventListener("click",function(){alert("I have been click.")});
// arr[3].addEventListener("click",function(){alert("I have been click.")});
// arr[4].addEventListener("click",function(){alert("I have been click.")});

for(var i = 0; i < 7; i++){
    arr[i].addEventListener("click",function(){
        // var audio = new Audio("./sounds/crash.mp3");
        // audio.play();
        var buttonInnerHtml = this.innerHTML;
        switch(buttonInnerHtml){
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom_1 = new Audio("./sounds/tom-1.mp3");
                tom_1.play();
                break;
            case "j":
                var tom_2 = new Audio("./sounds/tom-2.mp3");
                tom_2.play();
                break;
            case "k":
                var tom_3 = new Audio("./sounds/tom-3.mp3");
                tom_3.play();
                break;
            case "l":
                var tom_4 = new Audio("./sounds/tom-4.mp3");
                tom_4.play();
                break;
            default:
                console.log(buttonInnerHtml);
        }
        addAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keydown", function(event){
    var keypress = event.key;
    switch(keypress){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:
            console.log(keypress);
    }
    addAnimation(keypress);
});
function addAnimation(key){
    var activeKey = document.querySelector("."+key);
    activeKey.classList.add("pressed");
    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 0.100);
}