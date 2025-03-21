 /*
 --------------------------------------------------------------------------
 init tableau
 --------------------------------------------------------------------------
 */
 let TabPro = [
    {name : 'Blinkzr', nationality : 'Canada', team : 'Oblivion',status: 'Active', age: '22', entryYear : '2022', img :''},
    {name : 'Birt', nationality : 'Canada', team : 'Team FiRE',status: 'Retired', age: '26', entryYear : '2019', img :''},
    {name : 'CcobraxX', nationality : 'Canada', team : 'CCE UCX',status: 'Active', age: '24', entryYear : '2022', img :''},
    {name : 'Chris', nationality : 'Canada', team : 'Moon Boy',status: 'Retired', age: '25', entryYear : '2019', img :''},
    {name : 'Coce', nationality : 'Canada', team : 'Eternal Esport Club',status: 'Active', age: '22', entryYear : '2022', img :''},
    {name : 'Crank', nationality : 'Canada', team : 'Luminosity Gaming',status: 'Retired', age: '25', entryYear : '2019', img :''},
    {name : 'Crust', nationality : 'Canada', team : 'BR Demonz',status: 'Active', age: '22', entryYear : '2019', img :'../image/Pro/crust.jpg'},
];

let TabReponse = [];

let TabProposition = [];


const imgBase = '../image/NoImage.png';


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
 * pour sauvegarder l'agent correspondant
 */
if(!cookieExists('PlayerGuessPro')){
    let rand = Math.random() * TabPro.length | 0;
    let rValue = TabPro[rand];
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let tempsCookie = Math.floor((midnight - now) / 1000)
    document.cookie ='PlayerGuessPro=' + JSON.stringify(rValue) + '; max-age=' + tempsCookie;
}else{
    if (cookieExists('GuessProAttempts')) {
        try {
            TabReponse = getCookie('GuessProAttempts');
        } catch (e) {
            TabReponse =[];
        }
    }
    
}

/*
--------------------------------------------------------------------------------
validation perso
--------------------------------------------------------------------------------
*/
ButtonSubmit.addEventListener('click' , () =>{
    if(recherche.value.toUpperCase() === getCookie('PlayerGuessPro').name.toUpperCase()){
        recherche.disabled = "true";
        trouvee = true;
    }
    ajouterTabreponse();
    affichage();
    if(trouvee){
        afficherFin(getCookie('PlayerGuessPro'));
        document.cookie ='GuessPro='+ true;
    }
    recherche.value = "";
})


