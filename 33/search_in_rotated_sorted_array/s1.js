/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if (!nums || nums.length === 0) return -1;

    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    const pivot = getRotationIndex(nums, 0, nums.length - 1);

    if (target > nums[nums.length - 1]) {
        return biSearch(nums, 0, pivot - 1, target);
    } else {
        return biSearch(nums, pivot, nums.length - 1, target);
    }
}

function getRotationIndex(nums, left, right) {
    if (nums[left] < nums[right]) return 0;

    while (left <= right) {
        let pivot = Math.ceil((left + right) / 2);

        if (nums[pivot] > nums[pivot + 1]) {
            return pivot + 1;
        } else {
            if (nums[pivot] > nums[left]) {
                left = pivot + 1;
            } else {
                right = pivot - 1;
            }
        }
    }

    return 0;
}

function biSearch(nums, left, right, target) {
    while (left <= right) {
        let pivot = Math.ceil((left + right) / 2);

        if (nums[pivot] === target) {
            return pivot;
        } else {
            if (target < nums[pivot]) {
                right = pivot - 1;
            } else {
                left = pivot + 1;
            }
        }
    }

    return -1;
}
