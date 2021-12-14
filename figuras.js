// Código del Cuadrado

console.group("cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;

function perimetroCuadrado(lado)
{
    return lado * 4;
}

perimetroCuadrado()

// console.log("El perímetro del cuadrado es " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El Área del cuadrado es " + areaCuadrado + " cm²");

function areaCuadrado(lado)
{
    return lado * lado;
}

areaCuadrado()

console.groupEnd();

// Código del Triángulo

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//    "Los lados del Triángulo miden: " 
//   + ladoTriangulo1 
//    + " cm, " 
//    + ladoTriangulo2 
//    + " cm, "
//    + baseTriangulo 
//    + " cm."
//    );

// const alturaTriangulo = 5.5;
// console.log("La altura del Triangulo es " + alturaTriangulo + " cm.");

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

perimetroTriangulo()

// console.log("El perímetro del Triangulo es " + perimetroTriangulo + " cm.");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 

function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

areaTriangulo()

// console.log("El área del Triangulo es " + areaTriangulo + " cm².");

console.groupEnd();

// Código del Círculo

console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del Circulo es " + radioCirculo + " cm².");

// Diámetro

// const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radio)
{
    return radio * 2;
}

diametroCirculo()

// console.log("El diámetro del Circulo es " + diametroCirculo + " cm².");

// PI

const PI = Math.PI;
console.log("PI es " + PI);

// Circunferencia

// const perimetroCirculo = diametroCirculo * PI;

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

perimetroCirculo()

// console.log("El perimetro del Circulo es " + perimetroCirculo + " cm².");

// Área

// const areaCirculo = PI * ( radioCirculo * radioCirculo); 

function areaCirculo(radio)
{
    return PI * (radio * radio) * PI; 
}

// console.log("El área del Circulo es " + areaCirculo + " cm².");

console.groupEnd();


// Aqui interactuamos con el Html Cuadrado

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// Aqui interactuamos con el Html Triangulo

function calcularPerimetroTriangulo()
{
    var input = document.getElementById("InputLado_1");
    const lado1 = Number(input.value);
    var input = document.getElementById("InputLado_2");
    const lado2 = Number(input.value);
    var input = document.getElementById("InputBase");
    const base = Number(input.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    var input = document.getElementById("InputBase");
    const base = input.value;
    var input = document.getElementById("InputAltura");
    const altura = input.value;
    const area = areaTriangulo(base, altura);
    alert(area);
}

// Aqui interactuamos con el Html Circulo

function calcularPerimetroCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB,
     trianguloGrandeLadoBase){
    
    if (trianguloGrandeLadoA != trianguloGrandeLadoB)
    {
        console.error("Los lados a y b no son iguales");
    }
    else
    {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        
        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        
        return trianguloGrandeAltura;
    }
}
