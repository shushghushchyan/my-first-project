AOS.init();

window.onload = function() {
    setTimeout(function() {
        const ThereIsOneforEveryone = document.getElementById("nerqevidiv");
        ThereIsOneforEveryone.style.display = "block";
        
    }, 1000); 
};

window.addEventListener ('scroll', function()   {
const element = document.getElementById("getoff");
const elementposition = element.getBoundingClientRect().top;
const screenposition = window.innerHeight;

if(elementposition<screenposition){
    slaqdzakh.style.animation = 'slide 2s linear';
    slaqaj.style.animation = 'slide-right 2s linear';
}
    else{
        slaqdzakh.style.animation = 'paused'  
        slaqaj.style.animation = 'paused'  }
}


)



// const showme = document.getElementById("shopwomen")
// showme.addEventListener("mouseover", function() {
//     const hiddentitle = document.getElementById("hiddentitle");

//     hiddentitle.style.display = "block";
// });
// showme.addEventListener("mouseout", function() {
//     hiddentitle.style.display = "none";
// });





