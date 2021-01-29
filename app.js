// gestion input page index.html

let btn_play = document.getElementById("btn_play");
let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let mark_user1 = document.getElementById("circle");
let mark_user2 = document.getElementById("cross");
// idem pour les marqueurs rond et croix
// si le radio bouton rond est sélectionné par le user1 : mark_user1 = 'O' et par conséquent mark_user2 = 'X'
if (mark_user1.checked){
    console.log("vous avez selectionné le Rond pour le user 1" );
}else if(mark_user2.checked) {
    console.log("Vous avez choisi la Croix pour le user 2");
}
btn_play.addEventListener("click",e=>{
    alert("user1 : " + user1.value + "\n" + "user2 : " + user2.value)
})

mark_user1.addEventListener("change", e=> {
    console.log("vous avez selectionné le Rond pour le user 1");
})

mark_user2.addEventListener("change", e=>{
    console.log("Vous avez choisi la Croix pour le user 1");
})