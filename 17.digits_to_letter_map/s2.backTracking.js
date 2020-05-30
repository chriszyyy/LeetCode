/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {

    if (digits.length === 0) {
        return [];
    }

    const res = [];

    function backTracking(comb, nextDigits) {
        const tmpDigits = [...nextDigits];
        if (tmpDigits.length === 0) {
            res.push(comb);
        } else {
            const digit = tmpDigits.splice(0, 1);
            const letters = letterMap[digit];

            letters.forEach((letter) => {
                backTracking(comb + letter, tmpDigits)
            });
        }
    }

    backTracking('', digits.split(''));

    return res;
};

const letterMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};
