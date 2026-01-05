const gameArea = document.getElementById("gameArea");
const htmll = document.html;
const newPar ="         ";



class character {
    constructor(name, strength, intelligence, charisma, creativity, hp, energy, techSkills = false) {
        this.name = name;
        this.strength = strength;
        this.intelligence = intelligence;
        this.charisma = charisma;
        this.creativity = creativity;
        this.hp = hp;
        this.energy = energy;
        this.techSkills = techSkills
    }
}

//character list

let Player;
let James = new character("James", 7, 4, 4, 5, 100, 80);
let Kelly = new character("Kelly", 3, 8, 2, 7, 90, 90, true);
let Viktor = new character("Viktor", 10, 0, 5, 5, 100, 50)



//character list end

let strength = 0;
let intelligence = 0;
let charisma = 0;
let creativity = 0;

let techSkills = false;
let gamePlaying = true;
let talkedOthers = false;
let brokeOthersOut = false;
let triedOffice = false;
let foughtGuards = false;
let triedDoor = false;
let triedplant = false;
let triedplant2 = false;
let machinery = false;
let debris = false;
let AssemblyPower = false;
let AssemblyDoor = false;
let garageDoor1 = false;
let fixedGarageDoor = false;
let garageDoor2 = false;
let checkedGarage = false;

let viewmode = "light";


let HP = 100;
let energy = 30;
let timeRemaining = 60;//In minutes
let karma = 0;
let items = [];
let party = [];
let dataParty = [];

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
    document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            gameArea.style.borderColor = "white";
            viewmode = "dark";

}

balls
function gameAreaFadeOut() {
    

}

function gameAreaFadeIn() {
    opac = 0
    gameArea.style.opacity = opac; 
    introFade3 = setInterval(FadeIn, 17);
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



function createStage(titleName, stageDesc, opt1, opt1Choice, opt2 = "", opt2Choice = "", opt3 = "none", opt3Choice = "none", opt4 = "none", opt4Choice = "none", opt5 = "none", opt5Choice = "none", opt6 = "none", opt6Choice = "none", opt7 = "none", opt7Choice = "none") {
    console.log(party);
    console.log(items);
    console.log(dataParty);
    if (HP < 0) {
        HP = 0;
        if (gamePlaying) {
            document.getElementById("gameImage").src = "Images/Death.png";
            gamePlaying = false;
            createStage("THE END", newPar+"You feel weak, and your body can't handle this anymore... Your body hurts like hell, and you collapse to the ground. Your vision is fading...\n\nGAME OVER.", "", "");
            return;
        }
    }
    if (energy < 0) {
        energy = 0;
        if (gamePlaying) {
            document.getElementById("gameImage").src = "Images/Collapse.jpg";
            gamePlaying = false;
            createStage("THE END", newPar+"You feel weak, and your body can't handle this anymore... You don't have the strength to continue. You collapse to the ground. Your vision is fading, and you have failed...\n\nGAME OVER.", "", "");
            return;
        }
    }
    if (timeRemaining <= 0) {
        
        if (gamePlaying) {
            document.getElementById("gameImage").src = "Images/Death.png";
            gamePlaying = false;
            createStage("THE END", newPar+"You hear some hissing. The gas comes out, and you can feel your breath being taken away. You collapse to the ground. You've run out of time...\n\nGAME OVER.", "", "");
            return;
        }
    }
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

    let partyText;
    try {
        partyText = "Party: ";
        for (i = 0; i < party.length; i++) {
            partyText += party[i] + ", ";
        }
        if (party.length == 0) {
            partyText += "None";
        } else {
            partyText = partyText.slice(0, -2);
        }
    } catch (e) {

    }
    document.getElementById("Party").innerHTML = partyText;

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
        charisma = 3;
        strength = 7;
        intelligence = 6;
        creativity = 4;
        break;
    }   
    Player = new character("Player", strength, intelligence, charisma, creativity, HP, energy);
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
    timeRemaining -= (12 - creativity);
    document.getElementById("gameImage").src = "Images/Vent.jpg";

    stageText = newPar+"You decide to look for a way out on your own. You start searching around the room and notice a crack in the wall near the ceiling. You can't get there on your own, so you grab someone from the crowd and ask them quietly for help. He gives you a lift and you're in the vent! It seems to lead someplace else in the facility. Perhaps this is where the gas is coming from? You look down and see the guy who helped you waving his arms to be helped. You could move on on your own... Or you could help him. Or you could get everyone out through the vent. What do you do?";
    createStage(timeRemaining+" Minutes Left", stageText, "Move on alone", "MoveOnAlone()", "Help the guy", "HelpGuyVent()", "Get everyone out", "GetEveryoneOutVent()");
}


function MoveOnAlone() {
    karma -= 10;
    gameAreaFadeOut();
    document.getElementById("gameImage").src = "Images/AbandonedFacility.jpg";
    timeRemaining -= 2;
    stageText = newPar+"You ignore his calls and decide to move on your own. You don't have time to waste on other people. You crawl through the vent for a few minutes until you reach a junction. You've escaped the room, but you still need to get out of the facility. You crawl out of the vent and find yourself in the middle of the facility, just outside the room. Alright. Now What?";
    createStage(timeRemaining+" Minutes Left",stageText, "Try and break the others out", "BreakOthersOut()", "Explore", "ExploreFacility()");
}

