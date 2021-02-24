function percentageCalculator(number, percent){
    let blnValidated = true
    if(isNaN(number)){
        blnValidated = false;
    }
    if(isNaN(percent)){
        blnValidated = false;
    }
    if(blnValidated){
    let percentValue = number / 100;
    percentValue = percentValue * percent;
    console.log(`${percent}% of ${number} is ${percentValue}`)
    }else{
        console.log('A number needs to be entered to work')
    }
}

percentageCalculator(100, 40)   