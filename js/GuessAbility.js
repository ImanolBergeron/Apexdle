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

let TabAbility = [
    {image : '../image/capa/capaAlter.png', type : 'Capacity', agent : 'Alter'},
    {image : '../image/capa/capaAsh.png', type : 'Capacity', agent : 'Ash'},
    {image : '../image/capa/capaBallistic.png', type : 'Capacity', agent : 'Ballistic'},
    {image : '../image/capa/capaBanga.png', type : 'Capacity', agent : 'Bangalore'},
    {image : '../image/capa/capaBlood.png', type : 'Capacity', agent : 'Bloodhound'},
    {image : '../image/capa/capaCatalyst.png', type : 'Capacity', agent : 'Catalyst'},
    {image : '../image/capa/capaCaustic.png', type : 'Capacity', agent : 'Caustic'},
    {image : '../image/capa/capaConduit.png', type : 'Capacity', agent : 'Conduit'},
    {image : '../image/capa/capaCrypto.png', type : 'Capacity', agent : 'Crypto'},
    {image : '../image/capa/capaFuse.png', type : 'Capacity', agent : 'Fuse'},
    {image : '../image/capa/capaGibi.png', type : 'Capacity', agent : 'Gibraltar'},
    {image : '../image/capa/capaHorizon.png', type : 'Capacity', agent : 'Horizon'},
    {image : '../image/capa/capaLife.png', type : 'Capacity', agent : 'Lifeline'},
    {image : '../image/capa/capaLoba.png', type : 'Capacity', agent : 'Loba'},
    {image : '../image/capa/capaMad.png', type : 'Capacity', agent : 'Mad Maggie'},
    {image : '../image/capa/capaMirage.png', type : 'Capacity', agent : 'Mirage'},
    {image : '../image/capa/capaNew.png', type : 'Capacity', agent : 'Newcastle'},
    {image : '../image/capa/capaOctane.png', type : 'Capacity', agent : 'Octane'},
    {image : '../image/capa/capaPath.png', type : 'Capacity', agent : 'PathFinder'},
    {image : '../image/capa/capaRampart.png', type : 'Capacity', agent : 'Rampart'},
    {image : '../image/capa/capaRevenant.png', type : 'Capacity', agent : 'Revenant'},
    {image : '../image/capa/capaSeer.png', type : 'Capacity', agent : 'Seer'},
    {image : '../image/capa/capaValki.png', type : 'Capacity', agent : 'Valkyrie'},
    {image : '../image/capa/capaVantage.png', type : 'Capacity', agent : 'Vantage'},
    {image : '../image/capa/capaWattson.png', type : 'Capacity', agent : 'Wattson'},
    {image : '../image/capa/passifAlter.png', type : 'Passif', agent : 'Alter'},
    {image : '../image/capa/passifAsh.png', type : 'Passif', agent : 'Ash'},
    {image : '../image/capa/passifBallistic.png', type : 'Passif', agent : 'Ballistic'},
    {image : '../image/capa/passifBanga.png', type : 'Passif', agent : 'Bangalore'},
    {image : '../image/capa/passifBlood.png', type : 'Passif', agent : 'Bloodhound'},
    {image : '../image/capa/passifCatalyst.png', type : 'Passif', agent : 'Catalyst'},
    {image : '../image/capa/passifCaustic.png', type : 'Passif', agent : 'Caustic'},
    {image : '../image/capa/passifConduit.png', type : 'Passif', agent : 'Conduit'},
    {image : '../image/capa/passifCrypto.png', type : 'Passif', agent : 'Crypto'},
    {image : '../image/capa/passifFuse.png', type : 'Passif', agent : 'Fuse'},
    {image : '../image/capa/passifGibi.png', type : 'Passif', agent : 'Gibraltar'},
    {image : '../image/capa/passifHorizon.png', type : 'Passif', agent : 'Horizon'},
    {image : '../image/capa/passifLife.png', type : 'Passif', agent : 'Lifeline'},
    {image : '../image/capa/passifLoba.png', type : 'Passif', agent : 'Loba'},
    {image : '../image/capa/passifMad.png', type : 'Passif', agent : 'Mad Maggie'},
    {image : '../image/capa/passifMirage.png', type : 'Passif', agent : 'Mirage'},
    {image : '../image/capa/passifNew.png', type : 'Passif', agent : 'Newcastle'},
    {image : '../image/capa/passifOctane.png', type : 'Passif', agent : 'Octane'},
    {image : '../image/capa/passifPath.png', type : 'Passif', agent : 'PathFinder'},
    {image : '../image/capa/passifRampart.png', type : 'Passif', agent : 'Rampart'},
    {image : '../image/capa/passifRevenant.png', type : 'Passif', agent : 'Revenant'},
    {image : '../image/capa/passifSeer.png', type : 'Passif', agent : 'Seer'},
    {image : '../image/capa/passifValki.png', type : 'Passif', agent : 'Valkyrie'},
    {image : '../image/capa/passifVantage.png', type : 'Passif', agent : 'Vantage'},
    {image : '../image/capa/passifWattson.png', type : 'Passif', agent : 'Wattson'},
    {image : '../image/capa/ultAlter.png', type : 'Ulti', agent : 'Alter'},
    {image : '../image/capa/ultAsh.png', type : 'Ulti', agent : 'Ash'},
    {image : '../image/capa/ultBallistic.png', type : 'Ulti', agent : 'Ballistic'},
    {image : '../image/capa/ultBanga.png', type : 'Ulti', agent : 'Bangalore'},
    {image : '../image/capa/ultBlood.png', type : 'Ulti', agent : 'Bloodhound'},
    {image : '../image/capa/ultCatalyst.png', type : 'Ulti', agent : 'Catalyst'},
    {image : '../image/capa/ultCaustic.png', type : 'Ulti', agent : 'Caustic'},
    {image : '../image/capa/ultConduit.png', type : 'Ulti', agent : 'Conduit'},
    {image : '../image/capa/ultCrypto.png', type : 'Ulti', agent : 'Crypto'},
    {image : '../image/capa/ultFuse.png', type : 'Ulti', agent : 'Fuse'},
    {image : '../image/capa/ultGibi.png', type : 'Ulti', agent : 'Gibraltar'},
    {image : '../image/capa/ultHorizon.png', type : 'Ulti', agent : 'Horizon'},
    {image : '../image/capa/ultLife.png', type : 'Ulti', agent : 'Lifeline'},
    {image : '../image/capa/ultLoba.png', type : 'Ulti', agent : 'Loba'},
    {image : '../image/capa/ultMad.png', type : 'Ulti', agent : 'Mad Maggie'},
    {image : '../image/capa/ultMirage.png', type : 'Ulti', agent : 'Mirage'},
    {image : '../image/capa/ultNew.png', type : 'Ulti', agent : 'Newcastle'},
    {image : '../image/capa/ultOctane.png', type : 'Ulti', agent : 'Octane'},
    {image : '../image/capa/ultPath.png', type : 'Ulti', agent : 'PathFinder'},
    {image : '../image/capa/ultRampart.png', type : 'Ulti', agent : 'Rampart'},
    {image : '../image/capa/ultRevenant.png', type : 'Ulti', agent : 'Revenant'},
    {image : '../image/capa/ultSeer.png', type : 'Ulti', agent : 'Seer'},
    {image : '../image/capa/ultValki.png', type : 'Ulti', agent : 'Valkyrie'},
    {image : '../image/capa/ultVantage.png', type : 'Ulti', agent : 'Vantage'},
    {image : '../image/capa/ultWattson.png', type : 'Ulti', agent : 'Wattson'},
    ];

