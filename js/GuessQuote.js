 /*
 --------------------------------------------------------------------------
 init tableau
 --------------------------------------------------------------------------
 */


 let TabLegend = [
    {image : '../image/perso/alter.webp', type : 'Skirmisher', agent : 'Alter',sexe: 'f', date: '2021'},
    {image : '../image/perso/ash.webp', type : 'Assault', agent : 'Ash',sexe: 'f', date: '2021'},
    {image : '../image/perso/ballistic.webp', type : 'Assault', agent : 'Ballistic',sexe: 'h',date: '2023'},
    {image : '../image/perso/bangalore.webp', type : 'Assault', agent : 'Bangalore',sexe: 'f', date:'2019'},
    {image : '../image/perso/bloodhound.webp', type : 'Recon', agent : 'Bloodhound', sexe: 'u', date:'2019'},
    {image : '../image/perso/catalyst.webp', type : 'Controller', agent : 'Catalyst',sexe: 'f', date:'2023'},
    {image : '../image/perso/caustic.webp', type : 'Controller', agent : 'Caustic',sexe: 'h', date:'2019'},
    {image : '../image/perso/conduit.png', type : 'Support', agent : 'Conduit',sexe: 'f',date: '2023'},
    {image : '../image/perso/crypto.webp', type : 'Recon', agent : 'Crypto',sexe: 'h', date: '2019'},
    {image : '../image/perso/fuse.webp', type : 'Assault', agent : 'Fuse', sexe: 'h',date: '2021'},
    {image : '../image/perso/gibi.webp', type : 'Support', agent : 'Gibraltar', sexe: 'h',date:'2019'},
    {image : '../image/perso/horizon.webp', type : 'Skirmisher', agent : 'Horizon', sexe: 'f',date:'2020'},
    {image : '../image/perso/lifeline.png', type : 'Support', agent : 'Lifeline', sexe: 'f',date:'2019'},
    {image : '../image/perso/loba.webp', type : 'Support', agent : 'Loba', sexe: 'f',date:'2020'},
    {image : '../image/perso/madmaggie.png', type : 'Assault', agent : 'Mad Maggie', sexe: 'f',date:'2022'},
    {image : '../image/perso/mirage.png', type : 'Support', agent : 'Mirage', sexe: 'h',date:'2019'},
    {image : '../image/perso/newcastle.webp', type : 'Support', agent : 'Newcastle', sexe: 'h',date:'2022'},
    {image : '../image/perso/octane.webp', type : 'Skirmisher', agent : 'Octane', sexe: 'h',date:'2019'},
    {image : '../image/perso/pathfinder.webp', type : 'Skirmisher', agent : 'Pathfinder', sexe: 'h',date:'2019'},
    {image : '../image/perso/rampart.webp', type : 'Controller', agent : 'Rampart', sexe: 'f',date:'2020'},
    {image : '../image/perso/revenant.webp', type : 'Skirmisher', agent : 'Revenant', sexe: 'h',date:'2020'},
    {image : '../image/perso/seer.png', type : 'Recon', agent : 'Seer', sexe: 'h',date:'2021'},
    {image : '../image/perso/valkyrie.webp', type : 'Skirmisher', agent : 'Valkyrie', sexe: 'f',date:'2021'},
    {image : '../image/perso/vantage.webp', type : 'Recon', agent : 'Vantage', sexe: 'f',date:'2022'},
    {image : '../image/perso/wattson.webp', type : 'Controller', agent : 'Wattson', sexe: 'f',date:'2019'},
    {image : '../image/perso/wraith.webp', type : 'Assault', agent : 'Wraith', sexe: 'f',date:'2019'}
];



