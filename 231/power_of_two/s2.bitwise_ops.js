/**
 * 正数原码
 * 利用负数原码的补码等于反码+1
 * 负数的补码加正数补码
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) return false;
    const x = n;
    return (x & (-x)) === x; // 带符号整数范围有问题 -2147483648
};
