onload = function () {
    let task = localStorage.getItem("task");
    let title = document.getElementById("task")
}

function inserir(x, e) {
    let valor = e.value;
    if (valor != "") {
        // console.log(valor);
        e.value = "";

        let inp = ["d1", "d2", "d3", "d4", "d5", "d6", "d7"];

        let v1 = document.getElementById(inp[x]);
        console.log(v1.innerHTML);
        // v1.innerHTML = v1.innerHTML + "<p " 
        // + 'onclick="apagar(this)">'+ valor + "</p>";
        // v1.innerHTML = v1.innerHTML + "<p>" + valor + "</p>" + "<a "
        // + 'onclick="apagar(this)">' + '<img class="apagar" src="./assets/lixeira.png">' 
        // + "</a>";
        v1.innerHTML = v1.innerHTML + "<a "
        + 'class="botton2">' + "<p>" + valor + "</p>" 
        + '<img onclick="apagar(this)" class="apagar" src="./assets/lixeira.png">' 
        + "</a>";
    }
    // console.log(document.getElementsByTagName("p"))
}

function apagar(e) {
    console.log(e);
    e.outerHTML="";

}