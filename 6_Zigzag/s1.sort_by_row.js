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

    const res = [];
    let curRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        if (!res[curRow]) {
            res[curRow] = '';
        }

        res[curRow] += s[i];

        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }

        curRow += goingDown ? 1 : -1;
    }

    let finalRes = '';
    for (let i = 0; i < res.length; i++) {
        finalRes += res[i];
    }

    return finalRes;
};


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert2 = function(s, numRows) {
    if (!s || s.length === 0) {
        return '';
    }

    if (numRows === 1) {
        return s;
    }

    const res = [];
    const mod = 2 * numRows - 2;

    for (let i = 0; i < s.length; i++) {

        const currentIndex = i % mod;
        let currentRow = currentIndex;

        if (currentRow + 1 > numRows) {
            currentRow = mod - currentIndex;
        }

        if (!res[currentRow]) {
            res[currentRow] = [s[i]];
        } else {
            res[currentRow].push(s[i]);
        }
    }

    let finalRes = [];
    for (let i = 0; i < res.length; i++) {
        finalRes = finalRes.concat(res[i]);
    }

    return finalRes.join('');
};
