export function RunAway (block) {

    block.addEventListener('mouseover', function() {
        let h = Math.floor(Math.random() * document.documentElement.clientHeight); // gets data about screen dimensions
        let w = Math.floor(Math.random() * document.documentElement.clientWidth);  // and converts to random coordinates

        block.style.position = 'fixed';
        block.style.bottom = h + 'px';
        block.style.right = w + 'px';
    })
} // long story short - makes your button escape the mouse 
// obviously can be used with other objects, but i did't test it ;)