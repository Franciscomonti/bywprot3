//Clases
class Crearproducto {
    constructor(id, nombre, color, tipo, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.tipo = tipo;
        this.precio = precio;
        this.imagen = imagen;
    }
}

//Productos a vender

const listaProductos = [];
let prod1 = new Crearproducto(1, "Remera Manga Corta", "blanco", "remera", 2500.00, "Remera-blanca-hombre.jpg")
let prod2 = new Crearproducto(2, "Remera Manga Larga", "blanco", "remera", 3000.00, "remera-blanca-hombre-ml.jpg")
let prod3 = new Crearproducto(3, "Remera Manga Corta", "negro", "remera", 2500.00, "remera-negra-hombre.webp")
let prod4 = new Crearproducto(4, "Remera Manga Larga", "negro", "remera", 3000.00, "remera-negra-hombre-ml.webp")
let prod5 = new Crearproducto(5, "Buzo Liso", "negro", "buzo", 5000.00, "buzo-negro-hombre.webp")
let prod6 = new Crearproducto(6, "Buzo Liso", "blanco", "buzo", 5000.00, "buzo-blanco-hombre.jpg")
let prod7 = new Crearproducto(7, "Buzo Capucha", "negro", "buzo", 5500.00, "buzo-negro-capucha.webp")
let prod8 = new Crearproducto(8, "Buzo Capucha", "blanco", "buzo", 5500.00, "buzo-blanco-capucha.jpg")


listaProductos.push(prod1);
listaProductos.push(prod2);
listaProductos.push(prod3);
listaProductos.push(prod4);
listaProductos.push(prod5);
listaProductos.push(prod6);
listaProductos.push(prod7);
listaProductos.push(prod8);


//array con filtros

let colorNegro = listaProductos.filter((producto) => producto.color == "negro");
let colorBlanco = listaProductos.filter((producto) => producto.color == "blanco");
let tipRemera = listaProductos.filter((producto) => producto.tipo == "remera");
let tipBuzo = listaProductos.filter((producto) => producto.tipo == "buzo");
let tipChomba = listaProductos.filter((producto) => producto.tipo == "chomba");

crearCardsFiltro(listaProductos)

//Bloque de cards de productos del main con filtros de productos

//Funciones

//Incertar en el Html
function crearCard(producto) {
    let cardCreada = `
        <div class="productos-todos-card">
            <img src="./img/productos/${producto.imagen}" alt="">
            <div>
                <h2>${producto.nombre} ${producto.color}</h2>
                <p>$ ${producto.precio}</p>
            </div>
        </div>
        `;
    return cardCreada
}

//Crear cards de productos
function crearCardsFiltro(array) {
    let cardsBloque = document.querySelector("#productos-todos");
    array.forEach(producto => {
        cardsBloque.innerHTML += crearCard(producto);
    })

}
//Filtros

function botonFiltro(id, array) { //id del boton y array que quiero mostrar en el filtro
    let btnFiltro = document.getElementById(id)
    btnFiltro.addEventListener('click', respClick) //evento al click en el boton
    function respClick() {
        let filtros = document.getElementsByClassName("filtro")
        for (let filtro of filtros){
            filtro.style.color = "black"
        }
        document.getElementById(id).style.color = "red"
        borrarCards()
        crearCardsFiltro(array) //crea las cards del array q le pase
    }
}

function borrarCards() {
    let cardsBloque = document.querySelector("#productos-todos")
    cardsBloque.innerHTML = ""
}

botonFiltro("filtro-todos", listaProductos)
botonFiltro("filtro-blanco", colorBlanco)
botonFiltro("filtro-negro", colorNegro)
botonFiltro("filtro-remera", tipRemera)
botonFiltro("filtro-buzo", tipBuzo)


