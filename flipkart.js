   // JS-Login Form
const Form = document.getElementById("form");
const List = document.getElementById("getform");
getform.style.display = "none";

    Form.addEventListener("click", (event) =>{
        if(  getform.style.display == "none"){
                 getform.style.display = "flex"
         } else{
                 getform.style.display = "none"
                }
    })
    //   For Close-button    

document.getElementById("close-btn").addEventListener("click", function(){
document.getElementById("getform").style.display="none" ;          
 })          
        


//  image slider
let image = document.querySelector(".slide-img");
let translate = 0;

setInterval(()=> {
    if(translate >= 0 && translate < 400) {
        translate+= 100
    } else{
        translate = 0
    }
    image.style.transition = "0.1s"
    image.style.transform = `translateX(${-translate}%)`
},3000)

function right(){
    if( translate < 400){
        translate += 100
        image.style.transition = "0.1s"
        image.style.transform = `translateX(${-translate}%)`
    }
}

function left(){
    if( translate > 0){
        translate -= 100
        image.style.transition = "0.1s"
        image.style.transform = `translateX(${-translate}%)`
    }
}


let Electricimage = document.querySelector(".electric-img");
let Electrictranslate = 0;

function Electricright(){
    if( Electrictranslate <200){
        Electrictranslate += 50
        Electricimage.style.transform = `translateX(${-Electrictranslate}%)`
    }
}
function Electricleft(){
    if( Electrictranslate > 0){
        Electrictranslate -= 50
        Electricimage.style.transform = `translateX(${-Electrictranslate}%)`
    }
}

let Toyimage = document.querySelector(".Toy-img");
let Toytranslate = 0;

function Toyright(){
    if( Toytranslate < 150){
        Toytranslate += 50
        Toyimage.style.transform = `translateX(${- Toytranslate}%)`
    }
}
function Toyleft(){
    if(  Toytranslate > 0){
        Toytranslate -= 50
        Toyimage.style.transform = `translateX(${- Toytranslate}%)`
    }
}
// const PreviousButton = document.querySelector("PreBtn");
// const NextButton = document.querySelector("NextBtn");

// const HiddenArrow = (Toyimage, PreviousButton, NextButton, targetIndex) => {
//     if(targetIndex == 0) {
//         PreviousButton.classList.add('btn-hidden');
//         NextButton.classList.remove('btn-hidden');
//     }else if(targetIndex == Toyimage.length - 1 ) {
//         PreviousButton.classList.remove('btn-hidden');
//         NextButton.classList.add('btn-hidden');
//     }
// }

