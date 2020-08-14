/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length <= 0 || matrix[0].length <= 0) return false;

    function helper(left, top, right, down) {
        console.log(left, top, right, down);

        // No valid area for this matrix
        if (left > right || top > down) return 0;

        // The target is smaller than the smallest or bigger than the greatest
        if (target < matrix[top][left] || target > matrix[down][right]) return 0;

        const mid = Math.floor((right + left) / 2);

        // Find the row which make matrix[row - 1][mid] <= target and target < matrix[row][mid]
        let row = top;
        while (row <= down && matrix[row][mid] <= target) {
            if (matrix[row][mid] === target) return true;

            row++;
        }

        // Top right and bottom left are the target area to search
        return helper(mid + 1, top, right, row - 1) || helper(left, row, mid - 1, down)
    }

    return helper(0, 0, matrix[0].length - 1, matrix.length - 1);
};
