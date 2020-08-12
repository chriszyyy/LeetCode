/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {

    const res = [];

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        const v1 = nums[i];

        if (i !== 0 && nums[i - 1] === v1) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            const v2 = nums[j];
            if (j !== i + 1 && nums[j - 1] === v2) continue;

            let lo = j + 1, hi = nums.length - 1;
            const sum = target - v1 - v2;

            while (lo < hi) {
                const twoSum = nums[lo] + nums[hi];

                if (twoSum === sum) {
                    res.push([v1, v2, nums[lo], nums[hi]]);

                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++; hi--;
                } else if (twoSum < sum) lo++;
                else hi--;
            }
        }
    }

    return res;
};
