/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {

    let nums = [];

    let n1 = 0, n2 = 0;
    while (n1 < nums1.length && n2 < nums2.length) {
        if (nums1[n1] <= nums2[n2]) {
            nums.push(nums1[n1++]);
        } else {
            nums.push(nums2[n2++]);
        }
    }

    if (n1 < nums1.length) {
        nums = nums.concat(nums1.splice(n1));
    }

    if (n2 < nums2.length) {
        nums = nums.concat(nums2.splice(n2));
    }

    return getMedianNumber(nums);
};

function getMedianNumber(inputArray) {

    if (inputArray.length === 0) {
        return null;
    }

    if (inputArray.length % 2 === 1) {
        return inputArray[Math.floor(inputArray.length / 2)]
    } else {
        return (inputArray[inputArray.length / 2] + inputArray[inputArray.length / 2 - 1]) / 2;
    }
}
