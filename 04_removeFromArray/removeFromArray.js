const removeFromArray = function(origArray, ...itemsToRemove) {
    itemsToCheck = itemsToRemove.length;
    let newArray = [];

    for (let i = 0; i < itemsToCheck; i++) {
        let index = origArray.indexOf(itemsToRemove[i])
        if (index > -1) {
            /* here we need to remove the item from the index at location index */

            origArray.splice(index, 1);
        }
    }
    
    return origArray;
};

// Do not edit below this line
module.exports = removeFromArray;
