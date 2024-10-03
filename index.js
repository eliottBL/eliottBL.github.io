function Hide(elementId) {
    document.getElementById(elementId).className = 'caché';
};
function HideAll(ArrayId) {
    for (let i = 0; i < ArrayId.length; i++) {
        Hide(ArrayId[i]);
    }
}
function Show(elementId) {
    document.getElementById(elementId).className = 'visible';
};

function InitColor(elementIdA, elementIdB) {
    document.getElementById(elementIdA).style.color = 'black';
    document.getElementById(elementIdB).style.color = 'black';
};
function ChangeColor(elementIdGreen, elementIdBlack) {
    document.getElementById(elementIdGreen).style.color = 'greenyellow';
    document.getElementById(elementIdBlack).style.color = 'black';
};


document.querySelector(".about").addEventListener("click", function (event) {
    if (document.getElementById("bio").className === 'caché') {
        Show("bio");
        let ArrayId = ["projet1", "projet2", "projets"];
        HideAll(ArrayId);
    } else {
        Hide("bio");
    }
});

document.querySelector(".works").addEventListener("click", function (event) {
    if (document.getElementById("projets").className === 'caché') {
        InitColor("p1", "p2");
        Show("projets");
        let ArrayId = ["projet1", "projet2", "bio"];
        HideAll(ArrayId);
    } else {
        let ArrayId = ["projet1", "projet2", "projets"];
        HideAll(ArrayId);
    }
});

document.getElementById("p1").addEventListener("click", function (event) {
    if (document.getElementById("projet1").className === 'caché') {
        ChangeColor("p1", "p2");
        Hide("projet2");
        Show("projet1");
    }
});

document.getElementById("p2").addEventListener("click", function (event) {
    if (document.getElementById("projet2").className === 'caché') {
        ChangeColor("p2", "p1");
        Hide("projet1");
        Show("projet2");
    }
});