// suma
var boton = document.getElementById('sumar');
var respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacersuma);

function hacersuma(){

    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta.innerHTML=`El resultado de la suma es ${n3}`;
}

// resta
var boton = document.getElementById('restar');
var respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerresta);

function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2;
    respuesta.innerHTML=`El resultado de la resta es ${n3}`;
}

// dividir
var boton = document.getElementById('dividir');
var respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerdivision);

function hacerdivision(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2;
    respuesta.innerHTML=`El resultado de la división es ${n3}`;
}


// multiplicar
var boton = document.getElementById('multiplicar');
var respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacermultiplicacion);

function hacermultiplicacion(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2;
    respuesta.innerHTML=`El resultado de la multiplicación es ${n3}`;
}

