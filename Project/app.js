let game, block, hole, character, score, gameoverscreen, star

function getElements() {
    game = document.querySelector( '#game' )
    block = document.querySelector( '#block' )
    hole = document.querySelector( '#hole' )
    character = document.querySelector( '#character' )
    score = document.querySelector( '#score' )
    gameoverscreen = document.querySelector( '#gameoverscreen' )
    star = document.querySelector( '#star' )
}
function setInitialValues() {

}
function initRandomHoles() {
    hole.addEventListener( 'animationiteration', _ => {
        const fromHeight = 60 * window.innerHeight / 100
        const toHeight = 95 * window.innerHeight / 100

        const randomTop = getRandomNumber( fromHeight, toHeight )
        hole.style.top = `-${randomTop}px`
    })
} 

function resetAllAnimations() {
    const seconds = 2
    const blockAnimationCss = `blockAnimation ${ seconds }s infinite linear`
    
    block.style.animation = blockAnimationCss 
    hole.style.animation = blockAnimationCss
}
function gameInit() {
    getElements()
    resetAllAnimations()  

}



gameInit()