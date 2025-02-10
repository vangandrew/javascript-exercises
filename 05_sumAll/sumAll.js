const sumAll = function(num1, num2) {
    let sum = 0;

    if (Array.isArray(num1) || Array.isArray(num2)) {
        return 'ERROR';
    }

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            if (num2 < 0 || num1 < 0) {
                return 'ERROR';
            } if (!Number.isInteger(num2) || !Number.isInteger(num1)) {
                return 'ERROR';
            }
            sum = sum + i;
        }
    }

    /* Working with larger number first */
    else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            if (num1 < 0 || num2 < 0) {
                return 'ERROR';
            } if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
                return 'ERROR';
            }
            sum = sum + i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
