function isEvenNumber(num){
    var result = num % 2;
    return result == 0;
}

function isAcceptableNumber(num){
    var result1 = num % 2;
    var result2 = num % 3;
    return result1 != 0 && result2 != 0;
}

function isMultipleOf5(num){
    if(num % 5 == 0){
        return 1;
    }else{
        return 0;
    }
}

function divideBy2(num){
    if(num % 2 == 0){
        return num / 2;
    }else{
        return (num + 1) / 2;
    }
}
