
const appendAgenda = (ev)=> {
    ev.preventDefault();
    const agendaCliente = [
        {nombre: "Empleador", CBU:"0000112261057897"},
        {nombre: "EDESUR", CBU:"0000023229397400"},
        {nombre: "Consorcio", CBU:"0000112271764259"},
        {nombre: "Metrogas", CBU:"0000023229397400"},
        {nombre: "Carrefour", CBU:"0000114428102982"},
        {nombre: "Mercado Pago", CBU:"0000552265180004"}
    ] 
    let contacto = {
        nombre: document.getElementById('nombreContacto').value, 
        CBU: document.getElementById('CBUContacto').value
    }
    agendaCliente.push(contacto)
    document.forms[0].reset();
    console.warn('Se agregó', contacto, 'a su agenda.');
    console.log(agendaCliente)

}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('addContactButton').addEventListener('click', appendAgenda);
});


