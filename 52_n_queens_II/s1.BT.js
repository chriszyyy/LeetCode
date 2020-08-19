/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if (n === 0) return 1;

    const map = new Array(n).fill(0).map(() => new Array(n).fill(0))

    return backTracking(map);
};

function backTracking(map, row=0, count=0) {
    const n = map.length;
    for (let col = 0; col < n; col++) {
        if (isNotInAttackingArea(map, row, col)) {
            placeQueen(map, row, col);

            // We reach the bottom of the chest, get a solution
            if (row + 1 === n) {
                count += 1;
            } else {
                // move to the next row and see all the possible solutions
                count = backTracking(map, row + 1, count);
            }

            removeQueen(map, row, col);
        }
    }

    return count;
}

function isNotInAttackingArea(map, row, col) {
    return map[row][col] === 0 ? true : false;
}

// We mark only the bottom, bottom left, bottom right attack area, upper is no necessary
function placeQueen(map, row, col) {
    const n = map.length;
    // Increment the bottom
    for (let i = row + 1; i < n; i++) {
        map[i][col]++;
    }

    // Increment the bottom left
    for (let i = col - 1, j = row + 1; i >= 0 && j < n; i--, j++) {
        map[j][i]++;
    }

    // Increment the bottom right
    for (let i = col + 1, j = row + 1; i < n && j < n; i++, j++) {
        map[j][i]++;
    }
}

// We decrease only the bottom, bottom left, bottom right attack area, upper is no necessary
function removeQueen(map, row, col) {
    const n = map.length;
    // Increment the bottom
    for (let i = row + 1; i < n; i++) {
        map[i][col]--;
    }

    // Increment the bottom left
    for (let i = col - 1, j = row + 1; i >= 0 && j < n; i--, j++) {
        map[j][i]--;
    }

    // Increment the bottom right
    for (let i = col + 1, j = row + 1; i < n && j < n; i++, j++) {
        map[j][i]--;
    }
}
