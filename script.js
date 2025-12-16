const gameArea = document.getElementById("gameArea");
const htmll = document.html;
const newPar ="         ";

let strength = 0;
let intelligence = 0;
let charisma = 0;
let creativity = 0;

let techSkills = false;
let talkedOthers = false;

let foughtGuards = false;

let viewmode = "light";

let HP = 100;
let energy = 30;
let timeRemaining = 60;//In minutes
let karma = 0;
let items = [];
let party = [];

let job = ""; 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function crossOutOption(optId) {
    document.getElementById("opt"+optId).style.textDecoration = "line-through";
    document.getElementById("opt"+optId).style.color = "black";
    if (viewmode=="dark") {
        document.getElementById("opt"+optId).style.color = "white";
    }
    document.getElementById("opt"+optId).style.pointerEvents = "none";
    document.getElementById("opt"+optId).onclick = "";
}

gameArea.style.whiteSpace = "pre-wrap";
window.onload = function() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    WindowPixels = viewportHeight * viewportWidth;
    intendedWindowSize = 1920 * 1080;

    console.log("Viewport Size: " + viewportWidth + "x" + viewportHeight);
    console.log(Math.sqrt((WindowPixels / intendedWindowSize)));
    

    const bodyZoom = Math.sqrt((WindowPixels / intendedWindowSize));
    this.document.body.style.zoom = bodyZoom;


    const viewer = (120/bodyZoom) + "vh";
    gameArea.style.minHeight = viewer;


}

balls
function gameAreaFadeOut() {
    
    introFade3 = setInterval(FadeIn, 16.666667);
    
    opac = -0
    faded = false;
    function FadeIn() {
        
        if (opac >= 1) {
            
            clearInterval(introFade3);
            faded = true


        } else {
            opac-=0.001666666667; 
            gameArea.style.opacity = opac; 
        }
    }  

}

function gameAreaFadeIn() {
    introFade3 = setInterval(FadeIn, 16.6666667);
    opac = -0
    faded = false;
    function FadeIn() {
        
        if (opac >= 1) {
            
            clearInterval(introFade3);
            faded = true


        } else {
            opac+=0.016666667; 
            gameArea.style.opacity = opac; 
        }
    }        
}



function createStage(titleName, stageDesc, opt1, opt1Choice, opt2, opt2Choice, opt3 = "none", opt3Choice = "none", opt4 = "none", opt4Choice = "none", opt5 = "none", opt5Choice = "none", opt6 = "none", opt6Choice = "none", opt7 = "none", opt7Choice = "none") {
    document.getElementById("HP").innerHTML = "HP: " + HP+" / 100";
    document.getElementById("Energy").innerHTML = "Energy: " + energy+" / 100";
    document.getElementById("titleName").innerHTML = titleName;
    sleep(1000)
    gameAreaFadeIn();
    try {
        document.getElementById("stageText").remove();
        for (i = 0; i < 7; i++) {
            console.log(i);
            j = i+1
            document.getElementById("opt"+j).remove();
            document.getElementById("br"+j).remove();
        }
    } catch (e) {

    }
    let itemText;
    try {
        itemText = "Items: ";
        for (i = 0; i < items.length; i++) {
            itemText += items[i] + ", ";
        }
        if (items.length == 0) {
            itemText += "None";
        } else {
            itemText = itemText.slice(0, -2);
        }
    } catch (e) {

    }
    document.getElementById("Items").innerHTML = itemText;

    stageText = document.createElement("p"); 
    stageText.setAttribute("id", "stageText");
    node = document.createTextNode(stageDesc);
    stageText.appendChild(node);

    gameArea.appendChild(stageText);

    opt1But = document.createElement("a");
    opt1But.setAttribute("id", "opt1");
    opt1But.setAttribute("onclick", opt1Choice);
    node = document.createTextNode(opt1);
    opt1But.appendChild(node);

    gameArea.appendChild(opt1But);

    optBr = document.createElement("br")
    optBr.setAttribute("id", "br1")

    gameArea.appendChild(optBr);

    opt1But = document.createElement("a");
    opt1But.setAttribute("id", "opt2");
    opt1But.setAttribute("onclick", opt2Choice);
    node = document.createTextNode(opt2);
    opt1But.appendChild(node);

    gameArea.appendChild(opt1But);
    optBr = document.createElement("br")
    optBr.setAttribute("id", "br2")

    gameArea.appendChild(optBr);

    if (opt3 != "none") {
        opt1But = document.createElement("a");
        opt1But.setAttribute("id", "opt3");
        opt1But.setAttribute("onclick", opt3Choice);
        node = document.createTextNode(opt3);
        opt1But.appendChild(node);

        gameArea.appendChild(opt1But);
        optBr = document.createElement("br")
        optBr.setAttribute("id", "br3")

        gameArea.appendChild(optBr);

    }

    if (opt4 != "none") {
        opt1But = document.createElement("a");
        opt1But.setAttribute("id", "opt4");
        opt1But.setAttribute("onclick", opt4Choice);
        node = document.createTextNode(opt4);
        opt1But.appendChild(node);

        gameArea.appendChild(opt1But);
        optBr = document.createElement("br")
        optBr.setAttribute("id", "br4")

        gameArea.appendChild(optBr);

    }

    if (opt5 != "none") {
        opt1But = document.createElement("a");
        opt1But.setAttribute("id", "opt5");
        opt1But.setAttribute("onclick", opt5Choice);
        node = document.createTextNode(opt5);
        opt1But.appendChild(node);

        gameArea.appendChild(opt1But);
        optBr = document.createElement("br")
        optBr.setAttribute("id", "br5")

        gameArea.appendChild(optBr);

    }

    if (opt6 != "none") {
        opt1But = document.createElement("a");
        opt1But.setAttribute("id", "opt6");
        opt1But.setAttribute("onclick", opt6Choice);
        node = document.createTextNode(opt6);
        opt1But.appendChild(node);

        gameArea.appendChild(opt1But);
        optBr = document.createElement("br")
        optBr.setAttribute("id", "br6")

        gameArea.appendChild(optBr);

    }

    if (opt7 != "none") {
        opt1But = document.createElement("a");
        opt1But.setAttribute("id", "opt7");
        opt1But.setAttribute("onclick", opt7Choice);
        node = document.createTextNode(opt7);
        opt1But.appendChild(node);

        gameArea.appendChild(opt1But);
        optBr = document.createElement("br")
        optBr.setAttribute("id", "br7")

        gameArea.appendChild(optBr);

    }

}


