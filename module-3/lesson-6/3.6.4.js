let p = document.querySelector('.clickMe');
p.addEventListener('click', function(event){
    event.preventDefault();
    alert('i stopped the click');
})

