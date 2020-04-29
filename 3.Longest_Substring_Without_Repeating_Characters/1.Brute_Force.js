/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    const checkSet = new Set();

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (checkSet.has(s[j])) {
                checkSet.clear();
                break;
            } else {
                checkSet.add(s[j]);
                maxLen = maxLen < checkSet.size ? checkSet.size : maxLen;
            }
        }
    }

    return maxLen;
};
