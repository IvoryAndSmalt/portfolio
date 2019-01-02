//SERVICE WORKER
if ('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('./service-worker.js', { scope: './' })
        .then(function() {
            console.log("service worker registered");
        })
        .catch(function(err){
            console.log("sw failed", err);
        })
}

//SWITCHES LANGUAGES

var swFrench = document.getElementById('switchFrench');
var swEnglish = document.getElementById('switchEnglish');
var FrenchItems = document.getElementsByClassName('french');
var EnglishItems = document.getElementsByClassName('english');

function switchLang(fromLang, toLang){
    for (let i = 0; i < FrenchItems.length; i++) {
        fromLang[i].style.display = "none";
        toLang[i].style.display = "block";
    }
}

switchLang(EnglishItems, FrenchItems);

swFrench.addEventListener('click', function(){
    switchLang(EnglishItems, FrenchItems);
});
swEnglish.addEventListener('click', function(){
    switchLang(FrenchItems, EnglishItems);
});

//SWITCH PAGES
var footerli = document.getElementsByClassName('footerli');
var iconsm = document.getElementsByClassName('iconsm');
var iconsw = document.getElementsByClassName('iconsw');

var lihome = document.getElementById('lihome');
var licv = document.getElementById('licv');
var liprojects = document.getElementById('liprojects');
var licontact = document.getElementById('licontact');

//Function inverts light and dark background and text color
function darken(page, j){
    for (let i = 0; i < footerli.length; i++) {
        footerli[i].style.color = "#001a4d";
        footerli[i].style.background = "#fffff0";
        iconsm[i].style.display = "block";
        iconsw[i].style.display = "none";
    }
    page.style.color = "#fffff0";
    page.style.background = "#001a4d";
    iconsm[j].style.display = "none";
    iconsw[j].style.display = "block";
}

var pm = document.getElementsByClassName('primary-content');
var Home = document.getElementsByClassName('Home');
var CV = document.getElementsByClassName('CV');
var Projets = document.getElementsByClassName('Projets');
var logo = document.getElementById('logo');
var lgmenus = document.getElementsByClassName('lgmenus');
var titleHome = document.getElementById('titleHome');
var titleCV = document.getElementById('titleCV');
var titleProjects = document.getElementById('titleProjects');
var titleContact = document.getElementById('titleContact');


function switchPage(pmpage){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    for (let i = 0; i < pm.length; i++) {
        pm[i].style.display = "none";
    }
    if(width<=576){
        for (let i = 0; i < lgmenus.length; i++) {
            lgmenus[i].style.display = "none";
        }
    }
    else{
        for (let i = 0; i < lgmenus.length; i++) {
            lgmenus[i].style.fontWeight = "300";
        }
    }
    switch (pmpage) {
        case Home:
            darken(lihome, 0);
            Home[0].style.display = "block";
            titleHome.style.display ="block";
            titleHome.style.fontWeight = "900";
        break;
        case CV:
            darken(licv, 1);
            CV[0].style.display = "block";
            titleCV.style.display ="block";
            titleCV.style.fontWeight = "900";
        break;
        case Projets:
            darken(liprojects, 2);
            Projets[0].style.display = "block";
            titleProjects.style.display ="block";
            titleProjects.style.fontWeight = "900";
        break;
    }
}

switchPage(Home);
//WAYS TO GET HOME
logo.addEventListener('click', function(){
    switchPage(Home);
});
lihome.addEventListener('click', function(){
    switchPage(Home);
});
titleHome.addEventListener('click', function(){
    switchPage(Home)
});

//WAYS TO GET TO CV
var inlineCV = document.getElementById('myCV');
var inlineProjects = document.getElementById('myProjects');
var inlineContact = document.getElementById('toContact');

licv.addEventListener('click', function(){
    switchPage(CV);
});
titleCV.addEventListener('click', function(){
    switchPage(CV);
});
inlineCV.addEventListener('click', function(){
    switchPage(CV);
});

//WAYS TO GET TO PROJECTS
liprojects.addEventListener('click', function(){
    switchPage(Projets);
});
titleProjects.addEventListener('click', function(){
    switchPage(Projets);
});
inlineProjects.addEventListener('click', function(){
    switchPage(Projets);
});

//Ways to get to Contact
licontact.addEventListener('click', function(){
    darken(licontact, 3);
});
titleContact.addEventListener('click', function(){
    darken(licontact, 3);
});
inlineContact.addEventListener('click', function(){
    darken(licontact, 3);
});


//smalt #001a4d; ivry: #fffff0

