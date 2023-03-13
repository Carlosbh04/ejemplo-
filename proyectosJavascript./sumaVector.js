

function sumavector (v1,v2){

    let resultado =[];

    v1.forEach((element, indice) => {
        resultado.push(element + v2[indice])
    });
    return resultado;
}
let v1 = [2,2,4];
let v2 = [3,8,6]
let resultado = sumavector(v1,v2);
console.log(resultado);



function sumaVector1 (v3,v4){

    let resul = [];
    return v3.map((elem,index) => elem + v4[index]);
}

let v3 = [2,3,4];
let v4 = [6,9,5];

let resul = sumaVector1(v3,v4)
console.log(resul);


function filtrarpares (v){
    return v.filter(eleme => eleme % 2 === 0);

}


let v = [1,2,3,4,5,6,7,8,9,10];
let eleme = filtrarpares(v)
console.log(eleme);


function sumatorio (v){
    return v.reduce((ac, eleme)=> ac + eleme, 0);

}


let ac = sumatorio(v)
console.log(ac);