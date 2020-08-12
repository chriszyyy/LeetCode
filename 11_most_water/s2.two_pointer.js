/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {

    let max = 0;

    let left = 0, right = height.length - 1;

    while (left < right) {
        const hLeft = height[left];
        const hRight = height[right];
        const area = (right - left) * Math.min(hLeft, hRight);

        max = max > area ? max : area;

        if (hLeft > hRight) {
            right--;
        } else {
            left++;
        }
    }

    return max;
};