function HelpGuyVent() {
    energy-=5;
    party.push(James.name);
    dataParty.push(James);
    gameAreaFadeOut();
    timeRemaining -= 4;
    document.getElementById("gameImage").src = "Images/AbandonedFacility.jpg";
    stageText = newPar+"You put your arm out and help the person up. It takes a while for both of you to get through the vent, but you both make it out! His name is James, and he has joined your party. He seems to have a rather strong build. Now, what should you do?";
    createStage(timeRemaining+" Minutes Left", stageText, "Try and break the others out", "BreakOthersOut()", "Explore", "ExploreFacility()");
}

function GetEveryoneOutVent() {
    energy-=2
    timeRemaining -= 20;
    document.getElementById("gameImage").src = "Images/AbandonedFacility.jpg";
    stageText = newPar+"You scream into the room that you've found a way out. The crowd bolts in curiousity, and one by one, they make it out, and you help them. It's taken a significant amount of time, but you have gotten everyone out of the room! Now what do you do?";
    createStage(timeRemaining+" Minutes Left",stageText, "Try and break the others out", "BreakOthersOut()", "Explore on your own", "ExploreFacility()", "Explore with others", "ExploreWithOthers()");
    crossOutOption(1);
}

function ExploreFacility() {
    energy-=5;
    timeRemaining -= 3;
    stageText = newPar+"You don't have any time to waste. You run through the halls, and you hear the cries and panic of more people, but you are adamant on getting out of and away from the facility first. There's no light. No sign of the outside. But you've made it to the center of the facility. There's a lot for you to do. What do you explore first?"
    if (party.includes("James")) {
        stageText = newPar+"You don't have any time to waste. You run through the halls, bringing James, and you hear the cries and panic of more people, but you are adamant on getting out of and away from the facility first. There's no light. No sign of the outside. But you've made it to the center of the facility. There's a lot for you to do. What do you explore first?"
    }
    document.getElementById("gameImage").src = "Images/AbandonedFacilityLobby.jpg";
    createStage(timeRemaining+" Minutes Left", stageText, "The Plant", "PlantStart()", "The Assembly Line", "AssemblyLineStart()", "The Garage", "GarageStart()", "The Office", "TheOffice()")

}

function ExploreWithOthers() {
    energy-=5;
    timeRemaining -= 10;
    party.push('Kelly')
    party.push('Viktor')

    dataParty.push(Kelly);
    dataParty.push(Viktor);
    if (party.includes("James")) {
    } else {
        party.push('James')
        dataParty.push(James);
    }
    stageText = newPar+"You begin to organise the group, but it takes a while since you're not used to this. Nevertheless, you pull yourself together and now you have a team to help you. Most of them choose to stay behind and try to break the others out of their rooms. James, a well built man, Kelly, an engineer, and Viktor, a former soldier, choose to join you. There's no light. No sign of the outside. But you've made it to the center of the facility. There's a lot for you guys to do. What do you explore first?"
    if (charisma >= 5) {
        timeRemaining += 5;
        stageText = newPar+"You begin to organise the group, and most of them choose to stay behind and try to break the others out of their rooms. James, a well built man, Kelly, an engineer, and Viktor, a former soldier, choose to join you. You guys move through the hallways and make it to the center of the facility. There's no light. No sign of the outside. But you've made it to the center of the facility. There's a lot for you guys to do. What do you explore first?"

    }
    document.getElementById("gameImage").src = "Images/AbandonedFacilityLobby.jpg";
    createStage(timeRemaining+" Minutes Left", stageText, "The Plant", "PlantStart()", "The Assembly Line", "AssemblyLineStart()", "The Garage", "GarageStart()", "The Office", "TheOffice()")

}

function TheOffice() {
    triedOffice = true 
    if (items.includes("Keycard LVL 1") && items.includes("Keycard LVL 2") && items.includes("Keycard LVL 3")) {
        timeRemaining -= 2;
        document.getElementById("gameImage").src = "Images/Office.jpg";
        stageText = newPar+"It takes all the keycards you have, but you manage to get the door open. Inside, you see a flurry of guards... They all turn to you and point their guns at you. Just as it seems like your end, the man in the suit walks in. He looks at you, and then at the guards. He signals them to lower their weapons. He walks up to you and says, \n\n" + newPar+`"Impressive. You've managed to get this far. But you are not supposed to be here. I will grant you one last chance. All you have to do is press the button. Only one makes it out alive. And you will have all the luxury and power you want in this world."\n\n`+ newPar+"You consider his offer. It seems tempting...";
        if (karma < -20) {
            stageText = newPar+"It takes all the keycards you have, but you manage to get the door open. Inside, you see a flurry of guards... They all turn to you and point their guns at you. Just as it seems like your end, the man    in the suit walks in. He looks at you, and then at the guards. He signals them to lower their weapons. He walks up to you and says, \n\n"+newPar+`"Impressive. You've managed to get this far. But I cannot allow you to leave. You see, you were never meant to make it this far. You will not be leaving this facility alive."\n\n`+newPar+"The guards raise their guns at you. Before you can react, you feel a sharp pain in your side as a bullet pierces your skin...\n\nTHE END.";
            createStage("THE END", stageText, "", "");
        } else {
            createStage(timeRemaining+" Minutes Left", stageText, "Press the button", "OfficeEnding()", "Refuse", "Resist()");
        }
    } else {
        timeRemaining -= 2;
        stageText = newPar+"You waste no time and run up the stairs. This is probably where that man is hiding. The door is made of steel, and there seems to be no way in. There's a keycard slot to tap, but it doesn't seem to be like the others... It's more complex, and much sturdier. 3 different locks. Maybe you should try it later. You return to the lobby. What do you explore?";
        createStage(timeRemaining+" Minutes Left", stageText, "The Plant", "PlantStart()", "The Assembly Line", "AssemblyLineStart()", "The Garage", "GarageStart()", "The Office", "TheOffice()")
        //crossOutOption(4);

    }
}

