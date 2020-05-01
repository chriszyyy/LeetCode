/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {

    const templateString = preProcessing(s);
    const tLen = templateString.length;

    let center = 0, rightBorder = 0;
    const p = [];

    for (let i = 1; i < tLen - 1; i++) {

        const iMirror = 2 * center - i;

        if (rightBorder > i) {
            p[i] = Math.min(p[iMirror], rightBorder - i)
        } else {
            p[i] = 0;
        }

        while (templateString[i - p[i] - 1] === templateString[i + p[i] + 1]) {
            p[i]++;
        }

        if (i >= rightBorder) {
            center = i;
            rightBorder = p[i] + i;
        }
    }

    let max = 0, centerIndex = 0;
    for (let i = 1; i < tLen - 1; i++) {
        if (max < p[i]) {
            max = p[i];
            centerIndex = i;
        }
    }

    const start = Math.floor((centerIndex - p[centerIndex]) / 2);

    return s.slice(start, start + max);
};

function preProcessing(s) {
    if (s === null) {
        return '';
    }

    return '^#' + Array.from(s).join('#') + '#$';
}
