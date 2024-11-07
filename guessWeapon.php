<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/guessWeapon.css">
    <script type="module" src="js/GuessWeapon.js"></script>
    <title>Guess the Weapon</title>
</head>
<body>
    <header>
        <a href = "index.php" id="Apexdle"><h1>Apexdle</h1></a>
        <p>Test Your Apex Knowledge</p>
        <h1>Guess the Weapon based on its Image</h1>
    </header>
    <div class="Weapon">
        <div id="ConteneurImageWeapon">
            <img id="WeaponImage" src="" alt="Weapon Image">
        </div>
    </div>
    <div id ="jsp">
        <div class = "feur">
            <div class="barreDeRecherche">
                <input type="search" id="input-search" name="input-search" aria-label="Recherche par mot-clef" placeholder="Agent's Name" />
            </div>
            <button id="submit">submit</button>
        </div>
    <div id="conteneur">
        <div id="no-result">
            
        </div>
    </div>
</div>
    <div id="display-good-results">
    </div>
    <div id="display-results">  
    </div>
    <div id="bordure">
        <div id="GG">
            <div id="tout">
                <p id="texteGG"></p>
                <div id="perso">
                    <img src="bg" alt="">
                    <div id="txt">
                        <p id="nom"></p>
                        <p id="try"></p>
                    </div>
                </div>
                <a href="guessQuote.php">
                    <div id="button">
                        <div id="doubleBordure">
                            <div id ="SousCategorie">
                                <h3 id="suivant"></h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div id="vide"></div>
</body>
</html>