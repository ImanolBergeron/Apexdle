 /*
 --------------------------------------------------------------------------
 init tableau
 --------------------------------------------------------------------------
 */
let TabWeapon = [
    {image : '../image/arme/30-30.webp',  name : '30-30 Repeater'},
    {image : '../image/arme/Alternator.webp',  name : 'Alternator SMG'},
    {image : '../image/arme/Bow.webp',  name : 'Bocek Compound Bow'},
    {image : '../image/arme/CAR.webp',  name : 'C.A.R SMG'},
    {image : '../image/arme/Devotion.webp',  name : 'Devotion LMG'},
    {image : '../image/arme/EVA-8.webp',  name : 'EVA-8 Auto'},
    {image : '../image/arme/Flatline.webp',  name : 'VK-47 Flatline'},
    {image : '../image/arme/fusil_charge.webp',  name : 'Charge Rifle'},
    {image : '../image/arme/G7.webp',  name : 'G7 Scout'},
    {image : '../image/arme/Havoc.webp',  name : 'HAVOC Rifle'},
    {image : '../image/arme/Hemlock.webp',  name : 'Hemlock Burst AR'},
    {image : '../image/arme/Kraber.webp',  name : 'Kraber .50-Cal Sniper'},
    {image : '../image/arme/L-star.webp',  name : 'L-STAR EMG'},
    {image : '../image/arme/Longbow.webp',  name : 'Longbow DMR'},
    {image : '../image/arme/Mastif.webp',  name : 'Mastiff Shotgun'},
    {image : '../image/arme/Mozambique.webp',  name : 'Mozambique Shotgun'},
    {image : '../image/arme/Nemesis.webp',  name : 'Nemesis Burst AR'},
    {image : '../image/arme/P2020.webp',  name : 'P2020'},
    {image : '../image/arme/PeaceKeeper.webp',  name : 'Peacekeeper'},
    {image : '../image/arme/Prowler.webp',  name : 'Prowler Burst PDW'},
    {image : '../image/arme/R-99.webp',  name : 'R-99 SMG'},
    {image : '../image/arme/R-301.webp',  name : 'R-301 Carabine'},
    {image : '../image/arme/Rampage.webp',  name : 'Rampage LMG'},
    {image : '../image/arme/RE-45.webp',  name : 'RE-45 Auto'},
    {image : '../image/arme/sentinel.webp',  name : 'Sentinel'},
    {image : '../image/arme/Spitfire.webp',  name : 'M600 Spitfire'},
    {image : '../image/arme/Throwing_Knife.webp', name : 'Throwing knife'},
    {image : '../image/arme/Triple_take.webp',  name : 'Triple Take'},
    {image : '../image/arme/Volt.webp', name : 'Volt SMG'},
    {image : '../image/arme/Wingman.webp', name : 'Wingman'},
    ];

let TabReponse = [];

let TabProposition = [];


/*
-------------------------------------------------------------------------------
init attribut utile
-------------------------------------------------------------------------------
*/

const image = document.getElementById("WeaponImage");

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
 * pour afficher l'image et sauvegarder l'arme correspondant
 */
let rand = Math.random() * TabWeapon.length | 0;
let rValue = TabWeapon[rand];
image.src = rValue.image;
let weapon = rValue;

/*
--------------------------------------------------------------------------------
validation arme
--------------------------------------------------------------------------------
*/
ButtonSubmit.addEventListener('click' , () =>{
    if(recherche.value.toUpperCase() === rValue.name.toUpperCase()){
        recherche.disabled = "true";
        trouvee = true;
        TotalTry++;
        affichage(weapon);
    }
    else{
        ajouterTabreponse();
        affichage();
    }
    recherche.value = "";
})