let TabQuote = [
    { agent : 'Ash',quote : "See your imperfections in your enemies, then crush them."},
    { agent : 'Ash',quote : "True mastery can't be programmed."},
    { agent : 'Ash',quote : "You're fortunate. I have much to teach you."},
    { agent : 'Ash',quote : "Fortunately for you, you are not my target today."},
    { agent : 'Ash',quote : "Victory is assured so long as you follow my lead."},
    { agent : 'Ash',quote : "Rest assured I will accept nothing less than perfection."},
    { agent : 'Ash',quote : "That little voice holding you back? Kill it."},
    { agent : 'Ash',quote : "Cleave through weakness... and the weak."},
    { agent : 'Ash',quote : "Your death will come with speed and precision. That is the skill of a Pilot."},
    { agent : 'Ash',quote : "Do not cross me. Or my blade will cross you."},
    { agent : 'Ash',quote : "I am the master of my fate. And yours."},
    { agent : 'Ash',quote : "I see my reputation precedes me."},
    { agent : 'Ash',quote : "Cherish the lesson you're about to learn, if you survive it."},
    { agent : 'Ash',quote : "Let nothing distract you from the fight. That would spoil the fun."},
    { agent : 'Ash',quote : "I have crushed far more impressive fighters than you."},
    { agent : 'Ash',quote : "Many have made the mistake of crossing me. Many more will make it today."},
    { agent : 'Ash',quote : "Pay attention. Taking notes of my techniques will benefit you."},
    { agent : 'Ash',quote : "Pilots fight differently. Observe"},
    { agent : 'Ash',quote : "The best revenge is cold as steel."},
    { agent : 'Ash',quote : "The competition is lacking. I've had no choice but to step in personally."},
    { agent : 'Ash',quote : "You have a rare opportunity to see a Pilot at work."},
    { agent : 'Ash',quote : "You have limited time to impress me, Legends."},
    { agent : 'Ash',quote : "Your mind should be as sharp as your blade. It's clear you lack both."},
    { agent : 'Ash',quote : "Blades, bullets, or bare hands - one was always going to find you."},
    { agent : 'Ash',quote : "Consider yourself lucky. There are more creative ways to die."},
    { agent : 'Ash',quote : "A mind is like a blade. Mine is honed, yours was dull."},
    { agent : 'Ash',quote : "Some of us are too weak to persist... without a pulse."},
    { agent : 'Ash',quote : "You call yourself a Legend? How... unwarranted."},
    { agent : 'Ash',quote : "Your will to fight is admirable. But in this case, pointless."},
    { agent : 'Ash',quote : "Many enemies killed. I’m happy to provide more."},
    { agent : 'Ash',quote : "Focus. Do not let them best you again."},
    { agent : 'Ballistic',quote : "Suppose we can't settle this with a round of darts. More's the pity."},
    /*
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    { agent : 'Ballistic',quote : },
    */
    ];

let TabReponse = [];

let TabProposition = [];



/*
-------------------------------------------------------------------------------
init attribut utile
-------------------------------------------------------------------------------
*/

const line = document.getElementById("Quote");

let Quote;

let TotalTry = 0;

let trouvee = false;

let SelectedProposition = 0;

const ListProposition = document.getElementById("no-result");

const recherche = document.getElementById("input-search");

const ButtonSubmit = document.getElementById("submit");

const bonneReponse = document.getElementById("display-good-results");

let i = 0;

let ListPropositionTab = document.querySelectorAll("#no-result ul li");

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
 * pour afficher l'image et sauvegarder la citation correspondant
 */

if(!cookieExists('LegendGuessQuote')){
    let rand = Math.random() * TabQuote.length | 0;
    let rValue = TabQuote[rand];
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let tempsCookie = Math.floor((midnight - now) / 1000)
    document.cookie = 'LegendGuessQuote=' + JSON.stringify(rValue) + '; max-age=' + tempsCookie;
}else{
    if (cookieExists('GuessQuoteAttempts')) {
        try {
            TabReponse = getCookie('GuessQuoteAttempts');
        } catch (e) {
            TabReponse = [];
        }
    }
}
line.textContent = getCookie('LegendGuessQuote').quote;

/*
--------------------------------------------------------------------------------
validation perso
--------------------------------------------------------------------------------
*/
ButtonSubmit.addEventListener('click' , () =>{
    if(recherche.value.toUpperCase() === getCookie('LegendGuessQuote').agent.toUpperCase()){
        recherche.disabled = "true";
        trouvee = true;
        TotalTry++;
        let proposition = null;
        TabLegend.forEach(perso =>{
            if(perso.agent.toUpperCase() === getCookie('LegendGuessQuote').agent.toUpperCase()){
                proposition = perso;
            }
        })
        TabReponse.push(proposition);
        let now = new Date();
        let midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        let tempsCookie = Math.floor((midnight - now) / 1000);
        document.cookie = 'GuessQuoteAttempts=' + JSON.stringify(TabReponse) + '; max-age=' + tempsCookie;
        affichage(proposition);
        now = new Date();
        midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        tempsCookie = Math.floor((midnight - now) / 1000);
        document.cookie = 'GuessQuote=true; max-age=' + tempsCookie;
    }
    else{
        ajouterTabreponse();
        affichage();
    }
    recherche.value = "";
})



