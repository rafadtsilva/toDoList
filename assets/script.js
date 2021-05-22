onload = function () {
    let task = localStorage.getItem("task");
    let title = document.getElementById("task")
}

function inserir(e) {
    let valor = e.value;
    console.log(valor);

    let v1 = document.getElementById("l1");
    console.log(v1.innerHTML);
    v1.innerHTML = v1.innerHTML + "<li>" + valor + "</li>";
    
    // let title = document.getElementById("task");
    // title.innerHTML = valor;

    // localStorage.setItem("task", valor);
}