function OfficeEnding() {
    stageText = newPar+"You press the button. The gas starts to fill the rooms of the pople you once were with. You watch as they all collapse to the ground, lifeless. What have you done? You hear his voice behind you.\n\n"+newPar+`"Good."\n\n`+newPar+"...You walk out of the facility, excited by your new wealth, but haunted by your actions. You have survived... Or have you? His gun points right at your head. You have failed.\n\nTHE END.";
    createStage("THE END", stageText, "", "");
}


function GarageStart() {
    timeRemaining -= 1;
    document.getElementById("gameImage").src = "Images/DarkGarage.webp";
    stageText = newPar+"You enter the garage. It's dark, and you can barely see anything. There seems to be a few cars here, but they look old and abandoned. There is a door that seems to lead somewhere else, but it's locked. You could try to force it open, but it might take a while. There is a large garage door that could lead somewhere else... Or you could look around the garage for clues. What do you do?";
    createStage(timeRemaining+" Minutes Left",stageText,"The garage?", "ExplainGarage()", "Investigate the door", "TryGarageDoor()", "Look around the garage", "InvestigateGarage()", "Try fixing the garage door", "FixGarageDoor()", "Return to the lobby", "ReturnToLobby()")
    if (garageDoor1) {
        crossOutOption(2);
    }
    if (checkedGarage) {
        crossOutOption(3);
    }
}

function ExplainGarage() {
    stageText = newPar+"The garage is dark and dusty. The garage seems to be mostly empty, but there could be something useful here. The Garage door seems to be stuck, maybe it can be fixed somehow... The other door is locked tight and doesn't seem to accept digital keycards. You wonder what his could have been used for...";
    createStage(timeRemaining+" Minutes Left",stageText,"Understood","GarageStart()");
}

function FixGarageDoor() {
    if (items.includes("Old Tool")) {
        fixedGarageDoor = true;
        timeRemaining -= 4;
        if (items.includes("Keycard LVL 1") || items.includes("Keycard LVL 2") || items.includes("Keycard LVL 3")) {
            stageText = newPar+"You use the old tool you found earlier to fix the garage door. After a while of tinkering, you manage to get it open! The door seems to be functioning now, but it closes on you. You whip out your keycard and try it to open the door, And voila, it does! It seems to lead to some tunnels, and you can see a faint and distant light up ahead. It's a way out! You can leave now, or continue exploring.";
            createStage(timeRemaining+" Minutes Left",stageText,"Leave", "GarageEnding()", "Continue exploring", "GarageStart()");
        } else {
            stageText = newPar+"You use the old tool you found earlier to fix the garage door. After a while of tinkering, you manage to get it open! The door seems to be functioning now, but it closes on you. However, it seems to be locked again, needing a keycard to open it. Damn..."
            createStage(timeRemaining+" Minutes Left",stageText,"Continue", "GarageStart()");
        }
    } else {
        timeRemaining -= 2;
        stageText = newPar+"You inspect the garage door, but you don't have the tools to fix it. It seems to be stuck pretty badly. You head back out.";
        createStage(timeRemaining+" Minutes Left",stageText,"Continue", "GarageStart()");
    }
}