const ajouterTabreponse = () =>{
    let proposition = null;
    TabWeapon.forEach(arme =>{
        if(arme.name.toUpperCase() == recherche.value.toUpperCase()){
            proposition = arme;
        }
    })
    let bool = false;
    TabReponse.forEach(reponse =>{
        if(reponse == proposition){
           bool = true;
        }
    })
    if(!bool && proposition != null){
        TotalTry++;
        TabReponse.push(proposition); 
    }
}

const affichage = ( Weapon=null ) =>{
    if(!trouvee){
        const TabReponseReverse = TabReponse.reverse();
        const afficheproposition = document.getElementById("display-results");
        afficheproposition.innerHTML = "";
        TabReponseReverse.forEach(reponse =>{
            const divConteneur = document.createElement("div");
            const divimg = document.createElement("img");
            divimg.src = reponse.image;
            divimg.alt="proposition";
            divimg.style.maxWidth = "50%";
            divimg.style.maxHeight = "50%";
            const divarme = document.createElement("h3");
            divarme.textContent = reponse.name;
            divConteneur.appendChild(divimg);
            divConteneur.appendChild(divarme);
            divConteneur.style.display = "flex";
            divConteneur.style.justifyContent = "center";
            divConteneur.style.alignItems = "center";
            divConteneur.style.backgroundColor = "red";
            divConteneur.style.width = "30%";
            divConteneur.style.height = "70px";
            afficheproposition.appendChild(divConteneur);
        })
        ///////
        afficheproposition.style.position = "relative";
        afficheproposition.style.zIndex = "0";
        ///////
        TabReponse.reverse();
        ListProposition.style.display = "none";
    }
    else if(Weapon!=null){
        const DivBonneReponse = document.createElement("div");
        const divimg = document.createElement("img");
        divimg.src = Weapon.image;
        divimg.alt = "image gg";
        divimg.style.maxWidth = "50%";
        divimg.style.maxHeight = "50%";
        const divarme = document.createElement("h3");
        divarme.textContent = Weapon.name;
        bonneReponse.appendChild(DivBonneReponse);
        DivBonneReponse.appendChild(divimg);
        DivBonneReponse.appendChild(divarme);
        divimg.style.maxWidth = "30%";
        divimg.style.maxheight = "30%";
        DivBonneReponse.style.display = "flex";
        DivBonneReponse.style.justifyContent = "center";
        DivBonneReponse.style.alignItems = "center";
        DivBonneReponse.style.backgroundColor = "Green";
        DivBonneReponse.style.width = "30%";
        DivBonneReponse.style.height = "70px";
        ListProposition.innerHTML="";
        afficherFin(Weapon);
    }
    recherche.value = "";
}

/*
-------------------------------------------------------------------------------
affichage fin de manche une fois l'arme trouvé
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
    document.getElementById("nom").textContent = reponse.name;
    document.getElementById("try").textContent = "TRY : " + TotalTry;
    document.getElementById("perso").style.display ="flex";
    document.querySelector("#perso img").src = reponse.image;
    document.querySelector("#perso img").alt = "perso";
    document.querySelector("#perso img").style.width = "50%";
    document.querySelector("#perso img").style.height = "50%";
    document.querySelector("#perso img").style.marginRight= "10%";
    document.getElementById("doubleBordure").style.border = "solid white 2px";
    document.getElementById("doubleBordure").style.paddingRight = "150%";
    document.getElementById("doubleBordure").style.paddingLeft = "150%";
    document.getElementById("suivant").textContent = "Quote";
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
affichage Proposition arme
---------------------------------------------------------------------------------------------
*/




recherche.addEventListener('keydown',(event)=>{
    if((event.key == 'Enter' || event =='13') && TabProposition.length >= 0){
        let arme = TabProposition[SelectedProposition];
        recherche.value = arme.name;
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
        TabWeapon.forEach(arme =>{
            if(arme.name.toUpperCase().includes(recherche.value.toUpperCase())){
                if(!TabReponse.includes(arme) && !TabProposition.includes(arme)){
                    TabProposition.push(arme);
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
            proposition.textContent = propal.name;
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


