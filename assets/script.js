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
        console.log(v1);
        let sequenciaTask = v1.getElementsByClassName(x1.toString());
        console.log(x);
        console.log(x1);
        console.log(contTask[x].toString());
        console.log(sequenciaTask);
        console.log(sequenciaTask[0]);

        // console.log(contTask[x]);
        // console.log(sequenciaTask[x]);
        // v1.innerHTML = v1.innerHTML + "<a " + 'class="botton2"' 
        // + "onclick='apagar(this)'>" + '<p>' + valor + "</p>"
        // + "<img class='apagar'" + "src='./assets/lixeira.png'" 
        // + "onmouseover='onOver(this)'" + "onmouseout='onOut(this)'>"
        // + '</a>'; 

        // v1.innerHTML = v1.innerHTML + "<a>" + "<p>" + valor + "</p>" + "<img>" + "</img>" + "</a>";
        // v1.addEventListener("mouseover", onOver)
        // v1.addEventListener("mouseout", onOut)
        // v1.className = "apagar";
        // v1.setAttribute("img", "")

        sequenciaTask[0].innerHTML = sequenciaTask[0].innerHTML 
        + "<p>" + valor + "</p>"
        + "<a class='botton2'>" 
        + "<img class='apagar' src='./assets/lixeira.png'"
        + "onmouseover='onOver(this)' onmouseout='onOut(this)'>"
        + "</a>";
        let v2 = sequenciaTask[0].getElementsByClassName("apagar");
        v2[0].setAttribute("onclick", "apagar('" + x 
        + "', document.getElementById('" 
        + inp[x] + "')");
        
        contTask[x]++;
    } else {
        alert("laksdlaksdlaksldkaslkdlasd");
        e.value = "";

    }
    // console.log(document.getElementsByTagName("p"))
}

function apagar(x, e) {
    contTask[x]--;
    // console.log(e);
    // console.log(x);
    let text = e.getElementsByClassName(x);
    // console.log(text);
    text[0].innerHTML="";

}
function onOver(e) {
    e.style.backgroundColor="red";
}
function onOut(e) {
    e.style.backgroundColor="#87bff0";
}

