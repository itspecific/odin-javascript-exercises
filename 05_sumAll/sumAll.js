const sumAll = function(low, high) {

    if (low < 0 || high < 0) {
        console.log("ERROR");
        return "ERROR";
    }
    else if (Number.isInteger(low) !== true || Number.isInteger(high) !== true) {
        console.log("ERROR");
        return "ERROR";
    }

    sum = 0;
    if (low > high) {

        while (high <= low) {
            sum += high;
            high++;
        }

    }
    else {
        while (low <= high) {
            sum += low;
            low++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
