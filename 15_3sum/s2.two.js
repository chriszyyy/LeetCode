/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {

    if (nums.length < 3) return [];

    nums = nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];

            while (lo < hi) {
                const twoSum = nums[lo] + nums[hi];
                if (twoSum === sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);

                    while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while(lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++; hi--;
                } else if (twoSum < sum) {lo++;}
                else {hi--;}
            }
        }
    }
    return res;
};
