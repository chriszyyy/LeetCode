/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {

    nums = nums.sort((a, b) => a - b);
    let diff = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {

        if (i === 0 || nums[i] !== nums[i - 1]) {
            let lo = i + 1, hi = nums.length - 1;
            while (lo < hi) {

                const sum = nums[i] + nums[lo] + nums[hi];

                if (Math.abs(target - sum) < Math.abs(diff)) {
                    diff = target - sum;
                }

                if (sum < target) lo++;
                else hi--;
            }

            if (diff === 0 || target < nums[i]) break;
        }
    }

    return target - diff;
};
