/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    return mergeSort(nums);
};

function mergeSort(nums) {
    let items = [...nums];
    let width, n = items.length;

    for (width = 1; width < n; width *= 2) {
        for (let i = 0; i < n; i += 2 * width) {
            mergeSortMerge(items, i, Math.min(i + width, n), Math.min(i + 2 * width, n));
        }
    }

    return items;
}

function mergeSortMerge(items, left, right, end) {
    let currSortedList = [];
    let n = left,
        m = right;

    for (let j = left; j < end; j++) {
        if (n < right && (m >= end || items[n] < items[m])) {
            currSortedList.push(items[n]);
            n++;
        } else {
            currSortedList.push(items[m]);
            m++;
        }
    }

    currSortedList.forEach((item, i) => items[left + i] = item);
}