const ajouterTabreponse = () =>{
    let proposition = null;
    TabLegend.forEach(perso =>{
        if(perso.agent.toUpperCase() == recherche.value.toUpperCase()){
            proposition = perso;
        }
    })
    if(!proposition) return;
    
    const dejaPropose = TabReponse.some(reponse => 
        reponse.agent.toUpperCase() === proposition.agent.toUpperCase()
    );
    if(!dejaPropose){
        TotalTry++;
        TabReponse.push(proposition); 
        let now = new Date();
        let midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        let tempsCookie = Math.floor((midnight - now) / 1000);
        document.cookie = 'GuessQuoteAttempts=' + JSON.stringify(TabReponse) + '; max-age=' + tempsCookie;
    }
}

const affichage = ( perso=null ) =>{
    if(!trouvee){
        const TabReponseReverse = TabReponse.reverse();
        const afficheproposition = document.getElementById("display-results");
        afficheproposition.innerHTML = "";
        TabReponseReverse.forEach(reponse =>{
            const divConteneur = document.createElement("div");
            const divimg = document.createElement("img");
            divimg.src = reponse.image;
            divimg.alt="proposition";
            const divagent = document.createElement("h3");
            divagent.textContent = reponse.agent;
            divConteneur.appendChild(divimg);
            divConteneur.appendChild(divagent);
            divimg.style.width = "30%";
            divimg.style.height = "50%";
            divConteneur.style.display = "flex";
            divConteneur.style.justifyContent = "center";
            divConteneur.style.alignItems = "center";
            if(reponse.agent.toUpperCase() == getCookie('LegendGuessQuote').agent.toUpperCase()){
                divConteneur.style.backgroundColor = "green";
            }else{
                divConteneur.style.backgroundColor = "red";
            }
            divConteneur.style.width = "30%";
            afficheproposition.appendChild(divConteneur);
        })
        ///////
        afficheproposition.style.position = "relative";
        afficheproposition.style.zIndex = "0";
        ///////
        TabReponse.reverse();
        ListProposition.style.display = "none";
    }
    else if(perso!=null){
        const DivBonneReponse = document.createElement("div");
        const divimg = document.createElement("img");
        divimg.src = perso.image;
        divimg.alt = "image gg";
        const divagent = document.createElement("h3");
        divagent.textContent = perso.agent;
        bonneReponse.appendChild(DivBonneReponse);
        DivBonneReponse.appendChild(divimg);
        DivBonneReponse.appendChild(divagent);
        divimg.style.width = "30%";
        divimg.style.height = "50%";
        DivBonneReponse.style.display = "flex";
        DivBonneReponse.style.justifyContent = "center";
        DivBonneReponse.style.alignItems = "center";
        DivBonneReponse.style.backgroundColor = "Green";
        DivBonneReponse.style.width = "30%";
        DivBonneReponse.style.height = "50%";
        ListProposition.innerHTML="";
        afficherFin(perso);
    }
    recherche.value = "";
}

affichage();

