/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = nums[0],
        maxSum = currSum;

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], nums[i] + currSum);
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
};
