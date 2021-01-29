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

let alphaList = ['A','B','C']

let controls = {
    'A1': [],
    'B1': [],
    'C1': [],
    'A2': [],
    'B2': [],
    'C2': [],
    'A3': [],
    'B3': [],
    'C3': []
}

let cases = {}

alphaList.forEach(function(alpha){
    for(i=1;i<=3;i++){
        let div_case = document.getElementById(`${alpha}${i}`)
        if(div_case){
            div_case.addEventListener("click",e=>{

                let player = playersList[selected]
                div_case.innerHTML = `<h1 class="case">${player["text"]}</h1>`
                div_case.style.color = player["color"]
                cases[div_case.id] = player["text"]
                selected = 1 - selected

                test_case(div_case.id)
            })
        }else{
            console.log("div_case inexistante")
        }
    }
})

function test_case(id){
    if(id){
        let indice = id.substr(1)
        console.log(indice)

    }else{
        console.log("id inexistant")
    }
}
