/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 0, cum = 0;
    while (k > 0) {
        if (++i !== arr[cum]) {
            k--;
        } else {
            cum++;
        }

    }

    return i;
};
