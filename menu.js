/*Realizar una calculadora que tenga las operaciones para
    1.Suma 
    2.Resta 
    3.Multiplicacion 
    4.Division 
    5.Salir
Nota: Tener en cuenta que el menu se va a repetir hasta que el ususario indique la opcion salir*/

//declarar variables
let op, num1, num2, resultado, rep=true;
do{
   op = parseInt(prompt("Calculadora: \n 1.Suma\n 2.Resta\n 3.Multiplicacion\n 4.Division\n 5.Salir\n"));
    console.log(op);

    switch (op){
        case 1:
            //Suma
            console.log("suma");
            num1 = parseFloat(prompt("Ingrese un numero"));
            num2 = parseFloat(prompt("Ingrese otro numero"));
            console.log(num1 + " + " + num2);
            resultado = num1 + num2;
            alert(resultado);
            console.log(resultado);
        break;
        case 2:
            //Resta
            console.log("resta");
            num1 = parseFloat(prompt("Ingrese un numero"));
            num2 = parseFloat(prompt("Ingrese otro numero"));
            console.log(num1 + " - " + num2);
            alert(resultado = num1 - num2);
            console.log(resultado);
        break
        case 3:
            //Multiplicacion
            console.log("multiplicacion");
            num1 = parseFloat(prompt("Ingrese un numero"));
            num2 = parseFloat(prompt("Ingrese otro numero"));
            console.log(num1 + " * " + num2);
            alert(resultado = num1 * num2);
            console.log(resultado);
        break
        case 4:
            //Division
            console.log("division");
            num1 = parseFloat(prompt("Ingrese un numero"));
            num2 = parseFloat(prompt("Ingrese otro numero"));
            console.log(num1 + " / " + num2);
            alert(resultado = num1 / num2);
            console.log(resultado);
        break
        case 5:
            //Salir
            console.log("salir");
            rep=false;
        break
    }
}while(rep);
