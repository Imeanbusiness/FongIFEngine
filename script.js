const gameArea = document.getElementById("gameArea");
const htmll = document.html;
const newPar ="         ";

let strength = 0;
let intelligence = 0;
let charisma = 0;
let creativity = 0;

let techSkills = false;

let HP = 100;
let energy = 100;
let timeRemaining = 60;//In minutes
let karma = 0;

let job = ""; 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    createStage("0730 Hours", StartText, "What?", "explainJob()", "I'm an engineer", "chooseJob(1)", "I'm a soldier", "chooseJob(2)", "I'm a businessman", "chooseJob(3)", "I'm an inventor", "chooseJob(4)");


    //createStage("0730 Hours", StartText, "What?", "explainJob()", 3, 4, 5, 6, 7, 8);

}

function explainJob() {
    gameAreaFadeOut();
    text = newPar+ "Picking your job will influence what skills you have. The different jobs have different strengths and weaknesses. Some of them mean you are strong in different ways, but you will lack certain abilities that will help you in the game. This can't be changed during a playthrough! The Engineer and Inventor have high technical skills, allowing them to solve things quickly. However, they are weaker and not very social. The businessman is smart and very charismatic, but lacks strength and creativity. The soldier is very strong and somewhat charismatic, but is not as intelligent or creative. Choose wisely!";
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
    }   
    document.getElementById("Job").innerHTML = "Job: " + job;
}