const StartText = newPar+ `You've got a big project due at work, and you've been working really hard on it. This project really shows who you are and you can't wait to present it to your superiors. Remind me, what do you do for a living again?`
//createStage("hi!", 1, "balls()", 3, 4, 5, 6, 7, 8);
balls()
function balls() {
    gameAreaFadeOut();
    
    createStage("2130 Hours", StartText, "What?", "explainJob()", "I'm an engineer", "chooseJob(1)", "I'm a soldier", "chooseJob(2)", "I'm a businessman", "chooseJob(3)", "I'm an inventor", "chooseJob(4)", "I'm a farmer", "chooseJob(5)");
    document.getElementById("gameImage").src = "Images/ProjectImage.jpg";


    //createStage("0730 Hours", StartText, "What?", "explainJob()", 3, 4, 5, 6, 7, 8);

}

function explainJob() {
    gameAreaFadeOut();
    document.getElementById("gameImage").src = "Images/JobSelection.jpeg";
    text = newPar+ "Picking your job will influence what skills you have. The different jobs have different strengths and weaknesses. Some of them mean you are strong in different ways, but you will lack certain abilities that will help you in the game. This can't be changed during a playthrough! The Engineer and Inventor have high technical skills, allowing them to solve things quickly. However, they are weaker and not very social. The businessman is smart and very charismatic, but lacks strength and creativity. The soldier is very strong and somewhat charismatic, but is not as intelligent or creative. The farmer is strong, intelligent enough, but slightly less charismatic and uncreative. Choose wisely!";
    createStage("0730 Hours", text, "Understood", "balls()", "","")
}

