
// square  button 
const squareBtn = document.createElement('button');
squareBtn.className = 'btn';
squareBtn.id = 'square-btn';       
const textSquare = document.createTextNode('square')
squareBtn.appendChild(textSquare);
squareBtn.style.backgroundColor = '#d1bb03'; 
squareBtn.style['boxShadow'] = '1px 1px 1px black';
       
document.querySelector('.shapes').appendChild(squareBtn)
console.log(squareBtn)

// generate Square shape
squareBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'square';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.backgroundColor = '#d1bb03';
    div.style['boxShadow'] = '2px 2px 1px black';
   
    document.querySelector('.newShapes').appendChild(div)
    
})


// rectangle  button 
const rectangleBtn = document.createElement('button');
rectangleBtn.className = 'btn';
rectangleBtn.id = 'rectangle-btn';       
const textRectangle = document.createTextNode('rectangle')
rectangleBtn.appendChild(textRectangle);
rectangleBtn.style.backgroundColor = 'red';
rectangleBtn.style['boxShadow'] = '1px 1px 1px black';
       
document.querySelector('.shapes').appendChild(rectangleBtn)
console.log(rectangleBtn)
   
   
// generate rectangle shape
rectangleBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'rectangle';
    div.style.height = '100px';
    div.style.width = '150px';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.backgroundColor = 'red';
    div.style['boxShadow'] = '2px 2px 1px black';

    document.querySelector('.newShapes').appendChild(div);
})



// circle  button 
const circleBtn = document.createElement('button');
circleBtn.className = 'btn';
circleBtn.id = 'circle-btn';       
const textCircle = document.createTextNode('circle')
circleBtn.appendChild(textCircle);
circleBtn.style.backgroundColor = '#00a913';
circleBtn.style['boxShadow'] = '1px 1px 1px black';
       
document.querySelector('.shapes').appendChild(circleBtn)
console.log(circleBtn)


// generate circle shape
circleBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'circle';
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = '#00a913';
    div.style['boxShadow'] = '2px 2px 1px black';

    document.querySelector('.newShapes').appendChild(div);
})


// triangle button 
const triangleBtn = document.createElement('button');
triangleBtn.className = 'btn';
triangleBtn.id = 'triangl-btn';       
const texttriangl = document.createTextNode('triangl')
triangleBtn.appendChild(texttriangl);
triangleBtn.style.backgroundColor = '#252aff';
triangleBtn.style['boxShadow'] = '1px 1px 1px black';
       
document.querySelector('.shapes').appendChild(triangleBtn)
console.log(triangleBtn)


// generate triangle shape
triangleBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.className = 'triangle';
    div.style.height = '0';
    div.style.width = '0';
    div.style.marginTop = '20px';
    div.style.marginBottom = '20px';
    div.style.border = '50px solid transparent';
    div.style.borderBottom = '100px solid #252aff';
    div.style.filter = 'drop-shadow(1px 1px 1px black)';

    document.querySelector('.newShapes').appendChild(div);    
})









