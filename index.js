const squareBtn = document.getElementById('square-btn');
const rectangleBtn = document.getElementById('rectangle-btn');
const circleBtn = document.getElementById('circle-btn');
const triangleBtn = document.getElementById('triangle-btn');

// button square
const button = document.createElement('button');
button.className = 'btn';
button.idName = 'square-btn';
    
const text = document.createTextNode('square')
button.appendChild(text);
button.style.backgroundColor = '#d1bb03';

document.querySelector('.shapes').appendChild(button)



squareBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'square';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.backgroundColor = '#d1bb03';
   
    document.querySelector('.newShapes').appendChild(div)
    
})

rectangleBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'rectangle';
    div.style.height = '100px';
    div.style.width = '150px';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.backgroundColor = 'red';

    document.querySelector('.newShapes').appendChild(div);
})

circleBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'circle';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = '#00a913';

    document.querySelector('.newShapes').appendChild(div);
})

triangleBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'triangle';
    div.style.height = '0';
    div.style.width = '0';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.border = '50px solid transparent';
    div.style.borderBottom = '100px solid #252aff';

    document.querySelector('.newShapes').appendChild(div);    
})