function chooseJob(jobid) {
    gameAreaFadeOut();
    switch (jobid) {
        case 1: 
        job = "Engineer";
        techSkills = true;
        charisma = 3;
        strength = 3;
        intelligence = 8;
        creativity = 6;
        break;
        case 2: 
        job = "Soldier";
        charisma = 5;
        strength = 10;
        intelligence = 3;
        creativity = 2;
        break;
        case 3: 
        job = "Businessman";
        charisma = 10;
        strength = 1;
        intelligence = 6;
        creativity = 3;
        break;
        case 4: 
        job = "Inventor"
        techSkills = true;
        charisma = 0;
        strength = 0;
        intelligence = 10;
        creativity = 10;
        break;
        case 5: 
        job = "Farmer"
        techSkills = true;
        charisma = 3;
        strength = 7;
        intelligence = 6;
        creativity = 4;
        break;
    }   
    stageText = newPar +"Right, you're a " + job + ". You've been writing this project for weeks now, and you're about to finish it tonight. You feel pretty tired, but you're happy to be almost done. Then you heard a sound. CRASH! Something just broke in the other room of your house. What do you do?";
    document.getElementById("Job").innerHTML = "Job: " + job;
    if (job=="Engineer" || job=="Inventor") {
        stageText = newPar +"Right, you're an " + job + ". You've been writing this project for weeks now, and you're about to finish it tonight. You feel pretty tired, but you're happy to be almost done. Then you heard a sound. CRASH! Something just broke in the other room of your house. What do you do?";
    }
    createStage("2130 Hours", stageText, "Investigate the noise", "Kidnapped(1)", "Ignore it and continue working", "Kidnapped(2)"); 
    document.getElementById("gameImage").src = "Images/BrokenWindow.jpeg";
}   

function Kidnapped(option) {
    gameAreaFadeOut();
     document.getElementById("gameImage").src = "Images/Black.jpeg";
    stageText = "";
    switch (option) {
        case 1:
        stageText = newPar +"You decide to investigate the noise. You cautiously walk into the other room, where you see two large men armed with pistols. Before you can react, both of them point gun at you. Is this the end? You're hit with the dart, and the world suddenly gets blurry... You're fading...";
        break;
        case 2:
        stageText = newPar +"You decide to ignore the noise and continue working on your project. After a few minutes, you hear footsteps approaching you from behind. You turn your head to look, but someone hits you on the back of your head. You fall to the ground, unconscious...";
        break;
    }
    energy = 100;
    createStage("2135 Hours", stageText, "...", "StartGame()", "", "");
}

function StartGame() {
    
    timeRemaining = 60;
    gameAreaFadeOut();
    document.getElementById("gameImage").src = "Images/GrayRoom.jpeg";
    stageText = newPar+"You're woken by the cold feel of the ground. You've landed face first after the guards threw you in. They stand at the gates and are primed to close it. You look up and around the room. 15, 20ish people. Then you look to the door, only to see a man in a suit, towering over you.\n\n" + newPar+`"Welcome everybody... I would like to personally thank you for coming here today. You have been... selected. And you have a test to complete. These doors will soon be sealed, and soon, in exactly one hour from now, poisonous gases will fill the room. But you will have a chance. There is a way out of the room. Escape this room, and you will be granted with the opportunity to escape this facility. Good luck."\n\n`+"The man turns and signals to his guards to lock the doors. You're really close to them and they aren't paying attention to you. Maybe you could get aggressive and take them down. Or maybe it's best not to risk it?";

    createStage(timeRemaining+" Minutes Left", stageText, "Man in the Suit?", "explainSuit()", "Fight", "FightGuards()", "Wait and find a way out", "Vent()", "Talk to others", "TalkOthers()"); 
}

function StartGame2() {
    gameAreaFadeOut();
    console.log(foughtGuards);
    document.getElementById("gameImage").src = "Images/GrayRoom.jpeg";
    stageText = newPar+"You still have time to maybe fight your way out of here. You need to make a choice, quickly. What do you do?";

    if (foughtGuards==true) {
        stageText = newPar+"You've tried fighting and failed. You need to figure a way out of here. You need to make a choice, quickly. What do you do?";
    }
    
    createStage(timeRemaining+" Minutes Left", stageText, "Man in the Suit?", "explainSuit()", "Fight", "FightGuards()", "Wait and find a way out", "Vent()", "Talk to others", "TalkOthers()"); 
    if (foughtGuards==true) {

        crossOutOption(2);
    }
}

function Vent() {
    energy -= 3;
    gameAreaFadeOut();
    timeRemaining -=3;
    stageText = newPar+"You decide to look for a way out on your own. You start searching around the room and notice a crack in the wall near the ceiling. You can't get there on your own, so you grab someone from the crowd and ask them quietly for help. He gives you a lift and you're in the vent! It seems to lead someplace else in the facility. Perhaps this is where the gas is coming from? You look down and see the guy who helped you waving his arms to be helped. You could move on on your own... Or you could help him. Or you could get everyone out through the vent. What do you do?";
    createStage(timeRemaining+" Minutes Left", stageText, "Move on alone", "MoveOnAlone()", "Help the guy", "HelpGuyVent()", "Get everyone out", "GetEveryoneOutVent()");
}


