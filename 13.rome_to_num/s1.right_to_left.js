/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let last = s.length - 1;
    let sum = valueMap[s[last]];

    for (let i = last - 1; i >= 0; i--) {
        if (valueMap[s[i]] >= valueMap[s[i + 1]]) {
            sum += valueMap[s[i]];
        } else {
            sum -= valueMap[s[i]];
        }
    }

    return sum;
};

const valueMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};