function GarageEnding() {
    if (party.length == 1) {
        if (brokeOthersOut) {
            stageText = newPar+"You and James make your way through the tunnels. After a while of walking, you see a light up ahead. You emerge from the tunnels, and find yourself outside. You've made it out! You and your party have survived the ordeal, but at what cost? You look back at the facility, now far behind you. You have escaped... But what of those who didn't?\n\nTHE END.";
        } else {
            stageText = newPar+"You gather everyone after running through the facility,and you all make your way through the tunnels. After a while of walking, you see a light up ahead. You emerge from the tunnels, and find yourself outside. You've made it out! You've survived the ordeal! You look back at the facility, now far behind you. You have escaped... And you never want to look back.\n\nTHE END.";
        }
    } else if (party.length > 1) {
            stageText = newPar+"You gather everyone after running through the facility,and you all make your way through the tunnels. After a while of walking, you see a light up ahead. You emerge from the tunnels, and find yourself outside. You've made it out! You've survived the ordeal! You look back at the facility, now far behind you. You have escaped... And you never want to look back.\n\nTHE END.";

    } else {
        if (karma > -10) {
            stageText = newPar+"You make your way through the tunnels. After a while of walking, you see a light up ahead. You emerge from the tunnels, and find yourself outside. You've made it out! You and your party have survived the ordeal, but at what cost? You look back at the facility, now far behind you. You have escaped... But what of those who didn't?\n\nTHE END.";
            
        } else {
            stageText = newPar+"You make your way through the tunnels. After a while of walking, you see a light up ahead. But just as you are about to escape, the tunnels collapse in on you... so close, yet so far...\n\nTHE END.";
        }
    }
}

function TryGarageDoor() {
    if (items.includes("Strange Key")) {
        garageDoor1 = true;
        timeRemaining -= 3;
        stageText = newPar+"You try to open the door, but it's locked tight. So, you try the strange key you found in the plant, and to your surprise, it fits! You open the door and find an old storage room. There is a keycard LVL 2 on the table. You take it and head back to the garage.";
        items.push("Keycard LVL 2");
        createStage(timeRemaining+" Minutes Left",stageText,"Continue","GarageStart()");
    } else {
        timeRemaining -= 2;
        stageText = newPar+"You try to open the door, but it's locked tight. There doesn't seem to be any other way into the little room. You head back out.";
        createStage(timeRemaining+" Minutes Left",stageText,"Continue","GarageStart()");
    }
}

function InvestigateGarage() {
    timeRemaining -= (3);
    checkedGarage = true;
    if (items.includes("Gun")) {
        stageText = newPar+"You look through the garage, but there doesn't seem to be much useful here. There are a few old cars, but they look like they haven't been used in years. You rummage through some debris, but you don't find anything new.";
    } else {
        items.push("Gun");
        stageText = newPar+"You look through the garage, but there doesn't seem to be much useful here. There are a few old cars, but they look like they haven't been used in years. You rummage through some debris, and find a gun! Maybe this could prove to be useful later. You pocket it.";
    }
    createStage(timeRemaining+" Minutes Left",stageText,"Continue","GarageStart()");
}

function PlantStart() {
    
    
    let canOpen = false;

    document.getElementById("gameImage").src = "Images/Plant.jpg";
    try {
        for (i = 0; i < dataParty.length; i++) {
            if (dataParty[i].techSkills == true) {
                canOpen = true;
            }
        }
    } catch (e) {
        canOpen = false;
    }
    if (techSkills) {
        canOpen = true;
    }
    timeRemaining-=1;
    stageText = newPar+"You make your way to the plant. Maybe that's where the gas will be released. You arive to see large pipes, and a locked door with a keycard panel that looks hackable. Maybe that could lead somewhere important. But there is still a large amount that must be explored for clues. Or you could turn back."
    createStage(timeRemaining+" Minutes Left",stageText,"The plant?", "ExplainPlant()", "Try getting through the door", "TryPlantDoor()", "Investigate the plant", "InvestigatePlant()", "Return to the lobby", "ReturnToLobby()")
    if (triedplant) {
        crossOutOption(2);
    }
    if (triedplant2) {
        crossOutOption(3);
    }
}

function ExplainPlant() {
    stageText = newPar+"The plant reeks of something horrible. It smells like something died here. There seems to be some kind of container that can be opened, but it's completely locked. The valves on the pipes can be turned, and are connected to the container. The room is dark as hell, so you wouldn't imagine it'd be very easy to find what you need."
    createStage(timeRemaining+" Minutes Left",stageText,"Understood","PlantStart()", "", "");
}

function TryPlantDoor() {
    let canOpen = false;
    triedplant = true;
    document.getElementById("gameImage").src = "Images/Plant.jpg";
    try {
        for (i = 0; i < dataParty.length; i++) {
            if (dataParty[i].techSkills == true) {
                canOpen = true;
            }
        }
    } catch (e) {
        //canOpen = false;
    }
    if (canOpen) {
        timeRemaining -= 4
        items.push('Keycard LVL 3');
        stageText = newPar+"It takes you a while, but after a while of working, and thanks to some help from Kelly, you've broken open the door, and you now have access to a control room. You don't think you were supposed to be here, but the controls don't seem to do anything. There's a Keycard LVL 3 on the table, so you decide to snag it. Now what?"
        createStage(timeRemaining+" Minutes Left",stageText,"The plant?", "ExplainPlant()", "Try getting through the door", "TryPlantDoor()", "Investigate the plant", "InvestigatePlant()", "Return to the lobby", "ReturnToLobby()")
        crossOutOption(2);
        if (triedplant2) {
             crossOutOption(3);
        }
    } else if (techSkills) {
        timeRemaining -= 7
        items.push('Keycard LVL 3');
        stageText = newPar+"It takes you a while, but after a while of working, you've broken open the door, and you now have access to a control room. You don't think you were supposed to be here, but the controls don't seem to do anything. There's a Keycard LVL 3 on the table, so you decide to snag it. Now what?"
        createStage(timeRemaining+" Minutes Left",stageText,"The plant?", "ExplainPlant()", "Try getting through the door", "TryPlantDoor()", "Investigate the plant", "InvestigatePlant()", "Return to the lobby", "ReturnToLobby()")
        crossOutOption(2);
        if (triedplant2) {
            crossOutOption(3);
        }
    } else {
        timeRemaining -= 2
        stageText = newPar+"No matter how hard you tried, you couldn't break it open. There is still stuff to do in the plant. Now what?"
        createStage(timeRemaining+" Minutes Left",stageText,"The plant?", "ExplainPlant()", "Try getting through the door", "TryPlantDoor()", "Investigate the plant", "InvestigatePlant()", "Return to the lobby", "ReturnToLobby()")
        crossOutOption(2);
        if (triedplant2) {
            crossOutOption(3);
        }
    }
    
}

