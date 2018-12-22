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

darken(lihome, 0);

lihome.addEventListener('click', function(){
    darken(lihome, 0);
});
licv.addEventListener('click', function(){
    darken(licv, 1);
});
liprojects.addEventListener('click', function(){
    darken(liprojects, 2);
});
licontact.addEventListener('click', function(){
    darken(licontact, 3);
});

//smalt #001a4d; ivry: #fffff0

document.addEventListener('scroll', function(){
    var body = document.getElementById('body');
    console.log(body.scrollTop);
    console.log(body.scrollHeight);
    console.log(body.clientHeight);
});