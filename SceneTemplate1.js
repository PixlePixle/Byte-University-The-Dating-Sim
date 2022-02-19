var i = 0;
var speed = 25;
var loop = null;
var textBox = document.getElementById("animatedText");
var button = document.getElementById("Textbox");
var option1 = document.getElementById("Option1");
var option2 = document.getElementById("Option2");
var option3 = document.getElementById("Option3");
var option4 = document.getElementById("Option4");
var speaker = document.getElementById("nameHeader");
const txtArray = ["e2You crack your eyes open to a gentle sunrise filtering through your windows, illuminating your extraordinarily messy room.",
"e1<i>Argh, what time is it?</i> you wonder to yourself. You roll over and click your alarm off. The time reads 7:57 am.",
"t3…", 
"t3OH CRAP!", 
"t4You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door."];
txt = txtArray[0];

var choiceNumber = 0;
const choices = ["1", "2", "3", "4"];
var choiceIndex = 0;


/*  0 = you
    1 = Elliot
    2 = Taylor
    3 = ?? */

var first = 0;
var italicized = false;

function startAnimation() {
    
    if (first == 0) {
        first = 1;
        textBox.innerHTML = "";
        loop = setInterval(
            function textAnimation() {
                if (i < txt.length) {
                    if (i < 2) {
                        
                        if (txt.charAt(i) == 'e') {
                            
                            i++;
                            switch(txt.charAt(i)) {
                                case '0': 
                                changeImage('imgs/characters/Elliot/elliot blush normal.png');
                                break;
                                case '1': 
                                changeImage('imgs/characters/Elliot/elliot blush smile.png');
                                break;
                                case '2': 
                                changeImage('imgs/characters/Elliot/elliot cry.png');
                                break;
                                case '3': 
                                changeImage('imgs/characters/Elliot/elliot mad.png');
                                break;
                                case '4': 
                                changeImage('imgs/characters/Elliot/elliot smug.png');
                                break;
                                case '5': 
                                changeImage('imgs/characters/Elliot/elliot worried.png');
                                break;
                                case '6': 
                                changeImage('imgs/characters/Elliot/');
                                break;
                                case '7': 
                                changeImage('imgs/characters/Elliot/');
                                break;
                                case '8': 
                                changeImage('imgs/characters/Elliot/');
                                break;
                                case '9': 
                                changeImage('imgs/characters/Elliot/');
                                break;
                            }
                            i++;
                            speaker.innerText("Elliot");
                        } else if (txt.charAt(i) == 't') {
                            
                            i++;
                            switch(txt.charAt(i)) {
                                case '0': 
                                changeImage('imgs/characters/Taylor/taylor normal.png');
                                break;
                                case '1': 
                                changeImage('imgs/characters/Taylor/taylor confused low key offended.png');
                                break;
                                case '2': 
                                changeImage('imgs/characters/Taylor/taylor cry.png');
                                break;
                                case '3': 
                                changeImage('imgs/characters/Taylor/taylor flustered.png');
                                break;
                                case '4': 
                                changeImage('imgs/characters/Taylor/taylor focused.png');
                                break;
                                case '5': 
                                changeImage('imgs/characters/Taylor/taylor looking down.png');
                                break;
                                case '6': 
                                changeImage('imgs/characters/Taylor/taylor mad.png');
                                break;
                                case '7': 
                                changeImage('imgs/characters/Taylor/taylor blush smile.png');
                                break;
                                case '8': 
                                changeImage('imgs/characters/Taylor/taylor worried.png');
                                break;
                                case '9': 
                                changeImage('imgs/characters/Taylor/blood.png');
                                break;
                            }
                            i++;
                            speaker.innerText("Taylor)");
                        } else {
                            i += 2;
                        }
                    }


                    if(txt.charAt(i) == '<' && txt.charAt(i + 1) == 'i' && txt.charAt(i + 2) == '>') {
                        italicized = true;
                        i += 2;
                    } else if (txt.charAt(i) == '<' && txt.charAt(i + 1) == '/' && txt.charAt(i + 2) == 'i' && txt.charAt(i + 3) == '>') {
                        italicized = false;
                        i += 3;
                    } else if (!italicized) {
                        textBox.innerHTML += txt.charAt(i);
                    } else {
                        textBox.innerHTML += "<i>" + txt.charAt(i) + "</i>";
                    }
                    i++;
                } else {
                    stopAnimation();
                }
            }, speed);
    } else if (first == 1) {
        stopAnimation();
    } else;

}

var index = 1;

function stopAnimation() {
    clearInterval(loop);
    i = 0;

    textBox.innerHTML = txt.substring(2);
    italicized = false;
    first = 0;
    if (index < txtArray.length) {
        txt = txtArray[index];
        index++;
        
    } else {

        index = 0;
        first = 20;
        makeChoice();
    }
}

function makeChoice() {
    switch(choices.length) {
        case 1: 
        option1.style.display = "block";
        break;
        case 2:
        option1.style.display = "block";
        option2.style.display = "block";
        break;
        case 3:
        option1.style.display = "block";
        option2.style.display = "block";
        option3.style.display = "block";
        break;
        case 4:
        option1.style.display = "block";
        option2.style.display = "block";
        option3.style.display = "block";
        option4.style.display = "block";
        break;
    }
    choiceNumber = 0;
    option1.innerHTML = choices[choiceNumber++];
    option2.innerHTML = choices[choiceNumber++];
    option3.innerHTML = choices[choiceNumber++];
    option4.innerHTML = choices[choiceNumber++];
}

function Chosen(a) {
    switch(a) {
        case 1:

        break;
        case 2:

        break;
        case 3:

        break;
        case 4:

        break;
    }
}

function changeImage(a) {
    document.getElementById("SpriteRight").src=a;
}

