let player1 = $_GET("player1")
console.log(player1)

let player2 = $_GET("player2")
console.log(player2)

let circle = $_GET("circle")
console.log(circle)

let cross = $_GET("cross")
console.log(cross)

let selected = 0

let playersList = []

if(circle=="true"){

    console.log("circle selected")
    playersList = [
        {
            name: player1,
            text: "O",
            color: "red"
        },
        {
            name: player2,
            text: "X",
            color: "black"
        }
    ]
}
else if(cross=="true"){

    console.log("cross selected")
    playersList = [
        {
            name: player1,
            text: "X",
            color: "black"
        },
        {
            name: player2,
            text: "O",
            color: "red"
        }
    ]
}

let title = document.getElementById("title_id")

let alphaList = ['A','B','C']

let controls = {
    A1:["A1 A2 A3","A1 B1 C1","A1 B2 C3"],
    A2:["A1 A2 A3","A2 B2 C2"],
    A3:["A1 A2 A3","A3 B3 C3","A3 B2 C1"],
    B1:["A1 B1 C1","B1 B2 B3"],
    B2:["B1 B2 B3","A2 B2 C2","A1 B2 C3","A3 B2 C1"],
    B3:["B1 B2 B3","A3 B3 C3"],
    C1:["A1 B1 C1","C1 C2 C3","A3 B2 C1"],
    C2:["A2 B2 C2","C1 C2 C3"],
    C3:["C1 C2 C3","A3 B3 C3","A1 B2 C3"]
}

let cases = {}

let btn_goback = document.getElementById('btn_goback')
btn_goback.addEventListener("click",e=>{
    document.location.href = "index.html"
})

let btn_replay = document.getElementById('btn_replay')
btn_replay.addEventListener("click",e=>{
    replay()
})

let message = document.getElementById("message")
let popup = document.getElementById("popup")
let btn_popup_replay = document.querySelector("button")
btn_popup_replay.addEventListener("click",e=>{
    popup.style.display = "none"
    replay()
})

let player = playersList[selected]

alphaList.forEach(function(alpha){
    for(i=1;i<=3;i++){
        let div_case = document.getElementById(`${alpha}${i}`)
        if(div_case){
            div_case.addEventListener("click",e=>{

                div_case.innerHTML = `<h1 class="case">${player["text"]}</h1>`
                div_case.style.color = player["color"]
                cases[div_case.id] = player["text"]

                test_case(div_case.id)

                selected = 1 - selected
                player = playersList[selected]
                
            })
        }else{
            console.log("div_case inexistante")
        }
    }
})

function test_case(id){
    if(id){
        let win = false
        let test = controls[id]
        for(i=0;i<test.length;i++){
            let ids_array = test[i].split(' ')
            let triple = true
            for(j=0;j<ids_array.length;j++){
                triple &= (player["text"] == cases[ids_array[j]])
            }
            win |= triple
            if(triple) break
        }
        let turns_count = Object.keys(cases).length
        if(win){
            console.log(`The winner is ${player["name"]}`)
            message.innerHTML = `The winner is <br>${player["name"]}`.toUpperCase()
            popup.style.display = "block"
        }
        else if(turns_count==9){
            console.log(`Game over`)
            message.innerHTML = `Game over`.toUpperCase()
            popup.style.display = "block"            
        }
    }else{
        console.log("id inexistant")
    }
}

function replay(){
    title.innerHTML = "are you ready".toUpperCase()
    title.style.color = "#FFF"
    cases = {}
    alphaList.forEach(function(alpha){
        for(i=1;i<=3;i++){
            let div_case = document.getElementById(`${alpha}${i}`)
            if(div_case){
                div_case.innerHTML = ""
            }else{
                console.log("div_case inexistante")
            }
        }
    })    
}

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}