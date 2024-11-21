<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/guessLegend.css">
    <script type="module" src="js/GuessLegend.js"></script>
    <title>Apexdle | Guess the Legend</title>
</head>

<body>
    <header>
        <a href="index.php">
            <h1 id="Apexdle">Apexdle</h1>
        </a>
        <p>Test Your Apex Knowledge</p>
        <h1>Guess the legend</h1>

    </header>
    <main>
        <div class="conteneur">
            <div class="barreDeRecherche">
                <input type="search" id="input-search" name="input-search" aria-label="Recherche par mot-clef" placeholder="Agent's Name ..." />
                <span id="no-result"></span>
            </div>
            <button id="submit">submit</button>
        </div>

        <div id="Conteneur-caracteristique">
        <table id="caracteristique">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Agent</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Date</th>
                </tr>
            </thead>
        </table>
        </div>

        <div id="Conteneur-display-results">
        <table id="display-results">
        </table>
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
                <a href="guessWeapon.php">
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
    </main>
</body>

</html>