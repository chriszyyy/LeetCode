/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {

    if (nums.length < 3) return [];

    nums = nums.sort();
    const res = [];
    const numSet = new Set();

    for (let i = 0; i < nums.length - 2; i++) {
        if (numSet.has(nums[i])) {
            continue;
        } else {
            numSet.add(nums[i]);
        }

        const twoSums = twoSum(nums.slice(i + 1, nums.length), 0 - nums[i]);

        if (twoSums.length > 0) {
            twoSums.forEach((ts) => res.push([nums[i], ...ts]));
        }
    }

    numSet.clear();

    return res;
};

function twoSum(nums, sum) {
    if (nums.length < 2) return [];

    const res = [];
    const numSet = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        if (numSet.has(nums[i])) {
            continue;
        } else {
            numSet.add(nums[i]);
        }

        const index = nums.slice(i + 1, nums.length).indexOf(sum - nums[i]);

        if (index !== -1) {
            res.push([nums[i], sum - nums[i]]);
        }
    }

    numSet.clear();

    return res;
}
