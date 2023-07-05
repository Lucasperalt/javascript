alert("¡Bienvenido al Estadio Mas Monumental!");
let nombreYApellido = prompt('Ingrese tu nombre y apellido');
let dni = prompt('Ingrese su Dni') ;
let edad = prompt('Ingrese tu edad');
if(edad>=18){ 

    alert(nombreYApellido + " usted es mayor de edad y puede comprar entradas");
    
    let entradas = prompt('Ingrese la cantidad de entradas que necesita y recuerde que la capacidad total del Estadio es de 200 personas');
    if (entradas<=200){
        alert(nombreYApellido + " ya puede pasar a abonar y retirar sus entradas en la boleteria del estadio, recuerde llevar su dni, de lo contrario no podrá retirar sus entradas" );
        function boletas (x){
            alert("Se registró la compra de "+ x+ " entradas");
        }
        boletas(entradas);
    }
    else if (entradas>200){
        alert(nombreYApellido+" no hay tantas entradas disponibles");
    };
    
}
else if(edad<18){
    alert(nombreYApellido+" usted es menor de edad y no puede comprar entradas");
    x=edad
    while(x<18){
        x=parseInt(prompt("Ingrese una edad mayor a 18"));
    };
};