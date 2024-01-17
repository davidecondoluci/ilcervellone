function myFunction() {
  var x = document.getElementById("links");
  var icon = document.getElementById("menu-icon");

  if (x.style.display === "block") {
    x.style.display = "none";
    icon.innerHTML = "menu";
  } else {
    x.style.display = "block";
    icon.innerHTML = "close";
  }
}

// Aggiungi questa funzione per gestire la visualizzazione del menu quando la larghezza della finestra cambia
window.onresize = function () {
  var x = document.getElementById("links");
  var icon = document.getElementById("menu-icon");

  if (window.innerWidth >= 768) {
    x.style.display = "flex"; // Imposta il display su "flex" per schermate desktop
    icon.innerHTML = "menu";
  } else {
    if (x.style.display !== "block") {
      x.style.display = "none"; // Mantieni il display su "none" se il menu è chiuso
      icon.innerHTML = "menu";
    }
  }
};
