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
var txtArray = ["00You crack your eyes open to a gentle sunrise filtering through your windows, illuminating your extraordinarily messy room.",
"00<i>Argh, what time is it?</i> you wonder to yourself. You roll over and turn your alarm off. The time reads 7:57 am.",
"11…", 
"11OH CRAP!", 
"00You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door.",
"00Today’s the first day at your new school, Byte University for the Gifted. You had been hoping to get to school early and make a good impression on your teachers, but now you have three minutes to get to school before the late bell rings.",
"00You’re running to school, sprinting down the final stretch when you turn around a corner and– ",
"T2<i>BAM!</i>",
"00You slam full speed into a girl, and you see several books spill from her arms. You notice the title of one of the textbooks:",
"00<i>“Introduction to Natural Language Processing and Machine Learning Techniques, by Dr.Byte.”</i>",
"00Wait a minute, that’s a class you’ll be taking this semester! This girl must go to the same university as you, and she must’ve been late for class this morning as well. And now, you’ve crashed into her and caused her to drop all of her books."];


var choices1 = ["“I’m so sorry! Let me help you with that.”", "“Watch where you’re going next time.”"];

var metTaylor = false;

var choice11 = ["00You bend down and try to help her with her books, but she lets out a high-pitched yelp and kicks you in the side. You look at her, bewildered, before deciding to just leave and begin running to school again."];
var choice12 = ["00You see her face scrunch up as a tear rolls down her face before you hear her making tiny little sobs. She bends down to pick her things up, shielding her face from you, and you begin running to school again."];

var choices = choices1;

var afterChoice1 = ["E0You run into the classroom a second before the late bell rings. You scan the room, looking for any familiar face, and to your surprise, you spot a childhood friend of yours, Elliot Bane Morehead. Every single seat next to him is empty.",
"11You slide into a seat to the left of him and tap his shoulder. “I didn’t know you went to this school!” you say.",
"e1“What? Oh yea, I guess I do. Wait, do I know you from somewhere?”"];


txt = txtArray[0];

var choiceNumber = 0;

var choiceIndex = 0;

document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";

var index = 1;


var first = 0;
var italicized = false;
var wakeup = false;
function startAnimation() {
    if (!wakeup) {
        document.getElementById("body").style.transition = "1s";
        document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
        document.getElementById("body").style.transition = "0";
        wakeup = true;
    }
    if (first == 0 && (index == 5 || index == 6 || index == 8)) {
        if (index == 5) {
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
        } else if (index == 6) {
            document.getElementById("body").style.backgroundImage = "url('imgs/backgrounds/pink thingy.jpg')";
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
            document.getElementById("body").style.transition = "0";
        } else if (index == 8) {
            document.getElementById("SpriteRight").style.display = "flex";
        }
    }
    if (first == 0) {
        first = 1;
        textBox.innerHTML = "";
        loop = setInterval(
            function textAnimation() {
                if (i < txt.length) {

                    if (i < 2) {
                        
                        if (txt.charAt(i) == 'e' || txt.charAt(i) == 'E') {
                            
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
                            if (txt.charAt(i-2) != 'E') {
                                speaker.innerHTML = "Elliot";
                            }
                        } else if (txt.charAt(i) == 't' || txt.charAt(i) == 'T') {
                            
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
                            if (metTaylor && txt.charAt(i-2) != 'T') {
                                speaker.innerHTML = "Taylor";
                            } else if (txt.charAt(i-2) != 'T') {
                                speaker.innerHTML = "?????";
                            }
                        } else {
                            if (txt.charAt(i) == '0') {
                                speaker.innerHTML = "";
                            } else if (txt.charAt(i) == '1') {
                                speaker.innerHTML = "You";
                            }
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
    document.getElementById("SpriteLeft").style.filter = "blur(8px)";
    document.getElementById("SpriteRight").style.filter = "blur(8px)";
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

function chosen(a) {
    switch(a) {
        case 1:
        document.getElementById("SpriteLeft").style.filter = "blur(0px)";
        document.getElementById("SpriteRight").style.filter = "blur(0px)";
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        txtArray = choice11.concat(afterChoice1);
        break;
        case 2:
        document.getElementById("SpriteLeft").style.filter = "blur(0px)";
        document.getElementById("SpriteRight").style.filter = "blur(0px)";
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        txtArray = choice12.concat(afterChoice1);
        break;
        case 3:
        document.getElementById("SpriteLeft").style.filter = "blur(0px)";
        document.getElementById("SpriteRight").style.filter = "blur(0px)";
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        txtArray = choice11.concat(afterChoice1);
        break;
        case 4:
        document.getElementById("SpriteLeft").style.filter = "blur(0px)";
        document.getElementById("SpriteRight").style.filter = "blur(0px)";
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
        option4.style.display = "none";
        txtArray = choice11.concat(afterChoice1);
        break;
    }
    txt = txtArray[0];
    stopAnimation();
    startAnimation();
}

function changeImage(a) {
    document.getElementById("SpriteRight").src=a;
}

/* IDK JUST RUN CODE DOWN HERE WOOO! */
setTimeout(() => {button.style.display = "block";}, 1000);
