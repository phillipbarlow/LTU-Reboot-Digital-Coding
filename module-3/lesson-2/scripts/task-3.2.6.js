const temperature = 10;

    function wearAcoat(temperature){
        blnNotNumber = false;
        if(isNaN(temperature)){
            blnNotNumber = true;
        }
        if(!blnNotNumber){
            if(temperature < 0){
                console.log('wear a coat and hat');
            }else if(temperature < 15){
                console.log('wear a coat');
            }else{
                console.log('lovely jubbly')
            }
        }else{
                console.log('temperature needs to be a number')}
    }
// wearAcoat(-1)
// wearAcoat(10)
// wearAcoat(20)
wearAcoat('phil')