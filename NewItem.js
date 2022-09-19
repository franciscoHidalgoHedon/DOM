//contraseña para agregar articulos
contraseña = "admin"




CaracteresRestringidos = [
    "`","~","!","@","#","$","%","^","&","*",",","_","-","+","=","{","[","}","}","|","\\",":",";",'"',"'","<",">",".","?","/"
]
//agrego los numeros
for(i = 0; 10 > i; i++){
    CaracteresRestringidos.push(String(i))
 }





class Item{
    constructor(tipo, nombre, descripción, precio){
        this.tipo= tipo,
        this.nombre= nombre,
        this.descripción= descripción,
        this.precio= precio
    }
}

 //para saber si es necesario repetir el prompt
function repeat(Selec, numeroOpciones){
    return (IsNumberNotValid(Selec) || Selec > numeroOpciones || Selec <= 0)
}
//para saber si el numero es valido
function IsNumberNotValid(a){1
    return isNaN(parseInt(a))
}
//pedir un numero valido
function askValidNumber(){
    alert("Por favor seleccione un número valido")
}
function DoRepeat(seleccionador, numMax, info){
    let seleccionUsuario = seleccionador(info)
    while(repeat(seleccionUsuario, numMax)){
        askValidNumber()
        seleccionUsuario = seleccionador(info)
    }
    return seleccionUsuario
}
//CREADOR DE TEXTO 3000
function creadorDeTexto3000(arrayx){
    let tipoArticulo = arrayx[0]["tipo"]+"s"
    let texto = "Por favor seleccione uno de nuestros modelos de "+tipoArticulo+": "
    let volvermenu = 0
    for (let index = 0; index < arrayx.length; index++){
        let indexTexto = index + 1
        texto = texto+"\n"+indexTexto+") "+arrayx[index]["descripción"]+" - "+arrayx[index]["precio"]+"$"
        volvermenu = indexTexto+1
    }
    texto = texto + "\n"+volvermenu+") menú anterior"
    return prompt(texto)
}

function ElegirTipo(){
    switch(parseInt(DoRepeat(ElegirTipoPrompt, 3))){
        case 1:
            return "taza"
        break
        case 2:
            return "tetera"
        break
        case 3:
            return "plato"
        break
        default:
            alert("Gracias por usar Vajillas.com")
        break
    }
}


function ElegirNombre(){
    return DoRepeat2(ElegirStringPrompt, 20, "el nombre")
}

function ElegirDescripcion(){
    return DoRepeat2(ElegirStringPrompt, 50, "la descripción")
}

function ElegirPrecio(){
    return (parseInt(DoRepeat(ElegirPrecioPrompt, 2000)))
}

function ElegirTipoPrompt(){
    return prompt("Elija el tipo de Objeto"+
    "\n 1) Taza"+
    "\n 2) Tetera"+
    "\n 3) Plato"
    )
}

function ElegirStringPrompt(numMax, tipo){
    return prompt("Elija "+tipo+" del objeto en "+numMax+" caracteres o menos"+
    "\n(sin caracteres especiales ni números)"
    )
}

function ElegirPrecioPrompt(){
    return prompt("Elija el precio"+
    "\n(Menor a 2000, porque no estafamos gente.)"
    )
}

function repeat2(Selec, numMax, largo){
    return (largo > numMax || (tieneCaracteresBan(Selec)["length"]) != 0)
}
//
function pedirStringValido(numMax){
    alert("Por favor no ingrese caracteres especiales ni números, y menos de "+numMax+" caracteres.")
}
function DoRepeat2(seleccionador, numMax, tipo){
    let seleccionUsuario = seleccionador(numMax, tipo)
    let largo = seleccionUsuario["length"]
     while(largo > numMax || (tieneCaracteresBan(seleccionUsuario)["length"]) != 0 || seleccionUsuario == ""){
        pedirStringValido(numMax)
        seleccionUsuario = seleccionador(numMax, tipo)
        largo = seleccionUsuario["length"]
     }
     return seleccionUsuario
}
function tieneCaracteresBan(selec){
    let caracteresIncluidos = []
    CaracteresRestringidos.forEach(element => {
        if(selec.includes(element)){
            caracteresIncluidos.push(element)
        }
    });
    return caracteresIncluidos
}

function CrearItem(){
    let tipo = ElegirTipo()
    let nombre = ElegirNombre()
    let descripción = ElegirDescripcion()
    let precio = ElegirPrecio()
    const itemcrear = new Item(tipo, nombre, descripción, precio)
    articulos.push(itemcrear)
}

function CrearItemMenu(){
    if(PedirContraseña() == contraseña){
    CrearItem()
    AgregarMasLoop()
    }
    else{
        alert("contraseña incorrecta, volvera al menú anterior")
        Main()
    }
}

function PedirContraseña(){
    return prompt("por favor ingrese la contraseña")
}

function AgregarMasLoop(){
    let seguir = DoRepeat(AgregarMasPrompt, 2) == 1
    while(seguir){
        CrearItem()
        seguir = DoRepeat(AgregarMasPrompt, 2) == 1
    }
    Main()
}

function AgregarMasPrompt(){
    return prompt("desea agregar más articulos?\n1- si\n2- no")
}
