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

let TabReponse = [];

let TabProposition = [];



/*
-------------------------------------------------------------------------------
init attribut utile
-------------------------------------------------------------------------------
*/



let trouvee = false;

let SelectedProposition = 0;

const ListProposition = document.getElementById("no-result");

const recherche = document.getElementById("input-search");

const ButtonSubmit = document.getElementById("submit");

const bonneReponse = document.getElementById("display-good-results");

let ListPropositionTab = document.querySelectorAll("#no-result ul li");


recherche.value = "";


console.log(getCookie('LegendGuessLegends'));
console.log(getCookie('GuessLegendsAttempts'));

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
 * pour afficher l'image et sauvegarder l'agent correspondant
 */
if(!cookieExists('LegendGuessLegends')){
    let rand = Math.random() * TabLegend.length | 0;
    let rValue = TabLegend[rand];
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let tempsCookie = Math.floor((midnight - now) / 1000)
    document.cookie ='LegendGuessLegends=' + JSON.stringify(rValue) + '; max-age=' + tempsCookie;
}else{
    if (cookieExists('GuessLegendsAttempts')) {
        try {
            TabReponse = (getCookie('GuessLegendsAttempts'));
        } catch (e) {
            TabReponse =[];
        }
        console.log("teste : ");
        console.log(TabReponse);
    }
    
}
    




/*
--------------------------------------------------------------------------------
validation perso
--------------------------------------------------------------------------------
*/
ButtonSubmit.addEventListener('click' , () =>{
    if(recherche.value.toUpperCase() === getCookie('LegendGuessLegends').agent.toUpperCase()){
        recherche.disabled = "true";
        trouvee = true;
    }
    affichageTour(getCookie('LegendGuessLegends'));
    ajouterTabreponse();
    affichage();
    if(trouvee){
        afficherFin(getCookie('LegendGuessLegends'));
        document.cookie ='GuessLegends='+ true;
    }
    recherche.value = "";
})


/*
--------------------------------------------------------------------------------
ajout du perso voulu dans le tableau des reponse
--------------------------------------------------------------------------------
*/
const ajouterTabreponse = () =>{
    let proposition = null;
    TabLegend.forEach(perso =>{
        if(perso.agent.toUpperCase() == recherche.value.toUpperCase()){
            proposition = perso;
        }
    })
    let bool = false;
    TabReponse.forEach(reponse =>{
        if(reponse == proposition){
           bool = true;
        }
    })
    if(!bool && proposition != null && !TabReponse.includes(proposition)){
        TabReponse.push(proposition);
        let now = new Date();
        let midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        let tempsCookie = Math.floor((midnight - now) / 1000)
        document.cookie = 'GuessLegendsAttempts=' + JSON.stringify(TabReponse) + '; max-age=' + tempsCookie;
        console.log(getCookie('GuessLegendsAttempts'));
    }
    
}


