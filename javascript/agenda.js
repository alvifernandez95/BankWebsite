const appendAgenda = (ev) => {
  ev.preventDefault();
  let contacto = {
    nombre: document.getElementById("nombreContacto").value,
    alias: document.getElementById("aliasContacto").value,
    CBU: document.getElementById("CBUContacto").value,
  };
  document.forms[0].reset();
  let indexA = localStorage.length;
  let indexB = localStorage.length + 1;
  let indexC = localStorage.length + 2;
  localStorage.setItem(indexA.toString(), contacto.nombre.toString());
  localStorage.setItem(indexB.toString(), contacto.alias.toString());
  localStorage.setItem(indexC.toString(), contacto.CBU.toString());
  let tablaClientes = document.getElementById("tablaClientes");
  let row = document.createElement("tr");
  let html =
    "<td>" +
    contacto.nombre +
    "</td><td>" +
    contacto.alias +
    "</td><td>" +
    contacto.CBU +
    "</td>";
  row.innerHTML = html;
  tablaClientes.appendChild(row);
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("addContactButton")
    .addEventListener("click", appendAgenda);
});
