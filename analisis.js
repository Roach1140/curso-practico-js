/* Funciones Helpers - funciones que no son parte de la lógica del negocio o del analisis que se va a realizar
pero son necesarias para realizar los calculos*/

// para calcular la mediana se requiere validar si el número es par o impar.
function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    } else {                // este código puede simplificarse con solo usar la condicional 
        return false;       // del if(numerito % 2 === 0) ya que si se cumple automaticamente
    }                       // retornará un true y en caso de que no retornará false. 
}                           // por lo tanto solo podría establecerse en la función de la siguiente manera.
                            // function esPar(Numerito){ return (numerito % 2 === 0);}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){ // funcion para calcular la Media Aritmetica
            return valorAcumulado + nuevoElemento;
        }
    );
                             
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana

// ahora se debe calcular la mediana general
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2); //se usa el Método parseInt para remover los decimales al resultado. 

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana General

/* Función creada para traer los salarios únicamente del array colombia.
y almacenarlos en otro Array. */
const salariosCol = colombia.map(   // Método .map
    function(personita) {
        return personita.salario;
    }
);

/* función creada para organizar los salarios del array salariosCol. */
const salariosColSorted = salariosCol.sort( // método sort para ordenar los valores en un nuevo array.
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del Top 10%

const spliceStart = (salariosColSorted.length * (100 - 10) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col, 
});