/*
--------------------------------------------------------------------------------
gere l'affichage du jeu 
--------------------------------------------------------------------------------
*/
const affichage = () =>{
    const TabReponseReverse = TabReponse.reverse();
    const afficheproposition = document.getElementById("display-results");
    afficheproposition.innerHTML = "";
    TabReponseReverse.forEach(reponse =>{
        const DivConteneurAgent = document.createElement("tr");
        DivConteneurAgent.classList.add("LigneInfoAgent");
        const DivimgAgent = document.createElement("td");
        DivimgAgent.classList.add("CaseImage");
        const DivNomAgent = document.createElement("td");
        DivNomAgent.classList.add("CaseNomAgent");
        const DivSexAgent = document.createElement("td");
        DivSexAgent.classList.add("CaseSexAgent");
        const DivRoleAgent = document.createElement("td");
        DivRoleAgent.classList.add("CaseRoleAgent");
        const DivDateSortie = document.createElement("td");
        DivDateSortie.classList.add("CaseDateAgent");


        const Nom = document.createElement("p");
        Nom.textContent = reponse.agent;
        DivNomAgent.appendChild(Nom);
        if(Nom.textContent.toUpperCase() == getCookie('LegendGuessLegends').agent.toUpperCase()){DivNomAgent.style.backgroundColor = "green";}
        else{DivNomAgent.style.backgroundColor = "red";}


        const img = document.createElement("img");
        img.classList.add("ImageDansCase");
        img.src = reponse.image;
        img.alt = "imgPropal";
        DivimgAgent.appendChild(img);
        DivimgAgent.style.backgroundColor = DivNomAgent.style.backgroundColor;


        DivConteneurAgent.appendChild(DivimgAgent);
        DivConteneurAgent.appendChild(DivNomAgent);


        const Sex = document.createElement("p");
        if(reponse.sexe =='f'){Sex.textContent = "Female";}
        else if(reponse.sexe =='h'){Sex.textContent = "Male"}
        else{Sex.textContent = "Unknown"}
        DivSexAgent.appendChild(Sex);
        if(reponse.sexe == getCookie('LegendGuessLegends').sexe){DivSexAgent.style.backgroundColor = "green";}
        else{DivSexAgent.style.backgroundColor = "red";}
        DivConteneurAgent.appendChild(DivSexAgent);


        const role = document.createElement("p");
        role.textContent = reponse.type;
        DivRoleAgent.appendChild(role);
        if(role.textContent == getCookie('LegendGuessLegends').type){DivRoleAgent.style.backgroundColor = "green";}
        else{DivRoleAgent.style.backgroundColor = "red";}
        DivConteneurAgent.appendChild(DivRoleAgent);


        const relDate = document.createElement("p");
        relDate.textContent = reponse.date;
        DivDateSortie.appendChild(relDate);
        if(relDate.textContent == getCookie('LegendGuessLegends').date){DivDateSortie.style.backgroundColor = "green";}
        else{DivDateSortie.style.backgroundColor = "red";}
        DivConteneurAgent.appendChild(DivDateSortie);


        DivConteneurAgent.style.display = "flex";
        afficheproposition.appendChild(DivConteneurAgent);
        
    })
    afficheproposition.style.display = "flex"; 
    afficheproposition.style.flexDirection ="column";
    afficheproposition.style = document.getElementById("caracteristique").style;
    ListProposition.style.display = "none";
    recherche.value = "";
    TabReponse = TabReponseReverse.reverse();
}

affichage();

/*
-------------------------------------------------------------------------------
affichage du jeu sur le tour en cours
-------------------------------------------------------------------------------
*/
const affichageTour=(askedValue) =>{ 
    const afficheproposition = document.getElementById("display-results");
    afficheproposition.innerHTML = "";
    const DivConteneurAgent = document.createElement("div");
        const DivimgAgent = document.createElement("div");
        const DivNomAgent = document.createElement("div");
        const DivSexAgent = document.createElement("div");
        const DivRoleAgent = document.createElement("div");
        const DivDateSortie = document.createElement("div");

        const Nom = document.createElement("p");
        Nom.textContent = askedValue.agent;
        DivNomAgent.appendChild(Nom);
        if(Nom.textContent.toUpperCase() == getCookie('LegendGuessLegends').agent.toUpperCase()){DivNomAgent.style.backgroundColor = "green";}
        else{DivNomAgent.style.backgroundColor = "red";}
        DivNomAgent.style.width = "20%";
        DivNomAgent.style.maxHeight = "150px";
        DivNomAgent.style.border = "solid white 1px";
        DivNomAgent.style.margin = "1.5%";
        Nom.style.textAlign = "center";

        const img = document.createElement("img");
        img.src = askedValue.image;
        img.alt = "imgPropal";
        DivimgAgent.appendChild(img);
        DivimgAgent.style.backgroundColor = DivNomAgent.style.backgroundColor;
        DivimgAgent.style.width = "20%";
        DivimgAgent.style.maxHeight = "150px";
        DivimgAgent.style.margin = "1%";
        DivimgAgent.style.border = "solid white 1px";
        DivimgAgent.style.display = "flex";
        img.style.maxWidth = "100%";
        img.style.maxHeight = "80%";
        img.style.alignSelf = "flex-end";
        DivConteneurAgent.appendChild(DivimgAgent);
        DivimgAgent.style.transitionDuration = "2s";
        setInterval(null, 2000);

        DivConteneurAgent.appendChild(DivNomAgent);
        setInterval(null, 2000);
        const Sex = document.createElement("p");
        if(askedValue.sexe =='f'){Sex.textContent = "Female";}
        else if(askedValue.sexe =='h'){Sex.textContent = "Male"}
        else{Sex.textContent = "Unknown"}
        DivSexAgent.appendChild(Sex);
        if(askedValue.sexe == getCookie('LegendGuessLegends').sexe){DivSexAgent.style.backgroundColor = "green";}
        else{DivSexAgent.style.backgroundColor = "red";}
        DivSexAgent.style.width = "20%";
        DivSexAgent.style.maxHeight = "150px";
        DivSexAgent.style.border = "solid white 1px";
        DivSexAgent.style.margin = "1.5%";
        Sex.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivSexAgent);

        const role = document.createElement("p");
        role.textContent = askedValue.type;
        DivRoleAgent.appendChild(role);
        if(role.textContent == getCookie('LegendGuessLegends').type){DivRoleAgent.style.backgroundColor = "green";}
        else{DivRoleAgent.style.backgroundColor = "red";}
        DivRoleAgent.style.width = "20%";
        DivRoleAgent.style.maxHeight = "150px";
        DivRoleAgent.style.border = "solid white 1px";
        DivRoleAgent.style.margin = "1.5%";
        role.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivRoleAgent);

        const relDate = document.createElement("p");
        relDate.textContent = askedValue.date;
        DivDateSortie.appendChild(relDate);
        if(relDate.textContent == getCookie('LegendGuessLegends').date){DivDateSortie.style.backgroundColor = "green";}
        else{DivDateSortie.style.backgroundColor = "red";}
        DivDateSortie.style.width = "20%";
        DivDateSortie.style.maxHeight = "150px";
        DivDateSortie.style.border = "solid white 1px";
        DivDateSortie.style.margin = "1.5%";
        relDate.style.textAlign = "center";
        DivConteneurAgent.appendChild(DivDateSortie);

        DivConteneurAgent.style.display = "flex";
        afficheproposition.appendChild(DivConteneurAgent);
}


