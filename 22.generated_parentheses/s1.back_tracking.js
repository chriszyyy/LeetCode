/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const generated = [];

    generate([], n, 2 * n, generated);

    return generated.map((list) => list.join(''));
};

function generate(base, available, targetLen, generated) {
    if (base.length === 0) {
        generate(['('], available - 1, targetLen, generated);
    } else if (base.length === targetLen) {
        generated.push(base);
        return 0;
    } else if (base[base.length - 1] === '(') {
        if (available > 0) {
            generate([].concat(base, '('), available - 1, targetLen, generated);
            generate([].concat(base, ')'), available, targetLen, generated);
        } else {
            generate([].concat(base, ')'), available, targetLen, generated);
        }
    } else {
        if (available > 0) {
            generate([].concat(base, '('), available - 1, targetLen, generated);

            if (base.length / 2 < base.filter((e) => e === '(').length) {
                generate([].concat(base, ')'), available, targetLen, generated);
            }
        } else {
            generate([].concat(base, ')'), available, targetLen, generated);
        }
    }
}
