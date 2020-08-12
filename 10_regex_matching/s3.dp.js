/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    const memo = {'0,0': true};

    for (let j = 1; j < p.length + 1; j++) {
        if (p[j - 1] === '*') {
            memo[vToS(0, j)] = memo[vToS(0, j - 2)];
        } else {
            memo[vToS(0, j)] = false;
        }
    }

    for (let i = 1; i < s.length + 1; i++) {
        memo[vToS(i, 0)] = false;
    }

    for (let i = 1; i < s.length + 1; i++) {
        for (let j = 1; j < p.length + 1; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                memo[vToS(i, j)] = memo[vToS(i - 1, j - 1)];
            } else if (p[j - 1] === '*') {
                memo[vToS(i, j)] = memo[vToS(i, j - 2)];

                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    memo[vToS(i, j)] = memo[vToS(i, j)] || memo[vToS(i - 1, j)];
                }
            } else {
                memo[vToS(i, j)] = false;
            }
        }
    }

    return memo[vToS(s.length, p.length)];
};

function vToS(x, y) {
    return x.toString() + ',' + y.toString();
}
