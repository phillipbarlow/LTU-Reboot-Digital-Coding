let newElement = document.createElement('p');
// console.log(newElement);
let divElement = document.querySelector('div')
// console.log(divElement)
newElement.innerHTML='hello world';
console.log(newElement);
divElement.append(newElement);