/*
-------------------------------------------------------------------------------
affichage fin de manche une fois la legend trouvé
-------------------------------------------------------------------------------
*/
const afficherFin = (reponse) =>{
    recherche.disabled = "true";
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
    document.getElementById("try").textContent = "TRY : " + TabReponse.length;//////////////////////////////////////////////////////
    document.getElementById("perso").style.display ="flex";
    document.querySelector("#perso img").src = reponse.image;
    document.querySelector("#perso img").alt = "perso";
    document.querySelector("#perso img").style.width = "50%";
    document.querySelector("#perso img").style.height = "50%";
    document.querySelector("#perso img").style.marginRight= "10%";
    document.getElementById("doubleBordure").style.border = "solid white 2px";
    document.getElementById("doubleBordure").style.paddingRight = "150%";
    document.getElementById("doubleBordure").style.paddingLeft = "150%";
    document.getElementById("suivant").textContent = "Weapon";
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


if(getCookie('GuessLegends')){
    afficherFin(getCookie('LegendGuessLegends'));
}

/*
---------------------------------------------------------------------------------------------
condition d'affichage du tableau de Proposition personnage
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


/*
--------------------------------------------------------------------------------
ajout au tableau des proposition si les caractere rechercher sont dans le nom
--------------------------------------------------------------------------------
*/
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
                if(!TabReponse.includes(legend) && !TabProposition.includes(legend)){
                    TabProposition.push(legend);
                }
            }
        })
        TabProposition = TabProposition.filter(proposition => !TabReponse.includes(proposition));
    }
}


/*
--------------------------------------------------------------------------------
affichage du tableau de proposition
--------------------------------------------------------------------------------
*/
const printPropal = () =>{
    if(recherche.value == ""){
        ListProposition.style.display = "none";
    }
    else{
        ListProposition.style.display = "block";
        ListProposition.style.width = "20%";
        TabProposition.forEach(propal =>{
                const proposition = document.createElement("li");
                proposition.textContent = propal.agent;
                proposition.style.color = "white";
                proposition.textShadow = "5px 5px 5px black";
                proposition.style.textAlign = "center";
                proposition.style.paddingTop = "5%";
                proposition.style.backgroundColor = "rgb(128,128,128)";
                proposition.style.border = "solid white 2px";
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

/*
--------------------------------------------------------------------------------
hover sur un element de la liste de propal
--------------------------------------------------------------------------------
*/
const dessus = (elt) =>{
    elt.style.backgroundColor = "black";
}

/*
--------------------------------------------------------------------------------
tous sauf hover, sur un element de la liste de propal
--------------------------------------------------------------------------------
*/
const ailleur = (elt) =>{
    elt.style.backgroundColor = "rgb(128,128,128)";
}


