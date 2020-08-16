/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    /*
        We keep in track of the surplus and deficit, we need to keep the starting point where when we travel the circuit for a
        round and still have surplus + deficit >= 0, so that point is the good starting point
    */
    let surplus = 0,
        deficit = 0,
        startingPoint = 0;

    for (let i = 0; i < gas.length; i++) {
        surplus = surplus + gas[i] - cost[i];

        if (surplus < 0) {
            startingPoint = i + 1;
            deficit += surplus;
            surplus = 0;
        }
    }

    return surplus + deficit >= 0 ? startingPoint : -1;
};
