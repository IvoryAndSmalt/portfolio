<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$title?> - Lucas van den Berg</title>
    <link rel="manifest" href="manifest.json">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,500,900" rel="stylesheet"> 
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body id="body" class="bg-smalt">

<!-- Behold, the field in which I grow my PHP. Lay thine eyes upon it and thou shalt see that it is barren.  
        A.K.A. navigation in pure JS, because I can. -->

    <header id="header" class="bg-ivory">
        <ul class="bannerul">
            <li class="headerli thin">
                <p>
                    <img src="assets/img/logo.svg" alt="Logo">
                </p>
            </li>
            <li class="headerli thin lgmenus">
                <p>
                    <span>CV</span>
                </p>
            </li>
            <li class="headerli thin lgmenus french">
                <p>
                    <span class="french">Projets</span>
                </p>
            </li>
            <li class="headerli thin lgmenus english">
                <p>
                    <span class="english">Projects</span>
                </p>
            </li>
            <li class="headerli thin lgmenus">
                <p>
                    <span>Contact</span>
                </p>
            </li>
            <li class="headerli thin">
                <ul class="flags">
                    <li class="flag english" id="switchFrench">
                        <img src="assets/img/france.svg" alt="Drapeau Français">
                    </li>
                    <li class="flag french" id="switchEnglish">
                        <img src="assets/img/united-kingdom.svg" alt="Drapeau Anglais">
                    </li>
                </ul>
            </li>
        </ul>
    </header>