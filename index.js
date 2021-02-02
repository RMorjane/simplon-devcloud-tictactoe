let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let circle = document.getElementById("circle")
let cross = document.getElementById("cross")

let btn_play = document.getElementById("btn_play")

btn_play.addEventListener("click",e=>{
    
    console.log("player1 = ",player1.value)
    console.log("player2 = ",player2.value)
    console.log("circle = ",circle.checked)
    console.log("cross = ",cross.checked)

    if(!empty()){
        document.location.href = `app.html?player1=${player1.value}&player2=${player2.value}&circle=${circle.checked}&cross=${cross.checked}`        
    }    
})

function empty(){
    return player1.value.trim()=="" || player2.value.trim()==""
}