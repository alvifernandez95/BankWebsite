let listaTransferencias = document.getElementById("tablaTransferencias");

function addContacto(itemA, itemB, itemC, itemD) {
    let row = document.createElement("tr");
    let html =
      "<td>" + itemA + "</td><td>" + itemB + "</td><td>" + itemC + "</td><td>" + itemD + "</td>";
    row.innerHTML = html;
    listaTransferencias.appendChild(row);
}

fetch('../JSON/transacciones.json')
    .then( (resp) => resp.json())
    .then( (data) => {
        data.forEach(post => {
            addContacto(post.CBUEmisor, post.CBUReceptor, post.monto, post.fecha)
        });
    })