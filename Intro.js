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
var path = 0;
var txtArray = ["00BEEP. BEEP. BEEP. BEEP.","00You crack your eyes open. The time on your clock reads 7:57.",
"//OH CRAP!", 
"00You quickly run down, grab a piece of toast and shove it in your mouth, and run out the door.",
"00Today’s the first day at your new school, Byte University for the Gifted. You had been hoping to get to school early and make a good impression on your teachers, but now you have three minutes to get to school before the late bell rings.",
1, "00You’re running to school, sprinting down the final stretch when you turn around a corner and– ",
"00<i>BAM!</i>",
"T3You slam full speed into a girl, and several books spill from her arms. You notice the title of one of the textbooks:",
"00<i>“Introduction to Natural Language Processing and Machine Learning Techniques, by Dr.Byte.”</i>",
"00Wait a minute, that’s a class you’ll be taking this semester! This girl must go to the same university as you, and she must’ve been late for class this morning as well. And now, you’ve crashed into her and caused her to drop all of her books."];


var choices1 = ["“I’m so sorry! Let me help you with those.”", "“Watch where you’re going next time, you punk.”"];

var metTaylor = true;

var choice11 = ["T2You bend down and try to help her with her books, but she lets out a high-pitched yelp and kicks you in the side. You look at her, bewildered, before deciding to just leave and begin running to school again."];
var choice12 = ["T2You see her face scrunch up as a tear rolls down her face before you hear her making tiny little sobs. She bends down to pick her things up, shielding her face from you, and you begin running to school again."];

var choices = choices1;

var afterChoice1 = [2, "//You run into the classroom a second before the late bell rings. You scan the room, looking for any familiar face, and to your surprise, you spot a childhood friend of yours, Elliot Bane Morehead. Every single seat next to him is empty.",
"00You slide into a seat to the left of him and tap his shoulder. “I didn’t know you went to this school!” you say.",
"e0“What? Oh yea, I guess I do. Wait, do I know you from somewhere?”"];

var choices2 = ["Ellie, we lived next to each other for 14 years!”", "Uhh, I don’t think so? To my knowledge, we’ve never met."];
var choice21 = ["e0“Oh yea, I remember you! From fourth grade, right?”"];
var choice22 = ["e0“Oh. Weird. Well, whatever."];

var afterChoice2 = ["00Your exciting conversation is cut short by a stern-looking woman that slams the door loudly as she enters the room. You assume this must be your professor.",
"20Welcome to Introduction to the English Language. I am your professor, Mrs.Byte. Today we will begin the semester by--","//You can't help but fall asleep to the sultry sound of your professor's voice. When you wake up, the entire class has left, except for Elliot and the girl from this morning.","00You are packing up your things to go when the girl suddenly grabs your sleeve.",
"t5“Wait. Have…you ever…heard of…LeetCode?”",
"00<i>Who hasn’t,</i> you think to yourself. “Uh, I guess so?” you say.",
"T7You see the girl's eyes light up. She looks at you straight in the eyes for the first time today.",
"t7“Come to room 304 tonight at 8. My name's Taylor. I’ll be waiting.”",
"//And with that, she runs out of the classroom, forgetting one of her textbooks <i>(Introduction to Natural Language Processing)</i> on the desk. You are about to call out to her when Elliot walks in front of you and blocks your view.",
"e0“Hi. So, you’re like new to this school, and stuff, and like, you should definitely come to the Film Appreciation Club tonight. I’ll be there, and it’s hella chill. Like, hella hella chill. 8 tonight in this classroom. I gotta go, but I better see you there.”",
"//And with that, Elliot leaves.","00Well, now you have a decision to make. You know you don’t have plans tonight, so you might as well go to one. But which one?"];

var choices3 = ["At 8 PM, follow Taylor’s strange request", "At 8 PM, go to Film Appreciation Club"];
var choice31 = ["//You decide you might as well take the opportunity to return Taylor’s forgotten textbook, so you grab it from her desk and decide against the Film Appreciation Club."];
var choice32 = ["//You decide Film Appreciation Club sounds indeed like a ‘hella hella chill’ plan, and you decide against Taylor’s strange request as you leave the room."];
txt = txtArray[0];

