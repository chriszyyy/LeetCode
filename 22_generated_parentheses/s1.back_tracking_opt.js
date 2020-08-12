/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];

    generate(ans, '', 0, 0, n);

    return ans;
};

function generate(answer, base, open, close, max) {
    if (base.length === 2 * max) {
        answer.push(base);
        return 0;
    }

    if (open < max) {
        generate(answer, base + '(', open + 1, close, max);
    }

    if (close < open) {
        generate(answer, base + ')', open, close + 1, max);
    }
}
