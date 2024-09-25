document.querySelector(".about").addEventListener("click", function (event) {
    if (document.getElementById("bio").className === 'caché') {
        document.getElementById("projet2").className = 'caché';
        document.getElementById("projet1").className = 'caché';
        document.getElementById("bio").className = 'visible';
        document.getElementById("projets").className = 'caché'
    } else {
        document.getElementById("bio").className = 'caché';
    }
});

document.querySelector(".works").addEventListener("click", function (event) {
    if (document.getElementById("projets").className === 'caché') {
        document.getElementById("projet2").className = 'caché';
        document.getElementById("projet1").className = 'caché';
        document.getElementById("p1").style.color = 'black';
        document.getElementById("p2").style.color = 'black';
        document.getElementById("projets").className = 'visible';
        document.getElementById("bio").className = 'caché';
    } else {
        document.getElementById("projets").className = 'caché';
        document.getElementById("projet2").className = 'caché';
        document.getElementById("projet1").className = 'caché';
    }
});

document.getElementById("p1").addEventListener("click", function (event) {
    if (document.getElementById("projet1").className === 'caché') {
        document.getElementById("p1").style.color = 'greenyellow';
        document.getElementById("p2").style.color = 'black';
        document.getElementById("projet1").className = 'visible';
        document.getElementById("projet2").className = 'caché';
    }
});

document.getElementById("p2").addEventListener("click", function (event) {
    if (document.getElementById("projet2").className === 'caché') {
        document.getElementById("p2").style.color = 'greenyellow';
        document.getElementById("p1").style.color = 'black';
        document.getElementById("projet2").className = 'visible';
        document.getElementById("projet1").className = 'caché';
    }
});