/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let maxLen = 0, i = 0, j = 0;
    const checkSet = new Set();

    while (i < s.length && j < s.length) {
        if (!checkSet.has(s[j])) {
            checkSet.add(s[j++]);
            maxLen = Math.max(maxLen, j - i);
        } else {
            checkSet.delete(s[i++]);
        }
    }

    return maxLen;
};
