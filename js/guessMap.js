 /*
 --------------------------------------------------------------------------
 init tableau
 --------------------------------------------------------------------------
 */
let Tabmap = [
    {Map : "Kings Canyon", location : {x: 0, y: 0}, img : "", mapImg : "../image/maps/kingsCanyon.webp"},
    {Map : "Olympus", location : {x: 0, y: 0}, img : "", mapImg : "../image/maps/Olympus.webp"},
    {Map : "Storm Point", location : {x: 0, y: 0}, img : "", mapImg : "../image/maps/StormPoint.webp"},
    {Map : "Broken Moon", location : {x: 0, y: 0}, img : "", mapImg : "../image/maps/BrokenMoon.webp"},
    {Map : "World's Edge", location : {x: 0, y: 0}, img : "", mapImg : "../image/maps/WorldsEdge.webp"},
    {Map : "E-District", location : {x: 0, y: 0}, img : "", mapImg : "../image/maps/EDistrict.webp"},
]

let TabReponse = [];

let TabProposition = [];

/*
-------------------------------------------------------------------------------
init attribut utile
-------------------------------------------------------------------------------
*/
//element representant l'image du html
const image = document.getElementById("locationImage");

let trouvee = false;

//point relatif a la distance du joueur par rapport au point de l'image
let totalPoints = 0;

//Multiplicateur relatif au nombre de fois ou le joueur s'est trompé de map, enlevera des point multiplier par ce nombre au chiffre final
let MultiPerte = 0;


/*
-------------------------------------------------------------------------------
fonction concernant les cookie
-------------------------------------------------------------------------------
*/

function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return JSON.parse(decodeURIComponent(value));
        }
    }
    return null;
}


function cookieExists(name) {
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}

/**
 * pour afficher l'image et sauvegarder la localisation correspondante correspondant
 */
if(!cookieExists('locationGuessMap')){
    let rand = Math.random() * Tabmap.length | 0;
    let rValue = Tabmap[rand];
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let tempsCookie = Math.floor((midnight - now) / 1000)
    document.cookie = 'locationGuessMap=' + JSON.stringify(rValue) + '; max-age=' + tempsCookie;
}

image.src = getCookie('locationGuessMap').img;
console.log(getCookie('locationGuessMap'));

/*
-------------------------------------------------------------------------------
fonction util pour fonctionnement
-------------------------------------------------------------------------------
*/

const boutons = document.querySelectorAll('button');
boutons.forEach(button => {
    button.addEventListener('click', () =>{
        if (button.value.toUpperCase() === getCookie('locationGuessMap').Map.toUpperCase()){
            document.getElementById("containerRow").style.display = "none";
            console.log("BONNE MAP !!!");
            document.getElementById("location").style.justifyContent = "space-evenly";
            drawMap();
            console.log(MultiPerte);
            //TODO
            
        }
        else{
            MultiPerte += 1;
            button.style.display = "none";
        }
    });
});

const canvas = document.getElementById('map-canvas');
const ctx = canvas.getContext('2d');
let mapImage = new Image();
let ButtonSubmit = document.getElementById('submit-guess');
let playerGuess = null;

function drawMap() {
    canvas.style.display = 'block';
    ButtonSubmit.style.display = 'block';
    mapImage.src = getCookie('locationGuessMap').mapImg;
    mapImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
        if (playerGuess) {
            drawMarker(playerGuess.x, playerGuess.y, 'blue');
        }
    };
}

function drawMarker(x, y, color) {
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }

// Gérer le clic sur le canvas
canvas.addEventListener('click', (event) => {
    //if (!selectedMap) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    playerGuess = {
        x: (event.clientX - rect.left) * scaleX,
        y: (event.clientY - rect.top) * scaleY
    };
    drawMap();
    drawMarker(playerGuess.x, playerGuess.y, 'blue');
    console.log(playerGuess.x, playerGuess.y);
});


function submitGuess() {
    if (!playerGuess) {
        return;
    }
    const correct = getCookie('locationGuessMap').location;
    drawMarker(correct.x, correct.y, 'red');

    // Calculer la distance (en pixels)
    const distance = Math.sqrt(
    Math.pow(playerGuess.x - correct.x, 2) + Math.pow(playerGuess.y - correct.y, 2)
    );

    // Calculer le score (1000 points max, décroît avec la distance)
    const maxDistance = 500; // Distance max pour 0 point (ajuste selon la taille de la carte)
    let score = Math.max(0, 1000 * (1 - distance / maxDistance));
    score = score - (MultiPerte * 50);

    document.getElementById('submit-guess').style.display = 'none';

    afficherFin(distance, score);
}

ButtonSubmit.addEventListener('click', () => {
    submitGuess();
});

const afficherFin = (distance, score) =>{
    document.getElementById("GG").style.border = "solid green 8px";
    if(score < 750 ){
        document.getElementById("GG").style.border = "solid orange 8px";
    }
    if(score === 0 ){
        document.getElementById("GG").style.border = "solid red 8px";
    }
    
    document.getElementById("GG").style.borderRadius = "10px";
    document.getElementById("GG").style.width = "30%";
    document.getElementById("GG").style.background = "black";
    document.getElementById("tout").style.borderRadius = "10px";
    document.getElementById("tout").style.margin = "5%";
    document.getElementById("texteGG").textContent = "GG !";
    document.getElementById("tout").style.display = "flex";
    document.getElementById("tout").style.flexDirection = "column";
    document.getElementById("tout").style.alignItems = "center";
    document.getElementById("nom").textContent = "distance : " + distance.toFixed(2);
    document.getElementById("try").textContent = "score : " + score.toFixed(0) + " / 1000";
    document.getElementById("perso").style.display ="flex";
    document.querySelector("#perso img").src = getCookie('locationGuessMap').mapImg;
    document.querySelector("#perso img").alt = "perso";
    document.querySelector("#perso img").style.width = "30%";
    document.querySelector("#perso img").style.height = "30%";
    document.querySelector("#perso img").style.marginRight= "10%";
    document.getElementById("doubleBordure").style.border = "solid white 2px";
    document.getElementById("doubleBordure").style.paddingRight = "150%";
    document.getElementById("doubleBordure").style.paddingLeft = "150%";
    document.getElementById("suivant").textContent = "Legend";
    document.getElementById("suivant").style.textAlign = "center";
    document.getElementById("suivant").style.color = "white";
    document.getElementById("suivant").style.padding = "5%";
    document.getElementById("vide").style.margin = "5%";
    document.getElementById("vide").style.padding = "5%";
    document.getElementById("vide").scrollIntoView({behavior: 'smooth', inline: 'end'});
    document.getElementById("vide").style.margin = "1%";
    document.getElementById("vide").style.padding = "1%";
    document.getElementById("button").style.marginTop = "5%";
    document.getElementById("button").style.display = "flex";
    document.getElementById("button").style.justifyContent = "center";
}
