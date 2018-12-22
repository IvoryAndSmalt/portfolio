//SWITCHES LANGUAGES

var swFrench = document.getElementById('switchFrench');
var swEnglish = document.getElementById('switchEnglish');
var FrenchItems = document.getElementsByClassName('french');
var EnglishItems = document.getElementsByClassName('english');

function toEng(){
    for (let i = 0; i < FrenchItems.length; i++) {
        FrenchItems[i].style.display = "none";
        EnglishItems[i].style.display = "block";
    }
}
function toFrench(){
    for (let i = 0; i < FrenchItems.length; i++) {
        FrenchItems[i].style.display = "block";
        EnglishItems[i].style.display = "none";
    }
}

toFrench();
swFrench.addEventListener("click", toFrench);
swEnglish.addEventListener("click", toEng);

//SWITCH PAGES
var lihome = document.getElementById('lihome');
var licv = document.getElementById('licv');
var liprojects = document.getElementById('liprojects');
var licontact = document.getElementById('licontact');
var homew = document.getElementById('homew');
var cvw = document.getElementById('cvw');
var projectsw = document.getElementById('projectsw');
var handlew = document.getElementById('handlew');
var footerli = document.getElementsByClassName('footerli');
var iconsm = document.getElementsByClassName('iconsm');
var iconsw = document.getElementsByClassName('iconsw');

lihome.addEventListener('click', function(){
    for (let i = 0; i < footerli.length; i++) {
        footerli[i].style.color = "#001a4d"; 
        footerli[i].style.background = "#fffff0";
        iconsm[i].style.display = "block";
        iconsw[i].style.display = "none";
    }
    lihome.style.color = "#fffff0";
    lihome.style.background = "#001a4d";
    iconsm[0].style.display = "none";
    iconsw[0].style.display = "block";
});

licv.addEventListener('click', function(){
    for (let i = 0; i < footerli.length; i++) {
        footerli[i].style.color = "#001a4d"; 
        footerli[i].style.background = "#fffff0";
        iconsm[i].style.display = "block";
        iconsw[i].style.display = "none";
    }
    licv.style.color = "#fffff0";
    licv.style.background = "#001a4d";
    iconsm[1].style.display = "none";
    iconsw[1].style.display = "block";
});

liprojects.addEventListener('click', function(){
    for (let i = 0; i < footerli.length; i++) {
        footerli[i].style.color = "#001a4d"; 
        footerli[i].style.background = "#fffff0";
        iconsm[i].style.display = "block";
        iconsw[i].style.display = "none";
    }
    liprojects.style.color = "#fffff0";
    liprojects.style.background = "#001a4d";
    iconsm[2].style.display = "none";
    iconsw[2].style.display = "block";
});

licontact.addEventListener('click', function(){
    for (let i = 0; i < footerli.length; i++) {
        footerli[i].style.color = "#001a4d"; 
        footerli[i].style.background = "#fffff0";
        iconsm[i].style.display = "block";
        iconsw[i].style.display = "none";
    }
    licontact.style.color = "#fffff0";
    licontact.style.background = "#001a4d";
    iconsm[3].style.display = "none";
    iconsw[3].style.display = "block";
});

//smalt #001a4d; ivry: #fffff0