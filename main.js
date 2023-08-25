const TiendaRiver = document.getElementById("TiendaRiver");
const VerCarrito = document.getElementById("VerCarrito");
const ModalContainer = document.getElementById("ModalContainer");
const CantidadCarrito = document.getElementById("CantidadCarrito");
const toastify =document.querySelector("#toastify");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const getProducts = async () => {
    const response = await fetch("./productos.json");
    const data = await response.json();
    data.forEach((productos) =>{
        let content = document.createElement("div");
        content.className="card";
        content.innerHTML = `<img src= "${productos.img}">
        <h3 class= nombre>${productos.nombre}</h3>
        <p class="precio">${productos.precio} $</p>
        `;
        TiendaRiver.append(content);
        let AgregarAlCarrito = document.createElement("button");
        AgregarAlCarrito.innerText= "Agregar al carrito";
        AgregarAlCarrito.className="boton";
        content.append(AgregarAlCarrito)
        
        AgregarAlCarrito.addEventListener("click",()=>{
            Toastify({
                text: "Se agregó al carrito de compras",
                duration: 3000,
                destination: "",
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "rgb(190, 3, 3)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            
        const repeat = carrito.some ((repeatProduct) => repeatProduct.id === productos.id);
        if(repeat){
            carrito.map((product) =>{
                if(product.id === productos.id){
                    product.cantidad++;
                }
            });
        }
        else{
            carrito.push({
                id: productos.id,
                img: productos.img,
                nombre: productos.nombre,
                precio: productos.precio,
                cantidad: productos.cantidad,
            });
        };
        console.log(carrito);
        console.log(carrito.length);
        CarritoCounter ();
        saveLocal();
    });
    });
};
getProducts();



let saveLocal = () =>{ 
    localStorage.setItem("carrito",JSON.stringify(carrito));
    
};



const PintarCarrito = () => {
    let carritoMostrado = false; // Variable para controlar si el carrito ya ha sido mostrado
    ModalContainer.style.display = "flex"
    ModalContainer.innerHTML = "";
    if (!carritoMostrado) {
        let ModalHeader = document.createElement("div");
        ModalHeader.className = "modal-header";
        ModalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>`;
        ModalContainer.appendChild(ModalHeader);

        let ModalButton = document.createElement("button");
        ModalButton.innerText = "X";
        ModalButton.className = "modal-header-button";
        ModalButton.addEventListener("click", () =>{
            ModalContainer.style.display = "none";
        });

        ModalHeader.appendChild(ModalButton);

        carrito.forEach((producto) => {
            let carritoContent = document.createElement("div");
            carritoContent.className = "modal-content";
            carritoContent.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio} $</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${producto.cantidad} </p>
            <span class="sumar"> + </span>
            <p>Total: ${producto.cantidad * producto.precio}</p>`;
            ModalContainer.appendChild(carritoContent);

            let restar = carritoContent.querySelector(".restar");

            restar.addEventListener("click", () =>{
                if(producto.cantidad !== 1){
                    producto.cantidad--;   
                }
                
                PintarCarrito();
            });

            let sumar = carritoContent.querySelector(".sumar");

            sumar.addEventListener("click", () =>{
                producto.cantidad++;
                PintarCarrito();
            });

            let eliminar = document.createElement("span");
            eliminar.innerText = "❌";
            eliminar.className = "delete-Product";
            carritoContent.append(eliminar);
            eliminar.addEventListener("click", eliminarProducto);
        });

        let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
        let totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `Total a pagar: ${total} $`;
        ModalContainer.appendChild(totalBuying);

        carritoMostrado = true; // Marcamos el carrito como mostrado
        saveLocal ();
    }
};
VerCarrito.addEventListener("click", PintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    CarritoCounter ();
    saveLocal();
    PintarCarrito();
}
    
const CarritoCounter = () => {
    CantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    CantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
CarritoCounter();



