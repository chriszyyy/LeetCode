const ROMECHARMAP = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const ROMEVALUEMAP = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let romeNum = '';

    for (let i = 0; i < ROMEVALUEMAP.length; i++) {
        while (ROMEVALUEMAP[i] <= num) {
            num -= ROMEVALUEMAP[i];
            romeNum += ROMECHARMAP[i];
        }
    }

    return romeNum;
};

