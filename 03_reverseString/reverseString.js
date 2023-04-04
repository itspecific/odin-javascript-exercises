const reverseString = function(reverseString) {

    let stringIndex = reverseString.length - 1;
    let reversedString = [];

    for (let i = 0; i <= stringIndex; i++) {
        let currSpot = stringIndex - i;
        reversedString[i] = reverseString[currSpot];
    }

    return reversedString.join("");

};

// Do not edit below this line
module.exports = reverseString;
