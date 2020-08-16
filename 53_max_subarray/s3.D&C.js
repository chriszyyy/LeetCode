/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) return undefined;

    return helper(nums, 0, nums.length - 1);
}

function helper(nums, left, right) {
    if (left >= right) return nums[left];

    const p = Math.floor((left + right) / 2);

    //We include the pivot to left array, it doesn't matter where we put it.
    const leftSum = helper(nums, left, p)
    const rightSum = helper(nums, p + 1, right);
    const crossSum = getCrossSum(nums, left, right, p);

    return Math.max(leftSum, rightSum, crossSum);
}

function getCrossSum(nums, left, right, p) {
    if (left >= right) return nums[left];

    let leftSum = -Infinity;
    let currSum = 0;
    // Here we inculde the pivot element to the left so we are sure to have element from both left and right
    for (let i = p; i > left - 1; i--) {
        currSum += nums[i];
        leftSum = Math.max(currSum, leftSum);
    }

    let rightSum = -Infinity;
    currSum = 0;
    for (let i = p + 1; i < right + 1; i++) {
        currSum += nums[i];
        rightSum = Math.max(currSum, rightSum);
    }

    return leftSum + rightSum;
}
