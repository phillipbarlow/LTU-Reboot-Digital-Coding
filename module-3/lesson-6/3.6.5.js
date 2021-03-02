let submitButton = document.querySelector('.submit');

function squareNumber(event){
    event.preventDefault();
    let value = document.querySelector('#full-name').value;
    let message = '';
    if(isNaN(value)){
        message = 'You must enter a number to do maths';
    }else{
        message = (value * value);
    }
    document.querySelector('.message').innerHTML= message;
}

function greeting(event){
    event.preventDefault();
    let value = document.querySelector('#full-name').value;
    let message = 'Hello ' + value;
    document.querySelector('.message').innerHTML = message;
}

submitButton.addEventListener('click', squareNumber)