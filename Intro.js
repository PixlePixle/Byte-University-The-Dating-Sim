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

var choices2 = ["Ellie, we lived next to each other for 14 years!", "Uhh, I don’t think so? To my knowledge, we’ve never met."]
var choice21 = ["e2Oh yea, you’re….uh…(player-name), right?"];
var choice22 = ["e2Oh. Weird. Well, whatever."];

var afterChoice2 = ["00Your exciting conversation is cut short by a stern-looking woman that slams the door loudly as she enters the room. You assume this must be your professor.",
"20Welcome to Introduction to the English Language. I am your professor, Mrs.Byte. This class will require a lot of cooperation and teamwork with your other classmates.",
"20“For this reason, we will be doing everyone’s favorite activity: icebreakers! With randomized partners!”",
"00A collective groan issues from the classroom. She begins calling out names and partnering them up randomly.",
"20“Aaaand…(player-name)!”",
"00You stand up and look at the professor. You realize just how incredibly scary she is when she looks at you. ",
"20“Why don’t we pair you with…Taylor! Could Taylor stand up please?”",
"00You scan the room, looking for who must be Taylor. And then, at the very back of the classroom, completely alone, you spot her: the girl from this morning, standing up meekly.",
"00Mrs.Byte nods and continues reading the names while Taylor makes her way down the classroom to sit next to you. She plops down into the seat on the right of you and stares down at the ground, fidgeting.",
"00“Sooooo…sorry about this morning. Glad you made it to class on time, though,” you venture to say. ",
"00“....whatever…”",
"00In the time it took for her to utter this one word, the class had already ended. You are packing up your things to go when she suddenly grabs your sleeve.",
"00“have you ever…heard of…leetcode?”",
"00<i>Who hasn’t,</i> you think to yourself. “Uh, I guess so?” you say.",
"00You see Taylor’s eyes light up. She looks at you straight in the eyes for the first time today.",
"00“Come to room 304 tonight at 8. I’ll be waiting.”",
"00And with that, she runs out of the classroom, forgetting one of her textbooks <i>(Introduction to Natural Language Processing)</i> on the desk. You are about to call out to her when Elliot walks in front of you and blocks your view.",
"00",
"00Elliot: “Hi, (player-name). So, you’re like new to this school, and stuff, and like, you should definitely come to the Film Appreciation Club tonight. I’ll be there, and it’s hella chill. Like, hella hella chill. 8 tonight in this classroom. I gotta go, but I better see you there.” And with that, Elliot leaves.",
"00Well, now you have a decision to make. You know you don’t have plans tonight, so you might as well go to one. But which one?"];

var choices3 = ["At 8 PM, follow Taylor’s strange request", "At 8 PM, go to Film Appreciation Club"];
var choice31 = ["00You decide you might as well take the opportunity to return Taylor’s forgotten textbook, so you grab it from her desk and decide against the Film Appreciation Club."];
var choice32 = ["You decide Film Appreciation Club sounds indeed like a ‘hella hella chill’ plan, and you decide against Taylor’s strange request as you leave the room."];
txt = txtArray[0];

var choiceNumber = 0;

var choicesMade = 0;

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
    if (first == 0 && (index == 5 || index == 6 || index == 8) && choicesMade == 0) {
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
    if (first == 0 && index == 2 && choicesMade == 1) {
        if (index == 2) {
            document.getElementById("body").style.backgroundImage = "url('imgs/backgrounds/bedroom_morning_background fixed.png')";
            document.getElementById("body").style.transition = "1.5s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
            document.getElementById("body").style.transition = "0";
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
                            } else if (txt.charAt(i) == '2') {
                                speaker.innerHTML = "Byte";
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
        index = 1;
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
    if(choicesMade == 0) {
        switch(a) {
            case 1:
            document.getElementById("SpriteLeft").style.filter = "blur(0px)";
            document.getElementById("SpriteRight").style.filter = "blur(0px)";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            txtArray = choice11.concat(afterChoice1);
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
            break;
            case 2:
            document.getElementById("SpriteLeft").style.filter = "blur(0px)";
            document.getElementById("SpriteRight").style.filter = "blur(0px)";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            txtArray = choice12.concat(afterChoice1);
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
            break;
        }
        choices = choices2;
    } else if (choicesMade == 2) {
        switch(a) {
            case 1:
            document.getElementById("SpriteLeft").style.filter = "blur(0px)";
            document.getElementById("SpriteRight").style.filter = "blur(0px)";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            txtArray = choice21.concat(afterChoice2);
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
            break;
            case 2:
            document.getElementById("SpriteLeft").style.filter = "blur(0px)";
            document.getElementById("SpriteRight").style.filter = "blur(0px)";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            txtArray = choice22.concat(afterChoice2);
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
            break;
        }
    } else {
        switch(a) {
            case 1:
            document.getElementById("SpriteLeft").style.filter = "blur(0px)";
            document.getElementById("SpriteRight").style.filter = "blur(0px)";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            txtArray = choice21.concat(afterChoice2);
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
            break;
            case 2:
            document.getElementById("SpriteLeft").style.filter = "blur(0px)";
            document.getElementById("SpriteRight").style.filter = "blur(0px)";
            option1.style.display = "none";
            option2.style.display = "none";
            option3.style.display = "none";
            option4.style.display = "none";
            txtArray = choice22.concat(afterChoice2);
            document.getElementById("body").style.transition = "1s";
            document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
            document.getElementById("body").style.transition = "0";
            break;
        }
    }
    choicesMade++;
    txt = txtArray[0];
    first = 0;
    index = 1;
    startAnimation();
}

function changeImage(a) {
    document.getElementById("SpriteRight").src=a;
}

/* IDK JUST RUN CODE DOWN HERE WOOO! */
setTimeout(() => {button.style.display = "block";}, 1000);
