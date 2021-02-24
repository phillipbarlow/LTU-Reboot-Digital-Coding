const temperature = 10;

function wearAcoat(temperature){
    if(temperature < 0){
        console.log('wear a coat and hat');
    }else if(temperature < 15){
        console.log('wear a coat');
    }
}
wearAcoat(-1)
wearAcoat(10)
wearAcoat(20)