var FilmAppreciationClub = [3,"00You walk into the classroom, and to your surprise, it’s completely empty. You wonder if you’ve gone to the right room, but you spot Elliot standing near the front of the room."
,"e1Yo, you made it. Knew you’d come. Welcome to the Byte University Film Appreciation Club.", "00You look around at the desolate classroom and notice a smirk on Elliot’s face.", "00“Uh…so I’m the first one here. I thought I’d be late,” you say."
, "e2“Well, uh it’s actually just you. There were some others. But they didn’t respect the art. Not like I do. So, as president, I kicked em out. Couldn’t handle it.”", "e1 “But hey, you’re here. So, welcome to Film Appreciation Club.”"
,"00“Uh, ok. So what’s the plan, O God of Film?” you say.", "e3“Well, since all the members of the club are here, I guess we can begin. Let’s start with something basic. You literally can’t get this wrong. What’s your favorite film?”"];

var choicesFilm1 = ["Pulp Fiction", "Interstellar", "The Social Network", "Despicable Me"];
var choicesFilm11 = ["E0You think for a moment. “Well, this movie’s pretty underground and stuff, but have you ever seen Pulp Fiction?”", "E1Elliot’s face immediately lights up in unbelievable joy."
, "00“You…your favorite movie is Pulp Fiction. This is unbelievable. You might…you might even have taste!”", "e0“Alright, this one should be a breeze for you. We’re going straight into movie analysis, so.”"];
var choicesFilm12 = ["00“Hmm…” You find yourself thinking for fairly long. “Oh, I got it. Interstellar! With Matthew Mcconaughey. Man, that movie is so good.”", "00Elliot seems to think about this for a moment, then nods his head."
,"00“Well, that’s acceptable, I guess. Certainly better choices. But you’ll learn soon.", "00 “Alright, well, we might as well just get into movie analysis.”"];
var choicesFilm13 = ["00“Hmmm…” You think for a good moment. “Ah, I know. Have you ever seen The Social Network? That might be my favorite. Jesse Eisenberg is so good, man.”", "00Elliot looks a little surprised for a moment."
, "e3“Oh. The Social Network? Well, I guess it kinda works? For a beginner.  You certainly have a lot to learn, but we’ll get to that soon enough. Why don’t we just get straight into movie analysis?”"];
var choicesFilm14 = ["00“Hmm…” You think for a moment. “Well, I really like, uh, Despicable Me. The minions are just so cute in that movie.”", "00Immediately, disgust comes into Elliot’s eyes.",
"e4“How…how did you get it wrong? That’s literally–what? Who are you?”", "00“Dude, I just think the minions are cute. You’re telling me you didn’t think the minions were cute?” you ask him."
, "00Elliot’s look of disgust morphs into a look of resigned disappointment.", "e2“That’s not the–whatever. Ok. Listen. We’re gonna have to fix this later. But let’s just go into movie analysis. This one’s even easier."];

var afterChoicesFilm1 = ["e4“You’ve seen The Wolf of Wall Street, right? Cmon.”"];

var choicesFilm2 = ["Of course I have!", "What's that? Is that an anime or something?"];
var choicesFilm21 = ["E0Elliot seems relieved at this answer.","E0'Oh thank God. You're redeemable after all. Maybe it isn't too late for you."];
var choicesFilm22 = ["E5Elliot looks absolutely frustrated with you.", "e5“Ah. Well. I honestly don’t–I don’t even know if we can fix you at this point.”"];
var afterChoicesFilm2 = ["00Elliot regains his composure and gestures around to the empty classroom.", "e0“Well. It’s uh, it’s tradition that new members have to watch a movie with the rest of the club. But since it's just you…”"
, "00He seems to ponder an idea for a second, then nod, as if coming to a solution.", "e0“Yup, we can make an exception for you. Unless, well. Unless you wanted to watch a movie. With me. Probably on the weekend? They’re showing some good stuff. Well, whatever. We can talk about this later.”"
, "E0Elliot leaves the room, but he stops in the doorway, swings around on one heel, and walks back to you.", "E0“You got a phone right? Sick. Alright. Here’s my number. Let me know if you wanna, I dunno, do anything. Or something.”"
, "//And with that, Elliot leaves the first meeting of Film Appreciation Club."];