function InvestigatePlant() {
    triedplant2 = true;
    timeRemaining -= 5 - (party.length)
    if (party.length != 0) {
        items.push("Strange Key");
        stageText = newPar+"You and your party began to look around the plant for some clues. It's dark, so hands are against the wall...  All of a sudden, James claimed to have found some numbers on the wall! You notice a row of valves that can be adjusted, which are also connected to the pipes. You input the code, and a hatch opens. You got a strange key..."
        createStage(timeRemaining+" Minutes Left", stageText, "Continue", "PlantStart()")
    } else {
        if (creativity >= 5) {
            items.push("Strange Key");
            stageText = newPar+"You began to look around the plant for some clues. It's dark, so you put your hands against the wall and feel some writing... It's hard to deduce, but it's a set of numbers. 48, 30, 54.  You notice a row of valves that can be adjusted, which are also connected to the pipes. You input the code, and a hatch opens. You got a strange key..."
            createStage(timeRemaining+" Minutes Left", stageText, "Continue", "PlantStart()");
        } else {
            stageText = newPar+"You searched... And you searched... And you searched. But you couldn't find anything. There were a set of numbers on the wall, but you were unsure of what to use them for."
            createStage(timeRemaining+" Minutes Left", stageText, "Continue", "PlantStart()");
        }

    }
}

function ReturnToLobby() {
    document.getElementById("gameImage").src = "Images/AbandonedFacilityLobby.jpg";
    timeRemaining-=1;
    stageText = newPar+"You returned to the lobby. You don't have much more time to waste. Where do you go now?";
    createStage(timeRemaining+" Minutes Left", stageText, "The Plant", "PlantStart()", "The Assembly Line", "AssemblyLineStart()", "The Garage", "GarageStart()", "The Office", "TheOffice()")
    if (triedOffice) {
        crossOutOption(4)
    }
}

function AssemblyLineStart() {
    timeRemaining -= 1; 
    document.getElementById("gameImage").src = "Images/TheAssemblyLine.jpg";
    stageText = newPar+"The room right next to the lobby is the assembly line. It looks like it hasn't been used for years. It seems somewhat hazardous... But you still need to find some clues. The assembly line is large and needs to be explored. What do you do first?"
    
    createStage(timeRemaining+" Minutes Left", stageText, "The Assembly Line?", "ExplainAssemblyLine()", "Explore the Machinery", "ExploreMachinery()", "Explore the Debris", "ExploreDebris()", "Explore the Control Center", "ExploreControlCenter()","Return", "ReturnToLobby()")
    if (machinery) {
        crossOutOption(2);
    }
    if (debris) {
        crossOutOption(3);
    }
}

function ExplainAssemblyLine() {
    stageText = newPar+"The lighting isn't great, but at least you can see. The assembly line seems to have been abandoned for at least a few years... You're not sure what this used to be, but you know that this was definitely something else before it was turned into whatever death game you are in right now. There's a pile of debris. Maybe there's a way out through there? The machinery is also a point of interest. There's a lso a room that seems to be the control room. Could that help you somehow?"
    createStage(timeRemaining+" Minutes Left",stageText,"Understood","AssemblyLineStart()", "", "");
}

function ExploreMachinery() {
    let canOpen = false;
    machinery = true;
    try {
        for (i = 0; i < dataParty.length; i++) {
            if (dataParty[i].intelligence >= 5) {
                canOpen = true;
            }
        }
    } catch (e) {
        //canOpen = false;
    }
    energy -= 5;
    timeRemaining -= (7);
    if (intelligence >= 5) {
        stageText = newPar+"You jump into the middle of the room, in the middle of all the machinery. It's hard to tell how to do any of this stuff, but you use your wit and you start rummaging through the ruins... You find an old tool! You pocket it for later."
        items.push("Old Tool")
    } else if (canOpen) {
        stageText = newPar+"You jump into the middle of the room along with some teammates. It's hard to tell how to do any of this stuff, but you work together and start rummaging through the ruins... One of them finds an old tool! You pocket it for later."
        items.push("Old Tool")
    } else {
        stageText = newPar+"You jump into the middle of the room, in the middle of all the machinery. Nothing is making sense in this room, and you have no clue where to start... You spent some time rummaging through the machinery, but you found nothing"
    }
    createStage(timeRemaining+" Minutes Left", stageText, "Continue", "AssemblyLineStart()", "", "")
}

