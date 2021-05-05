(function(){
    "use strict";
    window.onload = function() {
        document.getElementById("btnStop").disabled = true;
        document.getElementById("btnStart").onclick = startAnimation;
        document.getElementById("btnStop").onclick = stopAnimation;
        document.getElementById("fontsize").onchange = changeSize;
        document.getElementById("lblBox").onclick = changeTurbo;
    }

    var counter = 0;
    var timerInterval;
    var delayMs = 250;
    var frames;
    var arrFrame;

    function startAnimation(){
        var animation = document.getElementById("animation");
        var ani_option = animation.options[animation.selectedIndex].value;
        frames = ANIMATIONS[ani_option];
        arrFrame = frames.split("=====\n");
        changeTurbo();

        changeSize();
        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
    }

    function stopAnimation(){
        window.clearInterval(timerInterval);
        document.getElementById("textArea").value = frames;
        document.getElementById("btnStart").disabled = false;
        document.getElementById("btnStop").disabled = true;
    }

    function changeSize(){
        var size = document.getElementById("fontsize");
        var size_option = size.options[size.selectedIndex].value;
        document.getElementById("textArea").style.fontSize = size_option;
    }

    function changeTurbo(){
        clearInterval(timerInterval);
        var isTurbo = document.getElementById("lblBox").checked;
        if(isTurbo){
            delayMs = 50;

        } else {
            delayMs = 250;
        }
        timerInterval = setInterval(animation_callback, delayMs);
    }

    function animation_callback(){
        if(counter >= arrFrame.length){
            counter = 0;
        }else {
            document.getElementById("textArea").value =  arrFrame[counter];
            counter++;
        }
    }
}())