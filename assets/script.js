onload = function () {
    let task = localStorage.getItem("task");
    let title = document.getElementById("task")
}

function inserir(e) {
    let valor = e.value;
    console.log(valor);
    e.value = "";

    let v1 = document.getElementById("d1");
    console.log(v1.innerHTML);
    v1.innerHTML = v1.innerHTML + "<p>" + valor + "</p>";
    
}