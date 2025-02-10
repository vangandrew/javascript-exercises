const removeFromArray = function(array, ...values) {
    
    let filteredArray = array.filter(function(value) {
        if (values.includes(value)) {
            return false;
        }
        return true;
    });
    
    return filteredArray;
};




// Do not edit below this line
module.exports = removeFromArray;
