const arrProductos = [
    {
        "id": 1,
        "name": "Zapatillas Nike Revolution 5",
        "precio": 10500,
        "vencimiento": null,
        "descripcion": "Zapatillas ideales para el runing",
        "categoria": "Calzado",
        "oferta": false,
        "img": "imagenes/nike-revolution-5.jpg"
    },
    {
        "id": 2,
        "name": "Zapatillas Nike Air Max",
        "precio": 6000,
        "venciminto": null,
        "descripcion": "Zapatillas con camara de aire en el talon para una mejor pisada evitando dolores",
        "categoria": "Calzado",
        "oferta": true,
        "img": "imagenes/nike-airmax.jpeg",
    },
    {
        "id": 3,
        "name": "Zapatillas Nike Force 1 Negras",
        "precio": 7600,
        "vencimiento": null,
        "descripcion": "Zapatillas con un estilo urbano ideales para salir",
        "categoria": "Calzado",
        "oferta": false,
        "img": "imagenes/nike-force-1.jpg",
    },
    {
        "id": 4,
        "name": "Pure Instantaneo Nestle",
        "precio": 230,
        "vencimiento": "20/03/2023",
        "descripcion": "Pure instantaneo para preparar en menos de 5 minutos",
        "categoria": "Alimentos",
        "oferta": false,
        "img": "imagenes/pure-instantaneo-knorr.jpg"
    },
    {
        "id": 5,
        "name": "Choclo En Lata Arcor",
        "precio": 289,
        "vencimiento": "02/05/2024",
        "descripcion": "Choclo en lata, sumergido en conserva y con piel",
        "categoria": "Conservas",
        "oferta": true,
        "img": "imagenes/choclo-en-lata-arcor.jpg"
    },
    {
        "id": 6,
        "name": "Doritos Dippas Original",
        "precio": 350,
        "vencimiento": "03/10/2023",
        "descripcion": "Snacks de maiz sabor original",
        "categoria": "Snacks",
        "oferta": true,
        "img": "imagenes/doritos-dippas.jpeg"
    },
    {
        "id": 7,
        "name": "Remera Manga Corta Nike Talle L Hombres",
        "precio": 3050,
        "vencimiento": null,
        "descripcion": "Remera nike manga corta talle l para hombres",
        "categoria": "Indumentaria",
        "oferta": true,
        "img": "imagenes/remera-nike-manga-corta-talle-L.jpeg"
    },
    {
        "id": 8,
        "name": "Pantalon Largo Nike Micro-fibra Talle 5 Unisex",
        "precio": 4700,
        "vencimiento": null,
        "descripcion": "Pantalon largo ideal pra entrenar o correr al aire libre",
        "categoria": "Indumentaria",
        "oferta": false,
        "img": "imagenes/pantalon-largo-nike.jpeg"
    },
    {
        "id": 9,
        "name": "Remera Manga Larga Nike Dry-Fit Talle XL Hombre",
        "precio": 7000,
        "vencimiento": null,
        "descripcion": "Remera dry-fit para entrenar en invierno",
        "categoria": "Indumentaria",
        "oferta": true,
        "img": "imagenes/remera-manga-larga-nike-talle-L.jpeg"
    },
    {
        "id": 10,
        "name": "Play Station 4 Slime ",
        "precio": 60000,
        "vencimiento": null,
        "descripcion": "Play Station 4 version slime, ahorro de energia y reduccion de ruido",
        "categoria": "Tecnologia",
        "oferta": false,
        "img": "imagenes/ps4-slime.jpeg"
    },
    {
        "id": 11,
        "name": "Notebook Intel I5 8520U",
        "precio": 80000,
        "vencimiento": null,
        "descripcion": "Notebook con procesador Intel i5 de 8va Gen",
        "categoria": "Tecnologia",
        "oferta": false,
        "img": "imagenes/notebook-i5-8520u.jpeg"
    },
    {
        "id": 12,
        "name": "Celular Motorola G200",
        "precio": 40000,
        "vencimiento": null,
        "descripcion": "Celular motorola con procesador de 8 nucleos, 8gb de ram, 128gb de almacenamiento",
        "categoria": "Tecnologia",
        "oferta": true,
        "img": "imagenes/moto-g200.jpeg"
    },
    {
        "id": 13,
        "name": "Brisket / Tapa De Asado x 1kg",
        "precio": 1200,
        "vencimiento": "20/12/2025",
        "descripcion": "Tapa de asado de novillo x 1kg",
        "categoria": "Carnes",
        "oferta": false,
        "img": "imagenes/brisket-1kg.jpeg"
    },
    {
        "id": 14,
        "name": "Atun Fresco x 1kg",
        "precio": 3000,
        "vencimiento": null,
        "descripcion": "Pieza de atun fresco sumergido en hielo",
        "categoria": "Pescado",
        "oferta": false,
        "img": "imagenes/atun-fresco-1kg.jpeg"
    },
    {
        "id": 15,
        "name": "Bolsa De Cebollas Blancas x 500g",
        "precio": 120,
        "vencimiento": null,
        "descripcion": "Cebollas en bolsa de tela x 500g",
        "categoria": "Verduras",
        "oferta": false,
        "img": "imagenes/bolsa-cebollas-blancas.jpeg"
    }
]

const copiaArrProductos = [...arrProductos]

function productos(arr) {

    const contenedor = document.querySelector("#containerPrincipal")
    const verOfertas = confirm("Quieres ver los productos con oferta o sin oferta?")

    for (let i = 0; i < copiaArrProductos.length; i++) {

        const producto = document.createElement("div")
        producto.className = "producto"
        producto.innerHTML = `
            <div class="producto_item">
                <h2>${arr[i].name}</h2>
                <h3>Categoria: ${arr[i].categoria}</h3>
                <img src="${arr[i].img}">
                <h4>$${arr[i].precio}</h4>
            </div>
        `
        contenedor.appendChild(producto)

        if (verOfertas === true) {
            if (copiaArrProductos[i].oferta === true) {
                producto.innerHTML = `
                        <div class="producto_item_descuento">
                            <h2>${arr[i].name}</h2>
                            <h3>Categoria: ${arr[i].categoria}</h3>
                            <img src="${arr[i].img}">
                            <h4>$${arr[i].precio}</h4>
                            <p>15$ Off: $${arr[i].precio - (arr[i].precio * 0.15)}</p>
                        </div>
                    `
            }
        }
        else if (verOfertas === false) {
            producto.innerHTML = `
                        <div class="producto_item">
                            <h2>${arr[i].name}</h2>
                            <h3>Categoria: ${arr[i].categoria}</h3>
                            <img src="${arr[i].img}">
                            <h4>$${arr[i].precio}</h4>
                        </div>
                    `
        }
    }
}
productos(copiaArrProductos)

