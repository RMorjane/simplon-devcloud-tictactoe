let ids = ['A1','B1','C1','A2','B2','C2','A3','B3','C3']

ids.forEach(function(item){
    let div_case = document.getElementById(item)
    div_case.addEventListener("click",e=>{
        let div = e.target
        console.log(div.id)
        div_case.innerHTML = "<h1>O</h1>"
    })
})