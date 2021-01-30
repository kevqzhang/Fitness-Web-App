function BMICalc(weight, isKilograms, bigUnit, littleUnit, isMeters){
    let meters;
    let kilos;
    let bmi;
    if(!isKilograms){
        kilos = weight*0.45;
    }
    if(!isMeters){
        meters = feetToMeters(bigUnit, littleUnit);
    }
    else{
        meters = bigUnit + littleUnit/100
    }
    bmi = kilos/meters**2;
    return bmi;
}

function feetToMeters(bigUnit, littleUnit){
    let totalInches = bigUnit*12 + littleUnit;
    return totalInches*0.0254
}