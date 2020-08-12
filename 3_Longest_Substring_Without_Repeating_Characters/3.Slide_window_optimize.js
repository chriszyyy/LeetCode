/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    const checkMap = new Map();

    for (let i = 0, j = 0; j < s.length; j++) {
        if (checkMap.has(s[j])) {
            i = Math.max(checkMap.get(s[j]) + 1, i);
        }

        maxLen = Math.max(maxLen, j - i + 1);
        checkMap.set(s[j], j);
    }

    return maxLen;
};