function ExploreDebris() {
    debris = true;
    timeRemaining-=3;
    AssemblyPower = true;
    if (party.length >= 1) {
        stageText = newPar+"You and your team find your way through the deris in the assembly line, but James ends up falling through an unexpected crack! He can't get himself out, and is caught in some machinery. You'll need to get him out, fast. Helping him can be dangerous. What do you do?"
        createStage(timeRemaining+" Minutes Left", stageText, "Help him out", "HelpJames()", "Move On", "DontHelpJames()");
    } else {
        timeRemaining-=2;
        HP-=40;
        energy-=10;
        stageText = newPar+"You find your way through the deris in the assembly line, but you end up falling through an unexpected crack! It hurts like hell, but you get yourself out of there. You're lucky not to have gotten trapped. You discover a dislodged power rail and plug it back in! The room lights up a bit...";
        createStage(timeRemaining+" Minutes Left", stageText, "Continue", "AssemblyLineStart()");
    }
}

function HelpJames() {
    karma+=15;
    timeRemaining-=4;
    energy-=10;
    chance = Math.floor(Math.random() * items.length)
    let itemLost = items[chance];
    items.splice(chance, 1);
    stageText = newPar+"It's tricky, but you reach your hand out for James to grab. You get him out of there before he bleeds out. Unfortunately, you dropped your "+itemLost+" in the process, but you discover a dislodged power rail and plug it back in! The room lights up a bit..."
    createStage(timeRemaining+" Minutes Left", stageText, "Continue", "AssemblyLineStart()");
}

function DontHelpJames() {
    karma-=15;
    timeRemaining-=1;
    energy-=10;
    chance = party.indexOf("James");
    party.splice(chance, 1);
    dataParty.splice(chance, 1);
    stageText = newPar+"You tell James that you're sorry... his struggles fade as you discover a dislodged power rail and plug it back in. The room lights up a bit..."
    createStage(timeRemaining+" Minutes Left", stageText, "Continue", "AssemblyLineStart()");
}

function ExploreControlCenter() {
    timeRemaining -= 1;

    if (AssemblyDoor) {
        stageText = "You make your way to the control room again, and are close to the exit. Do you want to leave, or continue exploring the facility?";
        createStage(timeRemaining+" Minutes Left", newPar+stageText, "Escape", "AssemblyEnding()", "Keep Exploring", "AssemblyLineStart()");
    }

    if (AssemblyPower) {
        if (items.includes("Keycard LVL 2") || items.includes("Keycard LVL 3") || items.includes("Master Keycard")) {
            stageText = "You make your way to the control room, and the controls are on! There's an interface demanding for a LVL 2 Keycard, so you jam it in. The machinery powers on, and you see something opening up. The outside! You've just found a way out! Do you want to leave, or continue exploring the facility?"
            timeRemaining-=2;
            AssemblyDoor = true;
            createStage(timeRemaining+" Minutes Left", newPar+stageText, "Escape", "AssemblyEnding()", "Keep Exploring", "AssemblyLineStart()");
        } else {   
            stageText = "You make your way to the control room, and the controls are on! There's an interface demanding for a LVL 2 Keycard, but you don't have one. Maybe you should check it back later..."
            timeRemaining-=1;
            createStage(timeRemaining+" Minutes Left", newPar+stageText, "Continue", "AssemblyLineStart()");

        }
    } else {
        stageText = "You make your way to the control room, but nothing's on... A power line seems to be leading to where the debris is. Maybe you'll come back later."
        createStage(timeRemaining+" Minutes Left", newPar+stageText, "Continue", "AssemblyLineStart()");
    }
}

function AssemblyEnding() {
    document.getElementById("gameImage").src = "Images/AssemblyDoor.jpg";
    if (party.length == 1) {
        if (brokeOthersOut) {
            stageText = newPar+"You gather everyone, and you've safely made it out alive! You don't know where you are, but at least you're safe. You look around, and see a road in the distance. You begin to walk towards it, hoping for the best. You've survived... and you have new friends to help you along the way.\n\nTHE END.";
            createStage("THE END", stageText, "", "");
        } else {
            stageText = newPar+"You've safely made it out alive! You don't know where you are, but at least you're safe. You look around, and see a road in the distance. You begin to walk towards it, hoping for the best. You've survived, along with James... but at what cost? Was it worth it?\n\nTHE END.";
            createStage("THE END", stageText, "", "");
        }
    } else if (party.length >= 1) {
        if (brokeOthersOut) {
            stageText = newPar+"You gather everyone, and you've safely made it out alive! You don't know where you are, but at least you're safe. You look around, and see a road in the distance. You begin to walk towards it, hoping for the best. You've survived... and you have new friends to help you along the way.\n\nTHE END.";
            createStage("THE END", stageText, "", "");
        } else {

        }
    } else {
        if (brokeOthersOut) {
            stageText = newPar+"You gather everyone, and you've safely made it out alive! You don't know where you are, but at least you're safe. You look around, and see a road in the distance. You begin to walk towards it, hoping for the best. You've survived... and you have new friends to help you along the way.\n\nTHE END.";
            createStage("THE END", stageText, "", "");
        } else {
            if (karma < 0) {
                stageText = newPar+"You've safely made it out alive! ... but you don't know where you are, and don't know what to do. You look around, and see nothing around you. Those people you left behind... What you did to save your own skin... Did you really win?\n\nTHE END.";
                createStage("THE END", stageText, "", "");

            } else {
                stageText = newPar+"You've safely made it out alive! You don't know where you are, but at least you're safe. You look around, and see a road in the distance. You begin to walk towards it, hoping for the best. You've survived... but at what cost?\n\nTHE END.";
                createStage("THE END", stageText, "", "");
            }
        }
    }
}

