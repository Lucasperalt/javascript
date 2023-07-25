
class producto {
    constructor(nombre, precio, fechaVencimiento, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.fechaVencimiento = fechaVencimiento;
        this.stock = stock; //stock de productos   
    }
}

let camisetas = new producto('Camisetas', 14000, '2023/12/09', 80);
let shorts = new producto('Shorts', 10000, '2025/11/09', 100);
let gorras = new producto('Gorras', 5000, '2024/12/05', 300)
let buzos = new producto('Buzos', 25000, '2025/03/24', 120);
let entradas = new producto('Entradas', 4500, '2023/12/24', 200);
let arrayproductos = [camisetas, shorts, gorras, buzos, entradas];

console.log("Productos en stock:");
console.log(arrayproductos);

function menu() {
    alert("¡Bienvenido a la tienda River Plate")
    let opcion = parseInt(prompt("Ingrese una opcion: 1) Consultar stock de productos 2) Modificar productos 3) Eliminar productos 4) Agregar productos 5) Salir"));
    return opcion;
}

function consultaStock() {
    let nombre = prompt("Ingrese el nombre del producto")
    let stock = arrayproductos.find(producto => producto.nombre === nombre);[]
    if (stock) {
        console.log("el Stock del producto es:", stock.stock);
    } else {
        console.log("Producto no encontrado en el inventario.");
    }
}

function modificarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a modificar:");
    let Producto = arrayproductos.find(producto => producto.nombre === nombre);
    let indice = arrayproductos.indexOf(Producto);
    console.log(Producto);
    console.log(indice);


    let Nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseInt(prompt("Ingrese el precio del producto:"));
    let fechaVencimiento = prompt("Ingrese la fecha de vencimiento");
    let stock = parseInt(prompt("Ingrese el stock disponible del producto"));
    let nuevoProducto = new producto(Nombre, precio, fechaVencimiento, stock);
    console.log(nuevoProducto);
    arrayproductos.splice(indice, 1, nuevoProducto);
    console.log(arrayproductos);
}



function eliminarProductos() {
    let nombre = prompt("Ingrese el nombre del producto a eliminar:");
    let producto = arrayproductos.find(producto => producto.nombre === nombre);
    let indice = arrayproductos.indexOf(producto);
    arrayproductos.splice(indice, 1);
    console.log(arrayproductos);
}


function agregarProductos() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseInt(prompt("Ingrese el precio del producto:"));
    let fechaVencimiento = parseInt(prompt("Ingrese la fecha de vencimiento"));
    let stock = parseInt(prompt("Ingrese el stock disponible del producto"));
    let nuevoProducto = new producto(nombre, precio, fechaVencimiento, stock);
    arrayproductos.push(nuevoProducto);
    console.log(arrayproductos);
}

function salir() {
    alert("¡Gracias vuelva pronto");
}

let opcion = menu();
switch (opcion) {
    case 1:
        consultaStock();
        break;
    case 2:
        modificarProducto();
        break;
    case 3:
        eliminarProductos();
        break;
    case 4:
        agregarProductos();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta")
        break;
}




/* console.log("ForEach:");

arrayproductos.forEach(producto => {
    console.log(producto);
});

arrayproductos.sort((a,b) => {
    if (a.nombre > b.nombre){
        return 1;
    }
    if (a.nombre < b.nombre){
        return -1;
    }
    return 0;
})
console.log("Ordenar por Nombre")
console.log(arrayproductos);


 */














/* 
alert("¡Bienvenido al Estadio Mas Monumental!");
let nombreYApellido = prompt('Ingrese tu nombre y apellido');
let dni = prompt('Ingrese su Dni');
let edad = prompt('Ingrese tu edad');
if (edad >= 18) {

    alert(nombreYApellido + " usted es mayor de edad y puede comprar entradas");

    let entradas = prompt('Ingrese la cantidad de entradas que necesita y recuerde que la capacidad total del Estadio es de 200 personas');
    if (entradas <= 200) {
        alert(nombreYApellido + " ya puede pasar a abonar y retirar sus entradas en la boleteria del estadio, recuerde llevar su dni, de lo contrario no podrá retirar sus entradas");
        function boletas(x) {
            alert("Se registró la compra de " + x + " entradas");
        }
        boletas(entradas);
    }
    else if (entradas > 200) {
        alert(nombreYApellido + " no hay tantas entradas disponibles");
    };

}
else if (edad < 18) {
    alert(nombreYApellido + " usted es menor de edad y no puede comprar entradas");
    x = edad
    while (x < 18) {
        x = parseInt(prompt("Ingrese una edad mayor a 18"));
    };
}; */