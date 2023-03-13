

function arraydenumeros(n,m){

    let number = []

    for(let i = 0; i < n; i++){
        number.push(Math.floor(Math.random()*(m)));
        
   
}
   return number;
}

// let number = arraydenumeros(5,10)
// console.log(number);




function suma (v1,v2) {

    if(v1.length !== v2.length) {
           return null ;
    }
    
    let resul = [];

    for(let i = 0; i < v1.length; i++){
         resul.push(v1[i] + v2[i]);
    }
        return resul;
    }



let v1 = [10,20,15];
let v2=[ 15,20,10];

// let resul = suma(v1,v2);
// console.log(resul);



function multiplicacion(n,v){

    let number2= [];

    for(let i = 0; i < v.length; i++){
        number2.push(n*v[i])

        }
        return number2;
    }

let v = [10,2,4];
let n = [2];
// let number2 = multiplicacion(n,v);
// console.log(number2);


function resta (v3,v4){

    if(v3.length !== v4.length){
        return null;
    }

    let resulta = [];

    for(let i = 0; i < v3.length; i++){
        resulta.push(v3[i] - v4 [i])
    }
     return resulta;

}
let v3 = [20,30,40];
let v4 = [15,20,30];
// let resulta = resta(v3,v4);
// console.log(resulta);


function mult(v5,v6){
    if(v5.length !== v6.length){
        return null;
    }

    let resultados = [];
    for(let i = 0; i < v5.length; i++){
        resultados.push(v5[i] * v6[i]);
    }
    return resultados;
}

let v5 = [15,20,8];
let v6 = [3,8,9];
// let resultados = mult(v5,v6);
// console.log(resultados);

module.exports = { arraydenumeros, suma, multiplicacion, resta, mult};


