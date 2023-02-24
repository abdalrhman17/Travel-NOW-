
let mainTxt = document.querySelector(".text");

let peruCard = document.getElementById("peruCard");
let peru = document.getElementById("peruInfo");

let japanCard = document.getElementById("japanCard");
let japan = document.getElementById("japanInfo");

let norwayCard = document.getElementById("norwayCard");
let norway = document.getElementById("norwayInfo");

let zambiaCard = document.getElementById("zambiaCard");
let zambia = document.getElementById("zambiaInfo");


peruCard.onclick = function() {
    peru.style.display = 'block';
    japan.style.display = 'none';
    norway.style.display = 'none';
    zambia.style.display = 'none';

    mainTxt.innerHTML = ''
}

japanCard.onclick = function() {
    peru.style.display = 'none';
    japan.style.display = 'block';
    norway.style.display = 'none';
    zambia.style.display = 'none';

    mainTxt.innerHTML = ''
}

norwayCard.onclick = function() {
    peru.style.display = 'none';
    japan.style.display = 'none';
    norway.style.display = 'block';
    zambia.style.display = 'none';

    mainTxt.innerHTML = ''
}

zambiaCard.onclick = function() {
    peru.style.display = 'none';
    japan.style.display = 'none';
    norway.style.display = 'none';
    zambia.style.display = 'block';

    mainTxt.innerHTML = ''
}



let changeB = document.querySelector(".images");

changeB.onclick = function(eve) {
    console.log(eve.target.tagName)
}