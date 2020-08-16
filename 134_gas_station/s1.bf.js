/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    // We check for each start and see if we can get around the circuit
    for (let i = 0; i < gas.length; i++) {

        let curr = i;
        let remain = 0;

        do {
            remain += gas[curr] - cost[curr];
            curr = (curr + 1) % gas.length;

            if (curr === i && remain >= 0) return i;
        } while (remain >= 0)
    }

    return -1;
};
