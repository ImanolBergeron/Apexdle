 /*
 --------------------------------------------------------------------------
 init tableau
 --------------------------------------------------------------------------
 */
let Tabmap = [
    {Map : "Kings Canyon", location : {x: 168, y: 394.5}, img : "../image/guessMap/teste-kingCanyon.png"},
    {Map : "Olympus", location : {x: 574, y: 446}, img : "../image/guessMap/teste-olympus.png"},
    /*{Map : "Storm Point", location : {x: 0, y: 0}, img : ""},
    {Map : "Broken Moon", location : {x: 0, y: 0}, img : ""},
    {Map : "World's Edge", location : {x: 0, y: 0}, img : ""},
    {Map : "E-District", location : {x: 0, y: 0}, img : ""},*/
]


let tabMapimg = [
{Map: "Kings Canyon", mapImg : "../image/maps/kingsCanyon.webp"},
{Map : "Olympus", mapImg : "../image/maps/Olympus.webp"},
{Map : "Storm Point", mapImg : "../image/maps/StormPoint.webp"},
{Map : "Broken Moon", mapImg : "../image/maps/BrokenMoon.webp"},
{Map : "World's Edge",mapImg : "../image/maps/WorldsEdge.webp"},
{Map : "E-District",  mapImg : "../image/maps/EDistrict.webp"},
];

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
let correct = null;

function drawMap() {
    canvas.style.display = 'block';
    ButtonSubmit.style.display = 'block';
    //mapImage.src = getCookie('locationGuessMap').mapImg;
    tabMapimg.forEach(map => {
        if(getCookie('locationGuessMap').Map.toUpperCase() === map.Map.toUpperCase()){
            mapImage.src = map.mapImg;
        }
    });
    mapImage.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
        if (playerGuess) {
            drawMarker(playerGuess.x, playerGuess.y, 'blue');
        }
        if(correct){
            drawMarker(correct.x, correct.y, 'red');
            drawDottedLine(ctx, playerGuess,correct);
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
    //drawMarker(playerGuess.x, playerGuess.y, 'blue');
    console.log(playerGuess.x, playerGuess.y);
});


function submitGuess() {
    if (!playerGuess) {
        return;
    }
    correct = getCookie('locationGuessMap').location;
    drawMarker(correct.x, correct.y, 'red');

    // Calculer la distance (en pixels)
    let distance = Math.sqrt(
    Math.pow(playerGuess.x - correct.x, 2) + Math.pow(playerGuess.y - correct.y, 2)
    );

    // Calculer le score (1000 points max, décroît avec la distance)
    const maxDistance = 500; // Distance max pour 0 point (ajuste selon la taille de la carte)
    let score = Math.max(0, 1000 * (1 - distance / maxDistance));
    score = score - (MultiPerte * 50);

    document.getElementById('submit-guess').style.display = 'none';
    drawDottedLine(ctx,playerGuess,correct);
    afficherFin(distance, score);
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let tempsCookie = Math.floor((midnight - now) / 1000)
    document.cookie ='GuessLocation=' +JSON.stringify(playerGuess)+'; max-age=' + tempsCookie;
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
    tabMapimg.forEach(map => {
        if(getCookie('locationGuessMap').Map.toUpperCase() === map.Map.toUpperCase()){
            document.querySelector("#perso img").src = map.mapImg;
        }
    });
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


function drawDottedLine(ctx, point1, point2, dashLength = 5, gapLength = 5, lineWidth = 4) {
  const x1 = point1.x, y1 = point1.y;
  const x2 = point2.x, y2 = point2.y;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy);
  if (length === 0) return;

  const unitX = dx / length;
  const unitY = dy / length;

  let currentX = x1;
  let currentY = y1;
  let distance = 0;

  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';

  while (distance < length) {
    const segmentEnd = Math.min(distance + dashLength, length);
    const endX = x1 + unitX * segmentEnd;
    const endY = y1 + unitY * segmentEnd;

    ctx.moveTo(currentX, currentY);
    ctx.lineTo(endX, endY);

    distance = segmentEnd + gapLength;
    currentX = x1 + unitX * distance;
    currentY = y1 + unitY * distance;
  }

  ctx.stroke();
}


if(getCookie('GuessLocation')){
    boutons.forEach(button => {
        button.addEventListener('click', () =>{
            if (button.value.toUpperCase() === getCookie('locationGuessMap').Map.toUpperCase()){
                button.click();
            }
        })
    });
    playerGuess = {
        x: null,
        y: null
    };
    playerGuess.x = getCookie('GuessLocation').x
    playerGuess.y = getCookie('GuessLocation').y
    drawMap();
    submitGuess();
}
