const ENVIO = document.getElementById('send')
const NOMBRE = document.getElementById('nombre')
const APELLIDO = document.getElementById('apellido')
const SEXO = document.getElementsByClassName('sexo')
const NUMERO = document.getElementById('numero')
const VALIDAR_EMAIL = document.getElementById('email')
const DOMICILIO = document.getElementById('domicilio')
const DESCRIPCION = document.getElementById('descripcion')

ENVIO.addEventListener('click', (event) => {
    event.preventDefault()
    if(NOMBRE.value==''){
        alert('El campo Nombre no puede estar vacio: ' + NOMBRE.value)
    }
    if(NOMBRE.value.length < 2) {
        alert('El nombre contiene menos de dos caracteres... ' + NOMBRE.value + ' NO HAGAS TRAMPA :)')
    }
    if(APELLIDO.value==''){
        alert('El campo Apellido no puede estar vacio: ' + APELLIDO.value)
    }
    if(APELLIDO.value.length < 2) {
        alert('El apellido contiene menos de dos caracteres... ' + APELLIDO.value + ' NO HAGAS TRAMPA :)')
    }
    if(SEXO[0].checked==false && SEXO[1].checked==false){
        alert('Debe seleccionar un género...')
    }
    if(NUMERO.value=='' && NUMERO.value < 5){
        alert('El numero de teléfono no puede estar vacio ni tampoco ser menor a 5 digitos')
    }
    if(VALIDAR_EMAIL==''){
        alert('El correo electrónico no puede estar vacio')
    }
    const AT = VALIDAR_EMAIL.value.indexOf('@')
    if(AT==-1){
        alert('No se encuentra el simbolo @ el correo no es válido')
    }
    if(VALIDAR_EMAIL.value.length-1==VALIDAR_EMAIL.value.indexOf('@')) {
        alert('No se ingreso un correo "real"... ' + VALIDAR_EMAIL.value + ' por favor no hagas trampa :)')
    }
    if(DOMICILIO.value==''){
        alert('El domicilio no puede estar vacio: ' + DOMICILIO.value)
    }
    if(DESCRIPCION.value=='') {
        alert('El mensaje o comentario no puede estar vacio: ' + DESCRIPCION.value)
    }
})