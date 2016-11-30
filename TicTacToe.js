var tab = document.getElementById("jeu");
var cells = tab.getElementsByTagName('td');
var player = 1;
var tour = 0;
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var resultat = document.getElementById("resultat");
var txtres = document.getElementById("textres");

for (var i = 0; i < 9; i++) {
    cells[i].className = "noplayer";
    cells[i].onclick = clickCell;
}


function clickCell(e) {
    if (player == 1 && e.target.className == "noplayer") {
        e.target.innerHTML = "%";
        e.target.className = "player1";
        p2.innerHTML = "Joueur 2 ^";
        p1.innerHTML = "";
        tour++;
        checkrow();
        player = 2;
    } else if (e.target.className == "noplayer") {
        e.target.innerHTML = "^";
        e.target.className = "player2";
        p1.innerHTML = "Joueur 1 %";
        p2.innerHTML = "";
        tour++;
        checkrow();
        player = 1;
    }

}

function checkrow() {
  if (cells[0].className == cells[1].className && cells[1].className == cells[2].className && cells[0].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire ! <br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[3].className == cells[4].className && cells[4].className == cells[5].className && cells[3].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer ? ";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[6].className == cells[7].className && cells[7].className == cells[8].className && cells[6].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[0].className == cells[3].className && cells[3].className == cells[6].className && cells[0].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[1].className == cells[4].className && cells[4].className == cells[7].className && cells[1].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[2].className == cells[5].className && cells[5].className == cells[8].className && cells[2].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[0].className == cells[4].className && cells[4].className == cells[8].className && cells[0].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (cells[2].className == cells[4].className && cells[4].className == cells[6].className && cells[2].className!="noplayer"){
    txtres.innerHTML = "Le joueur " + player + " remporte la victoire !<br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }else if (tour==9) {
    txtres.innerHTML = "Match nul !<br> Recommencer ?";
    resultat.style.display = "block";
    p1.innerHTML = "";
    p2.innerHTML = "";
  }
}

function refresh() {
  location.reload();
}
