// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI 
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML

// Perímetro del cuadrado
function calcularPerimetroCuadrado() {
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

// Área del cuadrado
function calcularAreaCuadrado() {
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}

// Altura Triángulo
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    }
    else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function alturaButton() {
    
    const inputLadoA = document.getElementById("ladoA");
    const ladoAValue = inputLadoA.value;

    const inputLadoB = document.getElementById("ladoB");
    const ladoBValue = inputLadoB.value;

    const inputBase = document.getElementById("base");
    const baseValue = inputBase.value;

    const alturaTriangulo = alturaTrianguloIsosceles(ladoAValue, ladoBValue, baseValue);

    const alturaT = document.getElementById("alturaT");

    if (ladoAValue != ladoBValue) {

        alturaT.innerText = "Los lados a y b no son iguales";
    }

    else {

        alturaT.innerText = "La altura del triángulo isósceles es de: " + alturaTriangulo;
    }
}

// Perímetro del triángulo
function calcPerimetroTriangulo() {

    const inputLadoA = document.getElementById("ladoA");
    const ladoAValue = parseInt(inputLadoA.value);

    const inputLadoB = document.getElementById("ladoB");
    const ladoBValue = parseInt(inputLadoB.value);

    const inputBase = document.getElementById("base");
    const baseValue = parseInt(inputBase.value);

    const perTriangulo = perimetroTriangulo(ladoAValue, ladoBValue, baseValue);
    
    const perimetroT = document.getElementById("perimetroT");

    perimetroT.innerText = "El perímetro del triángulo isósceles es de: " + perTriangulo;
}

// Área del triángulo
function calcAreaTriangulo() {

    const inputLadoA = document.getElementById("ladoA");
    const ladoAValue = parseInt(inputLadoA.value);

    const inputLadoB = document.getElementById("ladoB");
    const ladoBValue = parseInt(inputLadoB.value);

    const inputBase = document.getElementById("base");
    const baseValue = parseInt(inputBase.value);

    const inputAlt = document.getElementById("altura");
    const alturaValue = parseInt(inputAlt.value);

    const areaTriang = areaTriangulo(baseValue, alturaValue);
    
    const areaT = document.getElementById("areaT");

    areaT.innerText = "El área del triángulo isósceles es de: " + areaTriang;
}

// Diámetro círculo
function calcularDiametroCirculo() {

    const inputRadio = document.getElementById("radioCirculo");
    const radioValue = parseInt(inputRadio.value);

    const diametroCir = diametroCirculo(radioValue);
    const diametroC = document.getElementById("diametroC");

    diametroC.innerText = "El diámetro del círculo es de: " + diametroCir;
}

// Perímtro círculo
function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("radioCirculo");
    const radioValue = parseInt(inputRadio.value);

    const perimetroCir = perimetroCirculo(radioValue);
    const perimetroC = document.getElementById("perimetroC");

    perimetroC.innerText = "El perímetro del círculo es de: " + perimetroCir;
}

// Área círculo
function calcularAreaCirculo() {
    const inputRadio = document.getElementById("radioCirculo");
    const radioValue = parseInt(inputRadio.value);

    const areaCir = areaCirculo(radioValue);
    const areaC = document.getElementById("areaC");

    areaC.innerText = "El área del círculo es de: " + areaCir;
}