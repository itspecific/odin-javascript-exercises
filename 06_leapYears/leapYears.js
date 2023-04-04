const leapYears = function(testYear) {

    if (testYear % 4 == 0 && testYear % 100 !== 0) {
        // Continue Testing
        return true;
    }
    else if (testYear % 100 == 0 && testYear % 400 == 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