let TabReponse = [];

let TabProposition = [];



/*
-------------------------------------------------------------------------------
init attribut utile
-------------------------------------------------------------------------------
*/

const image = document.getElementById("AbilityImage");

let Ability;

let TotalTry = 0;

let trouvee = false;

let SelectedProposition = 0;

const ListProposition = document.getElementById("no-result");

const recherche = document.getElementById("input-search");

const ButtonSubmit = document.getElementById("submit");

const bonneReponse = document.getElementById("display-good-results");

let i = 0;

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
 * pour afficher l'image et sauvegarder l'agent correspondant
 */
if(!cookieExists('LegendGuessAbility')){
    let rand = Math.random() * TabAbility.length | 0;
    let rValue = TabAbility[rand];
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    let tempsCookie = Math.floor((midnight - now) / 1000)
    document.cookie = 'LegendGuessAbility=' + JSON.stringify(rValue) + '; max-age=' + tempsCookie;
}else{
    if (cookieExists('GuessAbilityAttempts')) {
        try {
            TabReponse = getCookie('GuessAbilityAttempts');
        } catch (e) {
            TabReponse = [];
        }
    }
}

image.src = getCookie('LegendGuessAbility').image;

/*
--------------------------------------------------------------------------------
validation perso
--------------------------------------------------------------------------------
*/
ButtonSubmit.addEventListener('click' , () =>{
    if(recherche.value.toUpperCase() === getCookie('LegendGuessAbility').agent.toUpperCase()){
        recherche.disabled = true;
        trouvee = true;
        let proposition = null;
        TabLegend.forEach(perso => {
            if(perso.agent.toUpperCase() === getCookie('LegendGuessAbility').agent.toUpperCase()){
                proposition = perso;
            }
        });
        if(proposition) {
            TabReponse.push(proposition);
            let now = new Date();
            let midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0);
            let tempsCookie = Math.floor((midnight - now) / 1000);
            document.cookie = 'GuessAbilityAttempts=' + JSON.stringify(TabReponse) + '; max-age=' + tempsCookie;
            affichage(proposition);
            now = new Date();
            midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0);
            tempsCookie = Math.floor((midnight - now) / 1000);
            document.cookie = 'GuessAbility=true; max-age=' + tempsCookie;
        }
    } else {
        ajouterTabreponse();
        affichage();
    }
    recherche.value = "";
});


const ajouterTabreponse = () => {
    let proposition = null;
    TabLegend.forEach(perso => {
        if(perso.agent.toUpperCase() === recherche.value.toUpperCase()) {
            proposition = perso;
        }
    });
    
    if(!proposition) return;
    
    const dejaPropose = TabReponse.some(reponse => 
        reponse.agent.toUpperCase() === proposition.agent.toUpperCase()
    );
    
    if (!dejaPropose) {
        TabReponse.push(proposition);
        let now = new Date();
        let midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        let tempsCookie = Math.floor((midnight - now) / 1000);
        document.cookie = 'GuessAbilityAttempts=' + JSON.stringify(TabReponse) + '; max-age=' + tempsCookie;
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
            if(reponse.agent.toUpperCase() == getCookie('LegendGuessAbility').agent.toUpperCase()){
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


affichage()

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
    document.getElementById("try").textContent = "TRY : " + getCookie('GuessAbilityAttempts').length;
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


            proposition.addEventListener('mouseenter', () => {
                proposition.style.backgroundColor = "black";
                proposition.style.transitionDuration = "0.5s";
            });
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



if(cookieExists('GuessAbility')){
    let proposition = null;
    TabLegend.forEach(perso => {
        if(perso.agent.toUpperCase() === getCookie('LegendGuessAbility').agent.toUpperCase()){
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
console.log(getCookie('LegendGuessAbility'))


