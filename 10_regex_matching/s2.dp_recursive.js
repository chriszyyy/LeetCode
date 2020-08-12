/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    const memo = {};

    function dp(i, j) {
        if (!memo[i.toString() + ',' + j.toString()]) {

            let ans;

            if (j === p.length) {
                ans = i === s.length;
            } else {
                let firstMatch = i < s.length && [s[i], '.'].includes(p[j]);

                if (j + 1 < p.length && p[j + 1] === '*') {
                    ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
                } else {
                    ans = firstMatch && dp(i + 1, j + 1);
                }
            }

            memo[i.toString() + ',' + j.toString()] = ans;
        }

        return memo[i.toString() + ',' + j.toString()];
    }

    return dp(0, 0);
};
