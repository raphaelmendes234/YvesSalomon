


// Changement langage

// Effet soulignement en dessous du langage
const underline = document.querySelector(".language-underline");
const buttonFr = document.querySelector("#frButton");
const buttonEn = document.querySelector("#enButton");


function moveUnderline(){
    buttonFr.addEventListener("click",function(e){
        underline.style.left = 0 + "%";
    });
    buttonEn.addEventListener("click",function(e){
        underline.style.left = 58 + "%";
    });
};





moveUnderline();


// Cacher le label quand l'input est rempli

const formField = document.querySelectorAll(".to-hide");
const formsArray = Array.from(formField);

formsArray.map(function(element){
    const input = element.querySelector("input[type='text']");
    const label = element.querySelector("label");


    input.addEventListener("input", function(){
        if (input.value.length > 0) {
            label.style.display = "none";
        } else {
            label.style.display = "block";
        }
    });
});


// Bouton


// document.querySelector("button").onclick = () => {

//     const checkbox = document.querySelector("#dataProtectionCheckbox");

//     if (document.querySelector("#fieldRequired1").value == "" || document.querySelector("#fieldRequired2").value == ""  || document.querySelector("#fieldRequired3").value == "" || document.querySelector("#menu").value == "" || checkbox.checked == false ){
//         console.log("test : ", checkbox.checked);
//     } else {
//         // document.location.href = "thanksFr.html";
//         console.log("les conditions sont remplies");
//     };

// };

