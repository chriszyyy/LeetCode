/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
    let res = 0, plusOrMinus = 1, firstNumber = true;
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;
    for (let char of str) {
        if (numsMap[char] || numsMap[char] === 0) {
            firstNumber = false;
            res = res * 10 + numsMap[char];
        } else if (!firstNumber) {
            break;
        } else if (char === ' ') {
        } else if (char === '-') {
            plusOrMinus = -1;
            firstNumber = false;
        } else if (char === '+') {
            firstNumber = false;
        } else {
            break;
        }
    }

    const finalRes = res * plusOrMinus;

    if (finalRes < INT_MIN) return INT_MIN;
    if (finalRes > INT_MAX) return INT_MAX;
    return finalRes;
};

const numsMap = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
};
