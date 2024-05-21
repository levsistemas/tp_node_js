const HEADER = document.querySelector('header')
const MAIN = document.querySelector('main')
const SECTION = document.querySelector('section')
const FORM = document.querySelector('form')
const FOOTER = document.querySelector('footer')

const DIV = document.querySelectorAll('div')[2]
const H1 = document.querySelectorAll('h1')[2]
const IMG = document.querySelectorAll('img')[1]

function divPresente(){
    if(DIV!==null){
        const IFRAME = document.querySelector('iframe')
        if(IFRAME!==null){
            const LOCAL = DIV.offsetHeight //Altura del DIV que contiene al mapa de la plantilla LOCAL y al elemento Bootstrap
            return LOCAL
        }
    }
}

function nuestroLocal(){
    if(LOCAL!==null){
        const H1_HEIGHT = H1.offsetHeight
        return H1_HEIGHT
    }
}

function miFoto(){
    if(IMG!==undefined){
        if(IMG!==null){
            const IMG_ALTO = IMG.offsetHeight
            return IMG_ALTO
        }
    }
}

const LOCAL = divPresente()
const H1_HEIGHT = nuestroLocal()
const IMG_ALTO = miFoto()

console.log('Altura Div: ' + LOCAL + 'px')

const WINDOW_INNER = window.innerHeight
const SECTION_HEIGHT = SECTION.offsetHeight

function formularioPresente(){
    if(FORM!==null){
        const FORM_HEIGHT = FORM.offsetHeight
        console.log(FORM_HEIGHT)
        return FORM_HEIGHT
    }
}

const FORM_HEIGHT = formularioPresente()

const PIXEL_HEIGHT = WINDOW_INNER*100
console.log('Window Inner: ' + WINDOW_INNER)

console.log('Pixel Height: ' + PIXEL_HEIGHT)

console.log('header: ' + HEADER.offsetHeight)
console.log('main: ' + MAIN.offsetHeight)
console.log('footer: ' + FOOTER.offsetHeight)
console.log('Section: ' + SECTION_HEIGHT)

if(FORM!==null){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + FORM_HEIGHT - SECTION_HEIGHT + 'px'
}

if(LOCAL!==null && LOCAL!==undefined){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + H1_HEIGHT + 'px'
}

if(IMG!==null && IMG!==undefined){
    MAIN.style.height = HEADER.offsetHeight + MAIN.offsetHeight + 40 + 'px'
}

console.log('Altura main: ' + MAIN.style.height)