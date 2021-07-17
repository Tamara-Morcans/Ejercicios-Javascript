
function productos(){
    let munecasVendidas = document.getElementById("munecasVendidas").value;
    let payasosVendidos = document.getElementById("payasosVendidos").value;
    let pesoMunecas = munecasVendidas * 75;
    let pesoPayasos = payasosVendidos * 112;
    let pesoTotal= Math.ceil((pesoMunecas + pesoPayasos)/1000);//0.075
    //(5 *.75 ) / 1000 =0.0037
    ///(10 * 112) / 1000=1.12
    // (3.75 + ) / 1000 =1.1237
    document.write(`<h1>El numero de paquetes es: ${pesoTotal} con un peso total de: ${pesoMunecas+pesoPayasos}g </h1>`);
 }