function BreakOthersOut() {
    karma+=20;
    gameAreaFadeOut();
    if (techSkills==true) {
        timeRemaining -= 4;
        stageText = newPar+"You decided to try and break the others out. The door is locked by an electronic lock, it seems rather complex to break through, but you have some technical skills that could help you. After a few minutes of working on the lock, you manage to bypass the security and open the door. The others rush out, thanking you for saving them. A couple of people are eager to join you. But you still need to find a way out of the facility. What should you do?";
    } else if (items.includes("Keycard LVL 1")) {
        timeRemaining -= 2;
        stageText = newPar+"You decided to try and break the others out. The door is locked by an electronic lock, but you remember you have a keycard you took from one of the guards. You swipe the card, and the door beeps and opens. The others rush out, thanking you for saving them. But you still need to find a way out of the facility. A couple of people are eager to join you. What should you do?";
    }

    if (techSkills==false && !items.includes("Keycard LVL 1")) {
        timeRemaining -= 3;
        stageText = newPar+"You decided to try and break the others out. The door is locked by an electronic lock, and you don't think you can break through it. After a few minutes of trying, you realize you can't do it. You need to find another way out. What should you do?";
        createStage(timeRemaining+" Minutes Left", stageText, "Try and break the others out", "BreakOthersOut()", "Explore", "ExploreFacility()");
        crossOutOption(1);
    } else {
        brokeOthersOut = true;
        createStage(timeRemaining+" Minutes Left", stageText, "Explore on your own", "ExploreFacility()", "Explore with others", "ExploreWithOthers()");
    }

}


function TalkOthers() {
    gameAreaFadeOut();
    talkedOthers = true;
    timeRemaining -= 3;
    if (charisma >= 6) {
        timeRemaining -= 2;
        stageText = newPar+"You approach a few people and start talking to them. They seem scared, but you manage to calm them down. While the others freak out, the group of you check around the room for a solution. After a few minutes of searching, one of the people finds some text engraved on the wall. It seems to be a clue. There's a keypad to enter a code that can open the door. There's a safe in the corner of the room. After some debating, you've concluded on what the code could be. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Try opening the safe", "TrySafe()", "Try opening the door", "TryDoor()", "Look for another way", "Vent()");
    } else if (intelligence >= 7) {
        items.push("Gun");
        stageText = newPar+"You approach a few people and try talking to them, but they're panicking and you know you don't have time for that. You begin to work alone and notice a safe in the back of the room. It's a fairly old safe that you would imagine would be easy to open. You put your ear up close to the safe, and after a few minutes, you hear some clicks and the door pops open. Inside the safe, there is a gun. Why would that be in there? You quickly pocket it before anyone notices. There's a note inside. Only one person makes it out. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Oblige", "KillThemAll()", "Look for another way", "Vent()");
    }  else {
        stageText = newPar+"You try to approach a few people and talk to them, but they're panicking and you don't know what to do. You feel useless as you stand there while everyone else is freaking out. After a few minutes, you snap out of it and realize you need to find a way out of here. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Look for another way", "Vent()", "Wait", "WaitForPeople()");
    }
}

function TrySafe() {
    timeRemaining -= 1;
    items.push("Gun")
    stageText = newPar+"You tried to open up the safe with the code, and it works! You open it up, and there's a gun inside. You pull it out, and the people who had just begun to calm down start panicking once more. There's a note in there. Only one person makes it out. What should you do?"
    createStage(timeRemaining+" Minutes Left", stageText, "Oblige", "KillThemAll()", "Try opening the door", "TryDoor()", "Look for another way", "Vent()");
    if (triedDoor) {
        crossOutOption(2);
    }
}

function TryDoor() {
    timeRemaining -= 1;
    triedDoor = true;
    if (items.includes("Gun")) {
        stageText = newPar+"You pocket the gun, and run to the door trying to enter the same code in. It doesn't work. The people in the room are getting more nervous by the second. What do you do?";
        createStage(timeRemaining+" Minutes Left", stageText, "Oblige", "KillThemAll()", "Try opening the door", "TryDoor()", "Look for another way", "Vent()");
        crossOutOption(2);
    } else {
        stageText = newPar+"You rush to the door and enter the code, but it doesn't work... Maybe it's meant for something else? What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Try opening the safe", "TrySafe()", "Try opening the door", "TryDoor()", "Look for another way", "Vent()");
        crossOutOption(2);
    }
}

