/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const border = Math.pow(2, 31);

    let res = 0;

    while (x !== 0) {
        const pop = x % 10;
        x = parseInt((x / 10).toString());

        res = res * 10 + pop;
    }

    if (res < -border || res > border - 1) {
        return 0;
    }

    return res;
};
