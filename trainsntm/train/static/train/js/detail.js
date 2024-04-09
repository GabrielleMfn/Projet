// Afficher la bonne Image
// PS : si je ne mettais pas ça : http://127.0.0.1:8000 ça me laisser la première image

planTrain = document.getElementById("plans")

if (document.location.href == "http://127.0.0.1:8000/train/detail/1") {
    planTrain.src = "/static/train/imgH/plan-rer-a.png"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/2") {
    planTrain.src = "/static/train/imgH/plan-rer-b.png"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/3") {
    planTrain.src = "/static/train/imgH/plan-rer-c.png"
    planTrain.style.width = "1000px"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/4") {
    planTrain.src = "/static/train/imgH/plan-rer-d.png"
    planTrain.style.width = "1000px"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/5") {
    planTrain.src = "/static/train/imgH/plan-rer-e.png"
    planTrain.style.width = "900px"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/6") {
    planTrain.src = "/static/train/imgH/plan-H.jpg"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/7") {
    planTrain.src = "/static/train/imgH/plan-J.png"
    planTrain.style.width = "900px"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/8") {
    planTrain.src = "/static/train/imgH/plan-K.png"
    planTrain.style.width = "900px"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/9") {
    planTrain.src = "/static/train/imgH/plan-L.png"
    planTrain.style.width = "875px"
} else if (document.location.href == "http://127.0.0.1:8000/train/detail/10") {
    planTrain.src = "/static/train/imgH/plan-N.png"
    planTrain.style.width = "750px"
}else if (document.location.href == "http://127.0.0.1:8000/train/detail/11") {
    document.location.href = "/train/detail/1"
}





