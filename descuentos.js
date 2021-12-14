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


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El Precio con Descuento es: $ " + precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];