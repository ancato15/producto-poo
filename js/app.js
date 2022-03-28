class productos{
    constructor(nombre, precio, ano){
        this.nombre = nombre;
        this.precio = precio;
        this.ano = ano;
    }
}

class UI{
    addProducto(producto){
        const productoLista = document.getElementById('product-list');
        const elemento = document.createElement('div');
        elemento.innerHTML=
        `<div class="card text-center mb-4">
            <div class="card-body">
                <p> <strong>Nombre del producto</strong>:${producto.nombre} </p>
                <p> <strong>Precio</strong>$:${producto.precio}</p>
                <p> <strong>Año de Publicación</strong>:${producto.ano} <p>
                <a href="#" class="btn btn-danger" name="eliminar" ">Eliminar</a>
            </div>
        </div>`;
        productoLista.appendChild(elemento);
        this.resetForm();
    }

    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProducto(elemento) {
        //Se declara la variable if con el boton name=eliminar
        if (elemento.name === "eliminar") {
          elemento.parentElement.parentElement.remove();
          this.showMessage("Producto se elimino correctamente", "danger");
        }
    }

    showMessage(mensaje, cssClase){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClase}`
        div.appendChild(document.createTextNode(mensaje));
        //Mostrando la pantalla
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e){
    const nombre= document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const ano = document.getElementById('ano').value;
    const producto = new productos(nombre, precio, ano);
    const ui = new UI();
    //Validaciones
    if (nombre==="" || precio==="" || ano==="") {
        return ui.showMessage('Complete los siguientes campos', 'info');
    }else{
        ui.addProducto(producto);
        ui.resetForm();
        ui.showMessage('Producto Agregado Sastifactoriamente','success' );
        e.preventDefault();
    } 
});

document.getElementById("product-list").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
  });
