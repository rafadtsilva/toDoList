onload = function () {
    let task = localStorage.getItem("task");
    let title = document.getElementById("task");
}

var contTask = [0, 0, 0, 0, 0, 0, 0, 0] ;

function inserir(x, e) {
    let valor = e.value;
    if (contTask[x] <= 5) {
        // console.log(valor);
        e.value = "";

        

        let inp = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"];
        let x1 = contTask[x];
        let v1 = document.getElementById(inp[x]);
        let sequenciaTask = v1.getElementsByClassName(x1.toString());

        sequenciaTask[0].innerHTML = sequenciaTask[0].innerHTML 
        + "<p>" + valor + "</p>"
        + "<a class='botton2'>" 
        + "<img class='apagar' src='./assets/lixeira.png'"
        + "onmouseover='onOver(this)' onmouseout='onOut(this)'>"
        + "</a>";
        let v2 = sequenciaTask[0].getElementsByClassName("apagar");
        v2[0].setAttribute("onclick", "apagar('" + x1 
        + "', document.getElementById('" 
        + inp[x] + "'))");
        
        contTask[x]++;
    } else {
        alert("laksdlaksdlaksldkaslkdlasd");
        e.value = "";

    }
    // console.log(document.getElementsByTagName("p"))
}

function apagar(x, e) {
    console.log(contTask[x]);
    console.log(e);
    console.log(x);
    let text = e.getElementsByClassName(x);
    console.log(text);
    text[0].innerHTML="";
    contTask[x]--;
    console.log(contTask[x]);

}
function onOver(e) {
    e.style.backgroundColor="red";
}
function onOut(e) {
    e.style.backgroundColor="#87bff0";
}