var CodeAppreciationClub = [3,"//You walk into room 304, holding Taylor’s textbook to your chest. The room is dark, save for the light from a MacBook at the front of the room. Taylor sits in front of it, incredibly focused on the screen with an intensity that seems nothing like the girl you met earlier today.",
"T4“Hi,” you call out to her.","T3She looks at you and immediately blushes, looking at the ground.", "t5“Hi. Welcome to…the very first meeting…of LeetCode Appreciation Club.”",
"00Her voice is so quiet, you can barely make out the words. <i>LeetCode Appreciation Club?</i> You find yourself wondering whether coming here was really the better decision.", "00Without looking up, she pats the seat next to her. You make your way over and sit down, pulling your chair close enough to see her screen."
, "T5You hand her the forgotten textbook from earlier today. “You forgot this,” you say. She looks up and grabs the textbook from your hands quickly.", "t3 “.......thanks.”", "t5“Anyways…what do you think about LeetCode?”"];

var choicesCode1 = ["I love it! LeetCode is probably the best thing ever made!!!!!!", "Ehhh. Not my favorite thing in the world."];
var choicesCode11 = ["t0“Really?! This is the first time…I’ve met anyone else…besides me…”"];
var choicesCode12 = ["t8“Oh…well… it’s not for everyone…I guess.”"];
var afterChoicesCode1 = ["t5“Well anyways, do you want to do…a few problems? I mean, I’m not the best at them, but…if you’d like to…”",
"00Well, it’s the LeetCode Appreciation Club, right? Might as well do some LeetCode.", "t0“Great! So, we can start…well, we can start easy! What about…this one?”", "00She points to a problem labeled ‘easy’. You lean over and look at her screen. The title says ‘Two Sum’. You attempt to read the rest of the problem, but you find you can’t understand a single word. The problem is complete and utter technical gibberish to you.",
"t5“So…what do you think?”"];

var choicesCode2 = ["Oh, this is so easy! I could do this in my sleep!", "I actually…don’t understand it."];
var choicesCode21 = ["T8Taylor seems surprised. She looks at you for a second, then back at the problem.", "t8“Oh! Well…alright…then. Try it.”", "00You’re actually a little ashamed to have to admit you don’t have the slightest idea how to do it. You stare at the problem for a few minutes, feigning understanding, before conceding and admitting the fact you have absolutely no idea what is going on.",
"t5“Oh…well…you didn’t have to lie…I guess I can explain it.”"];
var choicesCode22 = ["t7“Ah! That’s totally fine. I actually…It took me a while to get, too! Don’t worry, we can…we can do it together!”"];
var afterChoicesCode2 = ["t4“Anyways, so the idea here is you have an array, which is basically just like a list of numbers...",
"00Taylor continues on with the explanation, and you struggle to catch even basic details. Did she just say something about a hashbrown...?",
"t0“Well…ok. That was a lot! I guess we can…we can conclude the first meeting of the LeetCode Appreciation Club!”", "t7“That was…fun! It was fun! Let’s do it again sometime, okay?”",
"//And with that, she quickly shoves her laptop in her bag and runs out of the room."];

