let circle=document.querySelector('.ball');
let moveBy=10;
window.addEventListener('load',()=>{
    circle.style.position='absolute';
    circle.style.left=0;
    circle.style.top=0;

})

window.addEventListener('keydown',(event)=>{
    const key=event.key;
    switch(key){
        case 'a':
            circle.style.left=parseInt(circle.style.left)-moveBy + 'px';
            break;
        case 'd':
            circle.style.left=parseInt(circle.style.left)+moveBy + 'px';
            break;
        case 'w':
            circle.style.top=parseInt(circle.style.top)-moveBy + 'px';
            break;
        case 's':
            circle.style.top=parseInt(circle.style.top)+moveBy + 'px';
            break;
    }
    
})