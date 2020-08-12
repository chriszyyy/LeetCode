/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {

    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const x = nums1.length;
    const y = nums2.length;
    const isOdd = (x + y) % 2 !== 0;

    let low = 0, high = x;

    while (low <= high) {
        let partX = Math.floor((low + high) / 2);
        let partY = Math.floor((x + y + 1) / 2) - partX;

        const maxLeftX = partX === 0 ? -Infinity : nums1[partX - 1];
        const minRightX = partX === x ? Infinity : nums1[partX];

        const maxLeftY = partY === 0 ? -Infinity : nums2[partY - 1];
        const minRightY = partY === y ? Infinity : nums2[partY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if (isOdd) {
                return Math.max(maxLeftX, maxLeftY);
            } else {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            }
        } else if (maxLeftX > minRightY) {
            high = partX - 1;
        } else {
            low = partX + 1;
        }

    }
};
