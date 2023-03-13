function suma( operacion, op1 , op2){
    operacion == "sum"; {
        return op1 + op2
    }

   }


// console.log(suma(suma, 10,8));



function resta (operacion, op1 , op2){
    operacion === "subs";{
     return op1 - op2
 }
}
//  console.log(resta("subs", 20,10));


 function multiplicacion (operacion, op1 , op2){
    operacion === "mult";{
     return op1 * op2
    }
 }
 
//  console.log(multiplicacion("mult", 10,10));


 function division (operacion, op1 , op2){
    operacion === "div";{
     return op1 / op2
    }
 }
 
//  console.log(division("div", 10,2));


 module.exports = { suma, resta, multiplicacion ,division};