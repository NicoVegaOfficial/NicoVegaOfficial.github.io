function abrirMenu() {
    var idMenu = document.getElementById("myTopnav");
    if (idMenu.className === "topnav") {
        idMenu.className += " responsive";
    } else {
        idMenu.className = "topnav";
    }
}