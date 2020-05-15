/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = '';

    if (strs.length === 0) return '';

    for (let i = 0; i < strs[0].length; i++) {
        const curC = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (curC !== strs[j][i]) return prefix;
        }

        prefix += curC;
    }

    return prefix;
};
