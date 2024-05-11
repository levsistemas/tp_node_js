const WHATSAPP= document.getElementsByClassName("fa-whatsapp")[0]
const FACEBOOK= document.getElementsByClassName("fa-facebook")[0]
const TWITTER= document.getElementsByClassName("fa-twitter")[0]
const IG= document.getElementsByClassName("fa-instagram")[0]
const EMAIL= document.getElementsByClassName("fa-regular")[0]

WHATSAPP.addEventListener('mousemove', () => {
    WHATSAPP.classList.remove('fa-whatsapp')
    WHATSAPP.classList.add('fa-square-whatsapp')
});

WHATSAPP.addEventListener('mouseout', () => {
    WHATSAPP.classList.remove('fa-square-whatsapp')
    WHATSAPP.classList.add('fa-whatsapp')
})

FACEBOOK.addEventListener('mousemove', () => {
    FACEBOOK.classList.remove('fa-facebook')
    FACEBOOK.classList.add('fa-square-facebook')
});

FACEBOOK.addEventListener('mouseout', () => {
    FACEBOOK.classList.remove('fa-square-facebook')
    FACEBOOK.classList.add('fa-facebook')
})

TWITTER.addEventListener('mousemove', () => {
    TWITTER.classList.remove('fa-twitter')
    TWITTER.classList.add('fa-x-twitter')
});

TWITTER.addEventListener('mouseout', () => {
    TWITTER.classList.remove('fa-x-twitter')
    TWITTER.classList.add('fa-twitter')
})

IG.addEventListener('mousemove', () => {
    IG.classList.remove('fa-instagram')
    IG.classList.add('fa-square-instagram')
});

IG.addEventListener('mouseout', () => {
    IG.classList.remove('fa-square-instagram')
    IG.classList.add('fa-instagram')
})

EMAIL.addEventListener('mousemove', () => {
    EMAIL.classList.remove('fa-regular')
    EMAIL.classList.add('fa-solid')
});

EMAIL.addEventListener('mouseout', () => {
    EMAIL.classList.remove('fa-solid')
    EMAIL.classList.add('fa-regular')
})