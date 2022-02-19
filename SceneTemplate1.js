var i = 0;
var speed = 75;
var txt = "testing ";
var loop = null;


function startAnimation() {
    loop = setInterval(
        function textAnimation() {
            if (i < txt.length) {
                document.getElementById("animatedText").innerHTML += txt.charAt(i);
                i++;
            } else {
                stopAnimation();
            }
        }, speed);
}



function stopAnimation() {
    clearInterval(loop);
    i = 0;
    document.getElementById("animatedText").innerHTML += "ENDED";
    document.getElementById("Textbox").removeChild;
    document.getElementById("Textbox").appendChild(startAnimation);
}