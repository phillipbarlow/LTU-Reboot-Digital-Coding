function drinkOrder(size, drink){
    let blnValidation = true;
    let strMessage = '';
    switch(size){
         case 'small':
         case 'medium':
         case 'large': 
            //do nothing
            break;
            default:
                strMessage = 'The size of drink you have ordered isnt correct';
                blnValidation = false;
            break;
    }
    switch(drink){
        case 'water':
        case 'orange':
        case 'lemonade': 
            //do nothing  
            break;
            default:
                strMessage = 'The drink you have ordered is not valid';
                blnValidation = false;
            break;
    }
    if(blnValidation){
        strMessage = 'You have ordered a ' + size;
        switch(drink){
            case 'water': 
                strMessage += ' water';
                break;
            case 'orange':
                strMessage += ' orange';
                break;
            case 'lemonade':
                strMessage += ' lemonade';
                break;
        }
        return strMessage;
    }
}
let order = drinkOrder('small', 'orange');
console.log(order)