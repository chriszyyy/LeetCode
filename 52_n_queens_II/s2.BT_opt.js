/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {

    // Observation, hill and dal have const result

    function isNotAttacked(row, col) {
        return !rows[col] && !hills[row + col] && !dals[row - col];
    }

    function place(row, col) {
        rows[col] = 1;
        hills[row + col] = 1;
        dals[row - col] = 1;
    }

    function remove(row, col) {
        rows[col] = 0;
        hills[row + col] = 0;
        dals[row - col] = 0;
    }

    function backTracking(row=0, count=0) {
        if (n === 0) return 1;
        for (let col = 0; col < n; col++) {
            if (isNotAttacked(row, col)) {
                place(row, col);

                if (row + 1 === n) {
                    count++;
                } else {
                    count = backTracking(row + 1, count);
                }

                remove(row, col);
            }
        }

        return count;
    }

    const rows = new Array(n).fill(0);
    const hills = new Array(n * 2).fill(0);
    const dals = new Array(n * 2).fill(0);

    return backTracking();
};
