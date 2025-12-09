const gameArea = document.getElementById("gameArea");
const htmll = document.html;
const newPar = "         ";

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

function createStage(stageDesc, opt1, opt1Choice, opt2, opt2Choice, opt3 = "none", opt3Choice = "none", opt4 = "none", opt4Choice = "none", opt5 = "none", opt5Choice = "none", opt6 = "none", opt6Choice = "none", opt7 = "none", opt7Choice = "none") {
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
    node = document.createTextNode(newPar+stageDesc);
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


text = "noah had a bunch of friends. I was one of noah's friends."
createStage(text, 1, 2, 3, 4, 5, 6, 7, 8);
createStage("hi!", 1, "balls()", 3, 4, 5, 6, 7, 8);

function balls() {
    console.log("balls")
}