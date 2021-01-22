// github Link

// Function 1 
function kilometerToMeter(kiloMeter){
    var meter = 0;
    if(kiloMeter<0){
        console.log("Negative Value is not accepted");
    }
    else{
        meter = kiloMeter * 1000;
        return meter;
    }
}

console.log(kilometerToMeter(10));

// Function 2
function budgetCalculator(watch, phone, laptop){
    var totalWatchAmount, totalPhoneAmount, totalLaptopAmount;
    totalWatchAmount = 0;
    totalPhoneAmount = 0;
    totalLaptopAmount = 0;
    if(watch>=0){
        totalWatchAmount = watch*50;
    }
    if(watch<0){
        console.log("Negative Watch Value is not accepted");
    }
    if(phone>=0){
        totalPhoneAmount = phone*100;
    }
    if(phone<0){
        console.log("Negative Phone Value is not accepted");
    }
    if(laptop>=0){
        totalLaptopAmount = laptop*500;
    }
    if(laptop<0){
        console.log("Negative Laptop Value is not accepted");
    }
    var totalAmount = totalWatchAmount + totalPhoneAmount + totalLaptopAmount;
    return totalAmount;
}

console.log(budgetCalculator(2, 4, 3));

// Function 3
function hotelCost(night){
    var totalAmountNight;
    totalAmountNight = 0;
    if(night<0){
        console.log("Negative Value is not accepted");
    }
    else{
        if(night>=0 && night<=10){
            totalAmountNight = night * 100;
        }
        else if(night<=20){
            var night20 = night - 10;
            totalAmountNight = (night-night20)*100 + night20*80;
        }
        else{
            var nigth20plus = night - 20;
            totalAmountNight = (night-10-nigth20plus)*100 + (night-10-nigth20plus)*80 + nigth20plus*50;
        }
        return totalAmountNight;
    }
}

console.log(hotelCost(27));



// Function 4

function megaFriend(names){

    if(names.length>0){
        var maxLength = "";
        for(var i=0; i<names.length; i++){
            if (names[i].length > maxLength.length){
                maxLength = names[i];
            }
        }
        return maxLength;
    }
    else{
        console.log("Array is an Empty");
    }
}
var names = ["aaa", "bbbb", "ccc"];
var output = megaFriend(names);
console.log(output);