function MoveOnAlone() {
    gameAreaFadeOut();
    timeRemaining -= 2;
    stagetext = newPar+"You ignore his calls and decide to move on your own. You don't have time to waste on other people. You crawl through the vent for a few minutes until you reach a junction. You've escaped the room, but you still need to get out of the facility."
}

function TalkOthers() {
    gameAreaFadeOut();
    talkedOthers = true;
    timeRemaining -= 3;
    if (charisma >= 5) {
        timeRemaining -= 2;
        stageText = newPar+"You approach a few people and start talking to them. They seem scared, but you manage to calm them down. While the others freak out, the group of you check around the room for a solution. After a few minutes of searching, one of the people finds some text engraved on the wall. It seems to be a clue. There's a keypad to enter a code that can open the door. There's a safe in the corner of the room. After some debating, you've concluded on what the code could be. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Try opening the safe", "TrySafe()", "Try opening the door", "TryDoor()", "Look for another way", "Vent()");
    } else if (intelligence >= 7) {
        items.push("Gun");
        stageText = newPar+"You approach a few people and try talking to them, but they're panicking and you know you don't have time for that. You begin to work alone and notice a safe in the back of the room. It's a fairly old safe that you would imagine would be easy to open. You put your ear up close to the safe, and after a few minutes, you hear some clicks and the door pops open. Inside the safe, there is a gun. Why would that be in there? You quickly pocket it before anyone notices. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Continue to investigate", "ContinueInvestigate()", "Look for another way", "Vent()");
    }  else {
        stageText = newPar+"You try to approach a few people and talk to them, but they're panicking and you don't know what to do. You feel useless as you stand there while everyone else is freaking out. After a few minutes, you snap out of it and realize you need to find a way out of here. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Look for another way", "Vent()", "Wait", "WaitForPeople()");
    }
    stageText = newPar+""
}

function explainSuit() {
    gameAreaFadeOut();
    document.getElementById("gameImage").src = "Images/SuitGuy.jpg";
        stageText = newPar+"The man in the suit seems to be the leader of this operation. You don't remember the face, but you know you've seen him before. You try not to think about it too much, as you don't have a lot of time to find a solution.";

    if (intelligence >= 5) {
        stageText = newPar+"The man in the suit seems to be the leader of this operation. You don't remember the face, but you knwo you've seen him before. He was on the headlines. You believe that he has had his conflicts with the government before. You wonder what the big picture of this could be... What could this be about? You try not to think about it too much, as you don't have a lot of time to find a solution.";
    }
    createStage(timeRemaining+" Minutes Left", stageText, "Understood", "StartGame2()", "", "");
}

function FightGuards() {
    energy -= 10;
    gameAreaFadeOut();
    foughtGuards = true;
    timeRemaining -= 1;
    if (strength >= 7) {
        document.getElementById("gameImage").src = "Images/FightSuccess.jpg";
        stageText = newPar+"You tackle one of the guards, catching him off gurad. The door slams shut as the other guard turns to help fight you off, but you quickly knock him to the ground as you bash your hands into the first guard's face. The second guard calls for help, and you can hear footsteps running towards you. Shit. You think there are about 4 more on their way, and you need to act fast. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Keep Fighting", "Fight2()", "Run", "RunFromGuards()", "Surrender", "Surrendered1()");
    } else {
        HP-=10; 
        stageText = newPar+"You tried to tackle one of the guards, but you were promptly attacked by both guards. It hurts like hell, and you're stuck in the same situation you were a minute a go. Dammit. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Man in the Suit?", "explainSuit()", "Fight", "", "Wait and find a way out", "Vent()", "Talk to others", "TalkOthers()"); 
        crossOutOption(2);
    }
}


function Surrendered1() {
    gameAreaFadeOut(); 
    HP-=10;
    items.push("Keycard");
    stageText = newPar+"You put your hands behind your head and the guards roughed you up. You put your hands up to block the hits, and snagged a keycard from one of the guards while doing so. They then throw you back in the room, and now you're back where you started. Damn.";
    createStage(timeRemaining+" Minutes Left", stageText, "Understood", "StartGame2()", "", "");
}



 document.addEventListener("keypress", function(event) {
    keys = event.key.toLowerCase();
    if (keys == "d") {
        console.log("switched to "+viewmode); 
        if (viewmode == "light") {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            gameArea.style.borderColor = "white";
            viewmode = "dark";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            gameArea.style.borderColor = "black";
            viewmode = "light";
        }
    }
  });