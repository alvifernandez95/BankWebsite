
let nombre = document.getElementById('nombreContacto');
let alias = document.getElementById('aliasContacto');
let CBU = document.getElementById('CBUContacto');
let btnAgregar = document.getElementById('addContactButton');
let listaContactos = document.getElementById('tablaClientes');

mostrarLista();

function mostrarLista(){
    for(let i=0; i<localStorage.length; i += 3){
        let keyA = localStorage.key(i);
        let keyB = localStorage.key(i+1);
        let keyC = localStorage.key(i+2);
        let itemA = localStorage.getItem(keyA)
        let itemB = localStorage.getItem(keyB)
        let itemC = localStorage.getItem(keyC)
        addContacto(itemA,itemB,itemC)
    }
}

function agregar_nuevo_contacto(itemA, itemB, itemC){
    if(itemA && itemB && itemC){
        addContacto(itemA, itemB, itemC);
        let indexA = localStorage.length;
        let indexB = localStorage.length + 1;
        let indexC = localStorage.length + 2;
        localStorage.setItem(indexA.toString(),itemA.toString());
        localStorage.setItem(indexB.toString(),itemB.toString());
        localStorage.setItem(indexC.toString(),itemC.toString());
    }else{
        alert("El registro ingresado podría estar vacío.");
    }
}

function addContacto(itemA, itemB, itemC){
    let row = document.createElement('tr');
    let html = '<td>' + itemA +'</td><td>' + itemB + '</td><td>' + itemC+'</td>';
    row.innerHTML = html;
    tablaClientes.appendChild(row);
}

btnAgregar.addEventListener("click", ()=>{
    let dato1 =  nombre.value;
    let dato2 = alias.value;
    let dato3 = CBU.value;
    agregar_nuevo_contacto(dato1,dato2,dato3);
    nombre.value = '';
    alias.value = '';
    CBU.value = '';
})