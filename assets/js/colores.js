function pintarANegro(element, color) {
    element.style.backgroundColor = color;
    console.log('click')
}

addEventListener("DOMContentLoaded", function() {
    const colors = [
        { id: 'red', color: 'red', height: '200px', width: '200px' },
        { id: 'blue', color: 'blue', height: '200px', width: '200px' },
        { id: 'green', color: 'green', height: '200px', width: '200px' },
        { id: 'grey', color: 'grey', height: '200px', width: '200px' }
    ];
    
    colors.forEach(color => {
        const elem = document.getElementById(color.id);
        elem.style.backgroundColor = color.color;
        elem.style.height = color.height;
        elem.style.width = color.width;
    });
})