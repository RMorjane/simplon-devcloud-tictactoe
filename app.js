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

let selected = 0

let playersList = [
    {
        name: "morjane",
        text: "O",
        color: "red"
    },
    {
        name: "biben",
        text: "X",
        color: "black"
    }
]

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

let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')

let player = playersList[selected]

p1.innerHTML = `<b>${playersList[0]["name"].toUpperCase()}</b>`
p1.style.color = playersList[0]["color"]

p2.innerHTML = `<b>${playersList[1]["name"].toUpperCase()}</b>`
p2.style.color = playersList[1]["color"]

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
        if(win){
            title.innerHTML = `the  winner  is  <font color=red>${player["name"]}</font>`.toUpperCase()
            //title.style.color = player["color"]
            // if(confirm("Voulez - vous jouer une nouvelle partie ?")){
            //     replay()
            // }
        }
    }else{
        console.log("id inexistant")
    }
}

function replay(){
    title.innerHTML = "are you ready".toUpperCase()
    title.style.color = "#FFF"
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