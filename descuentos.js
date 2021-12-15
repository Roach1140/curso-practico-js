/** const precioOriginal = 120;
const descuento = 18;

const porcentajeDelPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajeDelPrecioConDescuento, 
    precioConDescuento,
});**/

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;
    const cupon = [
        "Black",
        "First-Time",
        "Gold",
    ];

    switch(cuponValue){
        case cupon[0]: 
            descuento = 50;
            break;

        case cupon[1]:
            descuento = 40;
            break;

        case cupon[2]:
            descuento = 35;
            break

    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El Precio con Descuento es: $"+ precioConDescuento;
}
