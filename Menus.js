
//precios servicio
let iva = 12
let envio = 1000


let tazas = articulos.filter((el) => el["tipo"] == "taza")
let platos = articulos.filter((el) => el["tipo"] == "plato")
let teteras = articulos.filter((el) => el["tipo"] == "tetera")
//=================================================== funciones =========================================================
//Main Menu
function Main(){
    let seleccion = DoRepeat(elegirMenu, 3)
    if(seleccion == 1){
        ActualizarArrays()
        MenuComprar()
    }
    else if(seleccion ==2){
        CrearItemMenu()
    }
    else{
        alert("Gracias por usar Vajillas.com")
        ActualizarLista()
    }
}

function elegirMenu(){
    return prompt("Bienvenido a la interfaz de usuario de Vajillas.com"+
    "\nPor favor elija su accion a realizar seleccionando el numero correspondiente"+
    "\n1) Comprar articulos"+
    "\n2) Agregar articulo al catalogo"+
    "\n3) Salir del menú y mostrar lista de Articulos")
}
//Menus de compra
function MenuComprar(){
    switch(parseInt(DoRepeat(seleccion1, 4))){
        case 1:
            MenuEspecífico(tazas)
        break
        case 2:
            MenuEspecífico(teteras)
        break
        case 3:
            MenuEspecífico(platos)
        break
        default:
            Main()
        break
    }
}

function MenuEspecífico(arrayx){
    let numMax = arrayx.length + 1
    let seleccionUI = 1
    seleccionUI = parseInt(DoRepeat(creadorDeTexto3000, numMax, arrayx))
    let seleccionC = seleccionUI - 1
    if(seleccionUI == numMax){
        MenuComprar()
    }
    else{
        PresupuestoFinal(arrayx[seleccionC]["precio"])
    }
}


//prompts
function seleccion1(){
    return prompt(
    "Por favor seleccione uno de los siguientes tipos de articulos a la venta escribiendo el numero correspondiente"+
      "\n 1) Tazas"+
      "\n 2) Teteras"+
      "\n 3) Platos"+
      "\n 4) Menu Anterior"
)
}

//Presupuesto final
function CuantasUnidades(){
    return prompt("Cuantas Unidades desea comprar?\n(sin importar la cantidad, el precio del envio no se verá afectado, puede comprar hasta un máximo de 100 unidades)")
}
function PresupuestoFinal(precio){
    let cuentas = {}
    cuentas.precio = precio, 
    cuentas.unidades = DoRepeat(CuantasUnidades, 100),
    cuentas.psi = cuentas.unidades * cuentas.precio,
    cuentas.pci = cuentas.psi + (cuentas.psi * iva)/100,
    cuentas.pf= cuentas.pci + envio

    if((DoRepeat(ConfirmarCompra,2,cuentas))==1){
        alert("Gracias por comprar en Vajillas.com!"+
        "\n(su compra será enviada a su domicilio dentro de los proximos 5 dias habiles)")
    }
    else{
        MenuComprar()
    }
}
function ConfirmarCompra(precios){
    return prompt("El precio de la compra es de: ("+precios["precio"]+"$ x "+precios["unidades"]+")"+" "+precios["psi"]+"$"+
            "\n Agregando el impuesto IVA ("+iva+"%): "+precios["pci"]+"$"+
            "\n Y finalmente agregando el precio del envio ("+envio+"$): "+precios["pf"]+"$"+
            "\n Si desea confirmar la compra, escriba \"1\""+
            "\n para volver al menu de compra escriba \"2\"")
}

function ActualizarArrays(){
    tazas = articulos.filter((el) => el["tipo"] == "taza")
    platos = articulos.filter((el) => el["tipo"] == "plato")
    teteras = articulos.filter((el) => el["tipo"] == "tetera")
    ActualizarLista()
}
Main()