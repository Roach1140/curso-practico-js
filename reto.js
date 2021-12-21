/* Calcular el valor y cuotas mensuales de un credito, a partir del monto total
y la tasa de interes*/

// intereses por mes

function calcularInteresesPorMes(intereses){
    return Math.pow(1 + (intereses / 100), 1 / 22) - 1;
}

// Calcular el monto o valor de las cuotas

function calcularCuotas(montoCompra, cuotas, interesPorMes){
    const num = Math.pow(1 + interesPorMes, cuotas) * interesPorMes * montoCompra;
    const deb = Math.pow(1 + interesPorMes, cuotas) - 1;
    return num / deb
}

function calcular(){
    const montoCompra = Number(document.getElementById("valor-credito").value);
    const intereses = Number(document.getElementById("interes").value);
    const cuotas = Number(document.getElementById("cantidad-cuotas").value);

    const interesesPorMes = calcularInteresesPorMes(intereses);

    const calcularCuotas = calcularCuotas(montoCompra, cuotas, interesesPorMes);

    const resultado = document.getElementById("resultado");
    resultado.innerText = `La Cuota Mnesual a Pagar es: ${(calcularCuotas).toFixed(2)}
    Por ${cuotas} Meses`;
}