/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {

    const parentheseMap = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    const stack = [];

    for (let c of s) {
        const match = parentheseMap[c];

        if (!match) {
            stack.push(c);
        } else {
            const leftParen = stack.pop();
            if (match !== leftParen) {
                return false;
            }
        }
    }

    return stack.length <= 0;
};
