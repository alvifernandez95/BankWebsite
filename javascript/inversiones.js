const simularInversion = (ev)=> {
    ev.preventDefault();
    const r = 0.38;
    const t = 1;
    const n = 2;
    let montoInicial = document.getElementById('montoInversion').value;
    let montoFinal = montoInicial*(Math.pow((1 + (r/n)),(n*t)));
    //console.log(montoFinal)
    let mensaje1 = 'El monto acumulado tras 1 año es de $' + montoFinal +'.'
    document.getElementById("resultadoSimulacion1").innerHTML = mensaje1;

}

const simularInversion2 = (ev)=> {
    ev.preventDefault();
    const r2 = 0.45;
    const t2 = 1;
    const n2 = 1;
    let montoInicial2 = document.getElementById('montoInversion2').value;
    let montoFinal2 = montoInicial2*(Math.pow((1 + (r2/n2)),(n2*t2)));
    console.log(montoFinal2)
    let mensaje2 = 'El monto acumulado tras 1 año es de $' + montoFinal2 +'.'
    document.getElementById("resultadoSimulacion2").innerHTML = mensaje2;
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('simularInversionButton').addEventListener('click', simularInversion);
});
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('simularInversion2Button').addEventListener('click', simularInversion2);
});