/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let romeNum = '';
    let start = 1;

    while (num > 0) {
        let rest = num % 10;
        num = Math.floor(num / 10);

        let romeChar = '';

        if (rest <= 5) {
            if (rest === 5) {
                romeChar = ROMEMAP[start].nor;
            } else if (rest === 4) {
                romeChar = ROMEMAP[start].one + ROMEMAP[start].nor;
            } else {
                while (rest > 0) {
                    romeChar += ROMEMAP[start].one;
                    rest--;
                }
            }
        } else {
            if (rest === 10) {
                romeChar = ROMEMAP[start].sub;
            } else if (rest === 9) {
                romeChar = ROMEMAP[start].one + ROMEMAP[start].sub;
            } else {
                while (rest - 5 > 0) {
                    romeChar += ROMEMAP[start].one;
                    rest--;
                }
                romeChar = ROMEMAP[start].nor + romeChar;
            }
        }

        romeNum = romeChar + romeNum;
        start++;
    }

    return romeNum;
};

const ROMEMAP = {
    1: {
        'one': 'I',
        'nor': 'V',
        'sub': 'X',
    },
    2: {
        'one': 'X',
        'nor': 'L',
        'sub': 'C',
    },
    3: {
        'one': 'C',
        'nor': 'D',
        'sub': 'M',
    },
    4: {
        'one': 'M',
    }
};