/*
--------------------------------------------------------------------------------
ajout du perso voulu dans le tableau des reponse
--------------------------------------------------------------------------------
*/
const ajouterTabreponse = () => {
    let proposition = null;
    TabPro.forEach(perso => {
        if (perso.name.toUpperCase() === recherche.value.toUpperCase()) {
            proposition = perso;
        }
    });
    if (!proposition) return;
    const dejaPropose = TabReponse.some(reponse => 
        reponse.name.toUpperCase() === proposition.name.toUpperCase()
    );
    if (!dejaPropose) {
        TabReponse.push(proposition);
        let now = new Date();
        let midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        let tempsCookie = Math.floor((midnight - now) / 1000);
        document.cookie = 'GuessProAttempts=' + JSON.stringify(TabReponse) + '; max-age=' + tempsCookie;
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
        const DivConteneurJoueur = document.createElement("tr");
        DivConteneurJoueur.classList.add("LigneInfoAgent");
        const DivNomJoueur = document.createElement("td");
        DivNomJoueur.classList.add("CasePro");
        const DivNationalityJoueur = document.createElement("td");
        DivNationalityJoueur.classList.add("CasePro");
        const DivTeamJoueur = document.createElement("td");
        DivTeamJoueur.classList.add("CasePro");
        const DivStatusJoueur = document.createElement("td");
        DivStatusJoueur.classList.add("CasePro");
        const DivAgeJoueur = document.createElement("td");
        DivAgeJoueur.classList.add("CasePro");
        const DivEntryDateJoueur = document.createElement("td");
        DivEntryDateJoueur.classList.add("CasePro");

        const Nom = document.createElement("p");
        Nom.textContent = reponse.name;
        DivNomJoueur.appendChild(Nom);
        if(Nom.textContent.toUpperCase() == getCookie('PlayerGuessPro').name.toUpperCase()){DivNomJoueur.style.backgroundColor = "green";}
        else{DivNomJoueur.style.backgroundColor = "red";} 

        const nationality = document.createElement("p");
        nationality.textContent = reponse.nationality;
        DivNationalityJoueur.appendChild(nationality);
        if(nationality.textContent.toUpperCase() == getCookie('PlayerGuessPro').nationality.toUpperCase()){DivNationalityJoueur.style.backgroundColor = "green";}
        else{DivNationalityJoueur.style.backgroundColor = "red";}

        const Team = document.createElement("p");
        Team.textContent = reponse.team;
        DivTeamJoueur.appendChild(Team);
        if(Team.textContent.toUpperCase() == getCookie('PlayerGuessPro').team.toUpperCase()){DivTeamJoueur.style.backgroundColor = "green";}
        else{DivTeamJoueur.style.backgroundColor = "red";}

        const Status = document.createElement("p");
        Status.textContent = reponse.status;
        DivStatusJoueur.appendChild(Status);
        if(Status.textContent.toUpperCase() == getCookie('PlayerGuessPro').status.toUpperCase()){DivStatusJoueur.style.backgroundColor = "green";}
        else{DivStatusJoueur.style.backgroundColor = "red";}

        const Age = document.createElement("p");
        Age.textContent = reponse.age;
        DivAgeJoueur.appendChild(Age);
        if(Age.textContent.toUpperCase() == getCookie('PlayerGuessPro').age.toUpperCase()){DivAgeJoueur.style.backgroundColor = "green";}
        else{DivAgeJoueur.style.backgroundColor = "red";}

        const Entry = document.createElement("p");
        Entry.textContent = reponse.entryYear;
        DivEntryDateJoueur.appendChild(Entry);
        if(Entry.textContent.toUpperCase() == getCookie('PlayerGuessPro').entryYear.toUpperCase()){DivEntryDateJoueur.style.backgroundColor = "green";}
        else{DivEntryDateJoueur.style.backgroundColor = "red";}

        DivConteneurJoueur.appendChild(DivNomJoueur);
        DivConteneurJoueur.appendChild(DivNationalityJoueur);
        DivConteneurJoueur.appendChild(DivTeamJoueur);
        DivConteneurJoueur.appendChild(DivStatusJoueur);
        DivConteneurJoueur.appendChild(DivAgeJoueur);
        DivConteneurJoueur.appendChild(DivEntryDateJoueur);

        afficheproposition.appendChild(DivConteneurJoueur);
        
    })
    afficheproposition.style = document.getElementById("caracteristique").style;
    ListProposition.style.display = "none";
    recherche.value = "";
    TabReponse = TabReponseReverse.reverse();
}

affichage();



/*
-------------------------------------------------------------------------------
affichage fin de manche une fois la player trouvé
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
    document.getElementById("nom").textContent = reponse.name;
    document.getElementById("try").textContent = "TRY : " + TabReponse.length;
    document.getElementById("perso").style.display ="flex";
    document.querySelector("#perso img").src = reponse.img != '' ? reponse.img : imgBase;
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


if(getCookie('GuessPro')){
    afficherFin(getCookie('PlayerGuessPro'));
}

/*
---------------------------------------------------------------------------------------------
condition d'affichage du tableau de Proposition personnage
---------------------------------------------------------------------------------------------
*/
recherche.addEventListener('keydown',(event)=>{
    if((event.key == 'Enter' || event =='13') && TabProposition.length >= 0){
        let player = TabProposition[SelectedProposition];
        recherche.value = player.name;
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
const ajouterProposition = () => {
    ListProposition.innerHTML = "";
    TabProposition = [];
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ListProposition.appendChild(ul);

    if (recherche.value === "") {
        ListProposition.innerHTML = "";
        TabProposition = [];
    } else {
        TabPro.forEach(player => {
            if (player.name.toUpperCase().includes(recherche.value.toUpperCase())) {
                const dejaPropose = TabReponse.some(reponse => 
                    reponse.name.toUpperCase() === player.name.toUpperCase()
                );

                if (!dejaPropose && !TabProposition.includes(player)) {
                    TabProposition.push(player);
                }
            }
        });
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
                proposition.textContent = propal.name;
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


