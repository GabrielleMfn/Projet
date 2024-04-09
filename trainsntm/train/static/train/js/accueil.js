const slide = ["/static/train/imgT/RER_A.jpg", "/static/train/imgT/RER_B.jpg", "/static/train/imgT/RER_C.jpg", "/static/train/imgT/RER_D.jpg", "/static/train/imgT/RER_E.jpg"];
let number = 0;


// Fonction du Slider

function ChangeSlide(sens) {
    number = number + sens;
    if (number < 0)
    number = slide.length - 1;
if (number > slide.length - 1)
number = 0;
document.getElementById("slide").src = slide[number];
}

// Fonction pour afficher la bonne image du Slider

bouton = document.getElementById("plus")
function Redirection() { 
    if (slide[number] == slide[0]) {
        document.location.href = "/train/detail/1"
    } else if (slide[number] == slide[1]) {
        document.location.href = "/train/detail/2"
    } else if (slide[number] == slide[2]) {
        document.location.href = "/train/detail/3"
    } else if (slide[number] == slide[3]) {
        document.location.href = "/train/detail/4"
    } else if (slide[number] == slide[4]) {
        document.location.href = "/train/detail/5"
    } 
}


