/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if (!s || s.length === 0) {
        return '';
    }

    if (numRows === 1) {
        return s;
    }

    let res = '';
    const cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < s.length; j += cycleLen) {
            res += s[j + i];

            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < s.length) {
                res += s[j + cycleLen - i];
            }
        }
    }

    return res;
};
