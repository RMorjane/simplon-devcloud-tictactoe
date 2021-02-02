// commande de déclenchement de la popup
document.getElementById("btn-test").addEventListener("click", function(){document.getElementsByClassName("popup-center")[0].classList.add("active");});

// commande de disparition de la popup
document.getElementById("popup-new-game-btn").addEventListener("click", function(){document.getElementsByClassName("popup-center")[0].classList.remove("active");});
