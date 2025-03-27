export function RunAway (element) {

    element.addEventListener('mouseover', function() {
        let h =  Math.floor(Math.random() * (document.documentElement.clientHeight - element.clientHeight)); 
        let w =  Math.floor(Math.random() * (document.documentElement.clientWidth - element.clientWidth)); 
        // gets client's window width and height, and then subtracts element's 'w' and 'h'
        // (so that the element won't leave the screen)

        // then just randomises the result  


        element.style.position = 'fixed';
        element.style.bottom = h + 'px';
        element.style.right = w + 'px';
    })
}   

    // long story short - makes your button escape the mouse 
    // obviously can be used with other objects, but i did't test it ;)
    // didn't test it with anything other than px's though :)
