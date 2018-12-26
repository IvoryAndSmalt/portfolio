<?php

$title = "Portfolio";

include 'header.php';

?>

<div class="bg-smalt main">
        <div class="Home">
                <div class="pfp">
                        <img id="mypfp" src="assets/img/pfp.svg" alt="Profile Picture">
                </div>
                <div class="profiletitle">
                        <h1 class="thick">lucas van den berg</h1>
                </div>
                <div class="profiletext">
                        <p class="thin french welcometitle">
                                Bienvenue chez moi !
                        </p>
                        <p class="thin french">
                                <strong class="regular toLink">
                                        Qui suis-je ?
                                </strong><br>
                                Je suis développeur Web à Belfort. J'ai 23 ans, j'aime la musique, les séries Netflix, la raclette et PHP.<br>
                                Auparavant étudiant en ingénierie industrielle, je me suis reconverti pour étudier ce qui me passionne vraiment : l'informatique.<br>
                                Vous trouverez ici 
                                <strong class="regular toLink" id="toCV">
                                        mon CV
                                </strong>, quelques 
                                <strong class="regular toLink" id="toProjects">
                                        projets
                                </strong> réalisés à l'Access Code School, ou de quoi 
                                <strong class="regular toLink" id="toContact">
                                        me contacter
                                </strong>.
                        </p>
                        <p class="thin english welcometitle">
                                Welcome to my personal webpage!
                        </p>
                        <p class="thin english">
                                <strong class="regular toLink">
                                        Who am I?
                                </strong><br>
                                I'm a web developper in Belfort. I'm 23 years old, I love music, Netflix shows, Raclette and PHP.<br>
                                I used to study industrial engineering before switching to what I'm really into; computer science.<br>
                                Here, you'll find 
                                <strong class="regular toLink" id="toCV">
                                        my CV
                                </strong>, a few 
                                <strong class="regular toLink" id="toProjects">
                                        projects
                                </strong> I worked on at the Access Code School, or how to 
                                <strong class="regular toLink" id="toContact">
                                        contact me
                                </strong>.
                        </p>
                </div>
                <div class="widgets">
                        <div class="github">
                                <a target="_blank"
                                href="https://github.com/IvoryAndSmalt?tab=repositories"><img src="assets/img/github.svg" alt="GitHub Logo"></a>
                                <a href="https://www.linkedin.com/in/lucas-van-den-berg-1b176363/"><img src="assets/img/linked.svg" alt="Logo GitHub"></a>
                        </div>
                </div>
        </div>
</div>

<?php

include 'contactform.php';

include 'footer.php';