function KillThemAll() {
    timeRemaining -= (13-strength);
    karma -= 100;
    energy -= 20;
    HP-=20
    if (strength >= 5) {
        HP+=10;
    }
    document.getElementById("gameImage").src = "Images/GunInHand.jpg";
    items.splice(items.indexOf("Gun"));
    stageText = newPar+"You cock the gun. You need to get out of here, somehow. You point it at your first victim. You close your eyes as you hear the gunshot. Your ears are ringing, and the rest of the people in the room duck with hands on their ears. Next thing you know, you can't stop. You pull the trigger several more times. The gun has enough just enough bullets for everyone in the room. Some ran, some begged, but you spared them no mercy. The lst of them tried to fight back, but their slight success was in vain. You still had the gun. And now the room is filled with their blood.\n\n"+newPar+"The door to the room opens. There's no announcement, no one to escort you out. The gun is empty now, and you don't think it'll be of any use to you anymore. You leave it in the room as you walk out, alone. You're in the halls now. What do you do?";
    if (strength >= 5) {
        stageText = newPar+"You cock the gun. You need to get out of here, somehow. You point it at your first victim and pull it with n hesitation. Just like before. Your ears are ringing, and the rest of the people in the room duck with hands on their ears. Next thing you know, you can't stop. You pull the trigger several more times. The gun has enough just enough bullets for everyone in the room. Some ran, some begged, but you spared them no mercy. The lst of them tried to fight back, but their slight success was in vain. You still had the gun. And now the room is filled with their blood.\n\n"+newPar+"The door to the room opens. There's no announcement, no one to escort you out. The gun is empty now, and you don't think it'll be of any use to you anymore. You leave it in the room as you walk out, alone. You're in the halls now. What do you do?";
        
    }
    createStage(timeRemaining+" Minutes Left", stageText,  "Try and break the others out", "BreakOthersOut()", "Explore", "ExploreFacility()")
    crossOutOption(1);
}


function explainSuit() {
    gameAreaFadeOut();
    document.getElementById("gameImage").src = "Images/SuitGuy.jpg";
        stageText = newPar+"The man in the suit seems to be the leader of this operation. You don't remember the face, but you know you've seen him before. You try not to think about it too much, as you don't have a lot of time to find a solution.";

    if (intelligence >= 5) {
        stageText = newPar+"The man in the suit seems to be the leader of this operation. You don't remember the face, but you know you've seen him before. He was on the headlines. You believe that he has had his conflicts with the government before. You wonder what the big picture of this could be... What could this be about? You try not to think about it too much, as you don't have a lot of time to find a solution.";
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
        stageText = newPar+"You tackle one of the guards, catching him off guard. The door slams shut as the other guard turns to help fight you off, but you quickly knock him to the ground as you bash your hands into the first guard's face. The second guard calls for help, and you can hear footsteps running towards you. Shit. You think there are about 4 more on their way, and you need to act fast. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Keep Fighting", "FightGuards2()", "Run", "ExploreFacility()", "Surrender", "Surrendered1()");
    } else {
        HP-=10; 
         items.push("Keycard LVL 1");
        stageText = newPar+"You tried to tackle one of the guards, but you were promptly attacked by both guards. It hurts like hell, and you're stuck in the same situation you were a minute a go. Dammit. At least you managed to steal a Keycard LVL 1 from one of them. What do you do now?";
        createStage(timeRemaining+" Minutes Left", stageText, "Man in the Suit?", "explainSuit()", "Fight", "FightGuards()", "Wait and find a way out", "Vent()", "Talk to others", "TalkOthers()"); 
        crossOutOption(2);
    }
}


function FightGuards2() {
    karma+=15;
    document.getElementById("gameImage").src = "Images/AbandonedFacility.jpg";
    energy -= 10;
    timeRemaining -= 2;
    if (strength >= 10) {
        energy -= 10;
        timeRemaining -= 4;
        items.push("Keycard LVL 1")
        stageText = newPar+"You continue to beat the living hell out of the guards and begin to destroy the guards who came forward. You knock them all out, and while it was tiring, you are able to get everyone out of the room! You snag a Keycard LVL 1 from one of the guards' unconcious body. Now what?";
        createStage(timeRemaining+" Minutes Left",stageText, "Try and break the others out", "BreakOthersOut()", "Explore on your own", "ExploreFacility()", "Explore with others", "ExploreWithOthers()");
        crossOutOption(1);
    } else {
        HP-=20
        stageText = newPar+"You try to fight the other guards, but they quickly overpower you. You are beaten to a pulp, and mock you. They then throw you back in the room, and now you're back where you started. Damn.";
        createStage(timeRemaining+" Minutes Left", stageText, "Understood", "StartGame2()", "", "");
    }
}

function Surrendered1() {
    gameAreaFadeOut(); 
    HP-=10;
    items.push("Keycard LVL 1");
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