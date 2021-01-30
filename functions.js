function BMICalc(isKilograms, weight, isMeters, bigUnit, littleUnit){
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
        meters = bigUnit*100
    }
    bmi = kilos/meters**2;
    return bmi;
}

function feetToMeters(bigUnit, littleUnit){
    let totalInches = bigUnit*12 + littleUnit;
    return totalInches*0.0254
}

function MaleBFC(isSIunits, waist, neck, height){
    if(isSIunits){
        return 495/maleDenominator(waist, neck, height) - 450;
    }
    else{
        let left = 86.010*Math.log(waist - neck);
        let right = 70.041*Math.log(height) + 36.76;
        return left + right;
    }
}

function maleDenominator(waist, neck, height){
    let left = 1.0324 - 0.19077*Math.log(waist - neck);
    let right = 0.15456*Math.log(height);
    return left + right;
}

function femalBFC(isSIunits, waist, hip, neck, height){
    if(isSIunits){
        return 495/femaleDenominator(waist, hip, neck, height) - 450;
    }
    else{
        let left = 163.205*Math.log(waist + hip - neck);
        let right = 97.684*Math.log(height) + 36.76;
        return left + right;
    }
}

function femaleDenominator(waist, hip, neck, height){
    let left = 1.29579 - 0.35004*Math.log(waist + hip - neck);
    let right = 0.22100*Math.log(height);
    return left + right;
}