/*
-------------------------------------------------------------------------------
affichage fin de manche une fois la legend trouvé
-------------------------------------------------------------------------------
*/
const afficherFin = (reponse) =>{
    document.getElementById("GG").style.border = "solid green 8px";
    document.getElementById("GG").style.borderRadius = "10px";
    document.getElementById("GG").style.width = "30%";
    document.getElementById("GG").style.background = "black";
    document.getElementById("tout").style.borderRadius = "10px";
    document.getElementById("tout").style.margin = "5%";
    document.getElementById("texteGG").textContent = "GG !";
    document.getElementById("tout").style.display = "flex";
    document.getElementById("tout").style.flexDirection = "column";
    document.getElementById("tout").style.alignItems = "center";
    document.getElementById("nom").textContent = reponse.agent;
    document.getElementById("try").textContent = "TRY : " + getCookie('GuessQuoteAttempts').length;
    document.getElementById("perso").style.display ="flex";
    document.querySelector("#perso img").src = reponse.image;
    document.querySelector("#perso img").alt = "perso";
    document.querySelector("#perso img").style.width = "50%";
    document.querySelector("#perso img").style.height = "50%";
    document.querySelector("#perso img").style.marginRight= "10%";
    document.getElementById("doubleBordure").style.border = "solid white 2px";
    document.getElementById("doubleBordure").style.paddingRight = "150%";
    document.getElementById("doubleBordure").style.paddingLeft = "150%";
    document.getElementById("suivant").textContent = "Map";
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

/*
---------------------------------------------------------------------------------------------
affichage Proposition personnage
---------------------------------------------------------------------------------------------
*/




recherche.addEventListener('keydown',(event)=>{
    if((event.key == 'Enter' || event =='13') && TabProposition.length >= 0){
        let legend = TabProposition[SelectedProposition];
        recherche.value = legend.agent;
        ButtonSubmit.click();
        SelectedProposition = 0;
    }
    else if ((event.key == 'ArrowDown' || event == '40') && TabProposition.length - 1 >= SelectedProposition + 1){
        SelectedProposition++;
    }
    else if ((event.key == 'ArrowUp' || event == '38') && SelectedProposition - 1 >= 0){
        SelectedProposition--;
    }
    document.querySelectorAll("#no-result li").forEach(elt =>{
        if(elt != document.querySelectorAll("#no-result li")[SelectedProposition]){
            elt.style.backgroundColor = "grey";
            elt.style.transitionDuration = "0.5s";
        }
        else{
            elt.style.backgroundColor = "black";
            elt.style.transitionDuration = "0.5s";
        }
    })
})

recherche.addEventListener('input', () =>{
        ajouterProposition();
        printPropal();
})


const ajouterProposition =() =>{
    ListProposition.innerHTML="";
    TabProposition = [] ;
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ListProposition.appendChild(ul);
    if(recherche.value == ""){
        ListProposition.innerHTML="";
        TabProposition = [];
    }
    else{
        TabLegend.forEach(legend =>{
            if(legend.agent.toUpperCase().includes(recherche.value.toUpperCase())){
                const dejaPropose = TabReponse.some(reponse => 
                    reponse.agent.toUpperCase() === legend.agent.toUpperCase()
                );
                if(!dejaPropose && !TabProposition.includes(legend)){
                    TabProposition.push(legend);
                }
            }
        })
    }
}



const printPropal = () =>{
    if(recherche.value == ""){
        ListProposition.style.display = "none";
    }
    else{
        ListProposition.style.display = "block";
        TabProposition.forEach(propal =>{
            const proposition = document.createElement("li");
            proposition.textContent = propal.agent;
            proposition.style.textAlign = "center";
            proposition.style.paddingTop = "5%";
            proposition.style.backgroundColor = "rgb(128,128,128)";
            proposition.style.border = "solid white 2px";
            proposition.style.width = recherche.style.width;
            proposition.style.listStyleType = "none";
            proposition.style.height = "1cm";
            proposition.style.cursor = "pointer";
            ListProposition.appendChild(proposition);
            ListProposition.style.marginBottom = "1%";
            ListProposition.style.position = "absolute";
            ListProposition.style.zIndex = "7";


            // Add mouseenter event listener to apply the hover effect
            proposition.addEventListener('mouseenter', () => {
                proposition.style.backgroundColor = "black";
                proposition.style.transitionDuration = "0.5s";
            });
            // Add mouseleave event listener to remove the hover effect
            proposition.addEventListener('mouseleave', () => {
                proposition.style.backgroundColor = "grey";
                proposition.style.transitionDuration = "0.5s";
            });


            proposition.addEventListener('click', () =>{
                recherche.value = proposition.textContent;
                ButtonSubmit.click();
            });
        })
        let feur =ListProposition.querySelectorAll("#no-result li");
        for(let i=0; i<feur.length;i++){
            feur[i].addEventListener('mouseover', () =>{
                SelectedProposition = i;
            })
        }
        
    }
}

const dessus = (elt) =>{
    elt.style.backgroundColor = "black";
}

const ailleur = (elt) =>{
    elt.style.backgroundColor = "rgb(128,128,128)";
}

if(cookieExists('GuessQuote')){
    let proposition = null;
    TabLegend.forEach(perso => {
        if(perso.agent.toUpperCase() === getCookie('LegendGuessQuote').agent.toUpperCase()){
            proposition = perso;
        }
    });
    if(proposition) {
        affichage(proposition);
        afficherFin(proposition);
        recherche.disabled = true;
        trouvee = true;
    }
}