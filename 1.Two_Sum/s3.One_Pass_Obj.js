/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {

    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const complementIndex = numsMap[complement];

        if (complementIndex && complementIndex !== i) {
            return [i, complementIndex];
        } else {
            numsMap[nums[i]] = i;
        }
    }

    throw new Error('No result error');
};
