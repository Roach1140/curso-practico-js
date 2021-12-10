// Código del Cuadrado

console.group("cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Área del cuadrado es " + areaCuadrado + " cm²");

console.groupEnd();

// Código del Triángulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del Triángulo miden: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm, " 
    + baseTriangulo 
    + " cm."
    );

const alturaTriangulo = 5.5;
console.log("La altura del Triangulo es " + alturaTriangulo + " cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del Triangulo es " + perimetroTriangulo + " cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
console.log("El área del Triangulo es " + areaTriangulo + " cm².");

console.groupEnd();

// Código del Círculo

console.group("Círculo");

// Radio
const radioCirculo = 4;
console.log("El radio del Circulo es " + radioCirculo + " cm².");

// Diámetro

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del Circulo es " + diametroCirculo + " cm².");

// PI

const PI = Math.PI;
console.log("PI es " + PI);

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es " + perimetroCirculo + " cm².");

// Área

const areaCirculo = PI * ( radioCirculo * radioCirculo); 
console.log("El área del Circulo es " + areaCirculo + " cm².");

console.groupEnd();

