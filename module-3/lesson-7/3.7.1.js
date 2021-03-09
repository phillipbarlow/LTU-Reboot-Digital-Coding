/*----- Variables -----*/
//stores the classes into variables
const arrAnimalFilters = document.querySelectorAll('.animalFilter');
const arrAnimalImages = document.querySelectorAll('.animalImage');
// console.log(arrAnimalFilters)
/* ---- Event Listeners -----*/
//filters through arrAnimalFilters and add an addeventListener to each item in the array
for(let counter = 0;  counter < arrAnimalFilters.length; counter++){
    //stores the item and index into current filter;
    let currentFilter = arrAnimalFilters[counter];
    // console.log(currentFilter)
    currentFilter.addEventListener('click', filterImages)
}
//makes the callback function
function filterImages(event){
    // console.log(event.target.innerHTML)
    //stores a lowercase version of the name into animalName;
    let animalName = event.target.innerHTML.toLowerCase();
    // console.log(animalName);

    //iterates over animalimages length;
    for(let counter = 0;  counter < arrAnimalImages.length; counter++){
        //stores the item and index into currentImages
        let currentImage = arrAnimalImages[counter];
        // console.log(currentFilter)
        //makes currentImage to display none;
        currentImage.style.display = 'none';
        // console.log(currentImage)
        //condition to see if all have been selected if so display inline;
        if(animalName == 'all'){
            currentImage.style.display ='inline';
        }else{
            //every animal attribute that matches there name is stored into currentImageAnimal
            let currentImageAnimal = currentImage.getAttribute('animal');
            // console.log(currentImageAnimal);
            //show the animal with the matching attribute and name;
            if(currentImageAnimal == animalName){
                currentImage.style.display ='inline'
            }
        }
    }
}

