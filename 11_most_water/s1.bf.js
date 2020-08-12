/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {

    let max = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = (j - i) * Math.min(height[i], height[j]);

            max = max > area ? max : area;
        }
    }

    return max;
};