endChoice = ["Thanks for playing!"];

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
    if (typeof txt == 'number') {
        switch(txt) {
            case 1:
                changeBack("url('imgs/backgrounds/park.png')");
                break;
            case 2:
                changeBack("url('imgs/backgrounds/classroom light.png')");
                break;
            case 3:
                changeBack("url('imgs/backgrounds/classroom dark.png')");
        }
        stopAnimation();
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
                            setTimeout(() => {document.getElementById("SpriteRight").style.display = 'flex';}, 50);
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
                                changeImage('imgs/characters/npc ms byte.png');
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
                            setTimeout(() => {document.getElementById("SpriteRight").style.display = 'flex';}, 50);
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
                                changeImage('imgs/characters/npc ms byte.png');
                            } else if (txt.charAt(i) == '/') {
                                document.getElementById("SpriteRight").style.display = 'none';
                                speaker.innerHTML = "";
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
    if (typeof txt != 'number') {
        textBox.innerHTML = txt.substring(2);
    }
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
    document.getElementById("SpriteLeft").style.filter = "blur(0px)";
    document.getElementById("SpriteRight").style.filter = "blur(0px)";
    document.getElementById("SpriteLeft").style.filter = "blur(0px)";
    document.getElementById("SpriteRight").style.filter = "blur(0px)";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    if(choicesMade == 0) {
        switch(a) {
            case 1:
                txtArray = choice11.concat(afterChoice1);
            break;
            case 2:
                txtArray = choice12.concat(afterChoice1);
            break;
        }
        choices = choices2;
    } else if (choicesMade == 1) {
        switch(a) {
            case 1:
                txtArray = choice21.concat(afterChoice2);
            break;
            case 2:
                txtArray = choice22.concat(afterChoice2);
            break;
        }
        choices = choices3;
    } else if (choicesMade == 2) {
        switch(a) {
            case 1:
                path = 1;
                txtArray = choice31.concat(CodeAppreciationClub);
                choices = choicesCode1;
                break;
            case 2:
                path = 2;
                txtArray = choice32.concat(FilmAppreciationClub);
                choices = choicesFilm1;
                break;
        }
    } else if (choicesMade == 3) {
        if (path == 2) {
            switch(a) {
                case 1: 
                    txtArray = choicesFilm11.concat(afterChoicesFilm1);
                    break;
                case 2:
                    txtArray = choicesFilm12.concat(afterChoicesFilm1);
                    break;
                case 3:
                    txtArray = choicesFilm13.concat(afterChoicesFilm1);
                    break;
                case 4:
                    txtArray = choicesFilm14.concat(afterChoicesFilm1);
                    break;
            }
            choices = choicesFilm2;
        } else {
            switch(a) {
                case 1:
                    txtArray = choicesCode11.concat(afterChoicesCode1);
                    break;
                case 2:
                    txtArray = choicesCode12.concat(afterChoicesCode1);
                    break;
            }
            choices = choicesCode2;
        }
    } else if (choicesMade == 4) {
        if (path == 2) {
            switch(a) {
                case 1:
                    txtArray = choicesFilm21.concat(afterChoicesFilm2);
                    break;
                case 2:
                    txtArray = choicesFilm22.concat(afterChoicesFilm2);
                    break;
            }
        } else {
            switch(a) {
                case 1:
                    txtArray = choicesCode21.concat(afterChoicesCode2);
                    break;
                case 2:
                    txtArray = choicesCode22.concat(afterChoicesCode2);
                    break;
            }
        }
        choices = endChoice;
    } else if (choicesMade == 5) {
        endGame();
        return;
    }
    choicesMade++;
    txt = txtArray[0];
    first = 0;
    startAnimation();
}

function changeImage(a) {
    document.getElementById("SpriteRight").src=a;
}

function changeBack(a) {
    document.getElementById("body").style.transition = "1s";
    document.getElementById("body").style.backgroundImage = a;
    document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
    document.getElementById("body").style.transition = "0";
}

function endGame() {
    document.getElementById("body").style.transition = "1s";
    document.getElementById("body").style.boxShadow = "0 0 0 10000px rgba(0,0,0,1)";
    document.getElementById("body").style.transition = "0";
    textBox.innerHTML = "Thanks for playing through this small demo of our game! We hope to be able to continue working on it even after the hackathon :)";
}

/* IDK JUST RUN CODE DOWN HERE WOOO! */
setTimeout(() => {button.style.display = "block";}, 1000);
