/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {

    if (s.length <= 0) {
        return s;
    }

    let low, high, resString = '';

    for (let i = 0; i < s.length - resString.length / 2; i++) {

        low = i - 1;
        high = i + 1;
        let currentString = s[i];

        while (high < s.length && s[i] === s[high]) {
            currentString = currentString + s[high++];
        }

        while (low > -1 && high < s.length) {
            if (s[low] === s[high]) {
                currentString = s[low--] + currentString + s[high++];
            } else {
                break;
            }
        }

        resString = resString.length < currentString.length ? currentString : resString;
    }

    return resString;
};
