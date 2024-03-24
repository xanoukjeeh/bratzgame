const eyesColor = document.querySelectorAll(".eyes-3");
const eyeButtons = document.querySelectorAll("article:nth-of-type(1) button");
const lipColor = document.querySelectorAll(".lips-2");
const hairColor = document.querySelectorAll(".hair-1");
const hairButtons = document.querySelectorAll("article:nth-of-type(3) button");
const lipButtons = document.querySelectorAll("article:nth-of-type(2) button");

let play = document.getElementById("muziekje");
    function speelMuziek() {
        let audio = new Audio("bratz.mp3");
        audio.play();
    }
    play.addEventListener("click", speelMuziek);

// let play = document.getElementById("image-container");
// function speelMuziek() {
//   let audio = new Audio("bratz.mp3");
//   audio.play();
// }
// play.addEventListener("click", speelMuziek);

// https://www.youtube.com/watch?v=3xlws5og44U
// dit heb ik van een Youtube tutorial

// hulp gekregen van een student en beetje van chatgpt als het niet werkte hoe je dit moet linken, is gekoppeld aan svg in de html
// prompt: waarom werkt deze code niet? cmd+A en kopieeren
// let eyesColor = document.querySelectorAll(".eyes-3");
// const greenButton = document.getElementById("green");

function changingEyeColor(color) {
    eyesColor.forEach(eye => {
        eye.style.fill = color;
    });
}

function changingLipColor(color) {
    lipColor.forEach(lip => {
        lip.style.fill = color;
    });
}

function changingHairColor(color) {
    hairColor.forEach(hair => {
        hair.style.fill = color;
    });
}

// hulp 3e jaars en chatgpt
// prompt: I want to create three buttons, where each button generates text in a h1 element. 
// However, everytime a button is clicked, the old text goes away and the h1  gets updated with new text
// what if I want the one to be created the first time but then replaced with with new texts after, toen kreeg ik een code die niet werkte, en wilde dat hij aan de h1 koppeld
// Ik wil graag nu allemaal if-else maken waar als een bepaalde oog een kleur is, of een lip, of wat dan ook, een compliment of sassy opmerking gemaakt wordt. Dit moet in een h1 gebeuren die erdan bij voor gemaakt en niet al in de html staat. 
// Deze h1 wordt in de section id="content" , een regel voor de section sluit. 

// dat was een basis voor de code, daarna hebben we er samen aan gewerkt en verbeterd waar nodig
function updateOpmerking() {
    const currentEyeColor = eyesColor[0].style.fill;
    const currentLipColor = lipColor[0].style.fill;
    const currentHairColor = hairColor[0].style.fill;

    let opmerking = "";

    // eyes 
    if (currentEyeColor === "red") {
        opmerking = "Deze kleur laat mijn ogen echt slayen! "
    } else if (currentEyeColor === "green") {
        opmerking = "Dit complimenteert mijn huid echt! "
    } else if (currentEyeColor === "lightskyblue") {
        opmerking = "Wat een mooie hemelsblauwe oogkleur! "
    } else if (currentEyeColor === "saddlebrown") {
        opmerking = "Deze kleur is echt prachtig voor mij! "
    } else if (currentEyeColor === "pink") {
        opmerking = "Wat een schattige girly oogkleur :) "
    }
    // lippen
    if (currentLipColor === "lightcoral") {
        opmerking = "Jouw lichte lippen zijn zo schattig! ";
    } else if (currentLipColor === "deeppink") {
        opmerking = "Roze lippen staan je echt fantastisch! ";
    } else if (currentLipColor === "darkred") {
        opmerking = "Die donker rode lippen maken je echt uniek! ";
    } else if (currentLipColor === "brown") {
        opmerking = "Deze lippen geven de rest van de look een pop! ";
    } else if (currentLipColor === "magenta") {
        opmerking = "Deze is wel heel fel he, maar u rock it! ";
    }

    // haar
    if (currentHairColor === "gold") {
        opmerking = "Omg je lijkt nu echt op een Barbie >:(";
    } else if (currentHairColor === "saddlebrown") {
        opmerking = "Hey dit lijkt net op Anouk d'r haar :0";
    } else if (currentHairColor === "darkred") {
        opmerking = "Dit haar staat echt super goed bij je! ";
    } else if (currentHairColor === "chocolate") {
        opmerking = "Dit is een beetje oranje, heel schattig ";
    } else if (currentHairColor === "pink") {
        opmerking = "Je pink haar past perfect bij je! ";
    }
    return opmerking.trim();
}

function giveOpmerking(opmerking) {
    console.log("Opmerking:", opmerking);
    const contentSection = document.getElementById("content");
    const existingOpmerkingHeader = contentSection.querySelector("h2");

    if (existingOpmerkingHeader) {
        existingOpmerkingHeader.textContent = ""; 
        existingOpmerkingHeader.textContent = opmerking; 
    } else {
        const opmerkingHeader = document.createElement("h2");
        opmerkingHeader.textContent = opmerking;
        opmerkingHeader.id = "opmerking";
        contentSection.appendChild(opmerkingHeader);
    }
}

// Event listeners voor de knoppen
eyeButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingEyeColor(color);
        const newOpmerking = updateOpmerking(); // Update opmerking
        giveOpmerking(newOpmerking);
    });
});

lipButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingLipColor(color);
        const newOpmerking = updateOpmerking(); // Update opmerking
        giveOpmerking(newOpmerking);
    });
});

hairButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingHairColor(color);
        const newOpmerking = updateOpmerking(); // Update opmerking
        giveOpmerking(newOpmerking);
    });
});
