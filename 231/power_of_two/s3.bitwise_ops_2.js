/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    const x = n;
    return (x & (x - 1)) === 0;
};
