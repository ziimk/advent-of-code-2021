const fs = require('fs').promises;

function part1(bitsArray) {
    const length = bitsArray[0].length;

    let zeroes = 0;
    let ones = 0;
    let finalBinary = '';

    for (let i = 0; i < length; i++) {
        bitsArray.forEach(bits => {
            if (bits[i] === '0') {
                zeroes++;
            } else {
                ones++;
            }
        });

        finalBinary += zeroes > ones ? '0' : '1';
        zeroes = ones = 0;
    }

    const gamma = parseInt(finalBinary, 2);
    const epsilon = parseInt(finalBinary.replace(/./g, x => x^1), 2);

    return gamma * epsilon;
}

function checkBits(binary) {
    binary.forEach(bits => {
        if (bits[i] === '0') {
            zeroes++;
        } else {
            ones++;
        }
    });
}

function part2_1(bitsArray) {
    const length = bitsArray[0].length;

    let zeroes = 0;
    let ones = 0;
    
    for (let i = 0; i < length; i++) {
        bitsArray.forEach(bits => {
            if (bits[i] === '0') {
                zeroes++;
            } else {
                ones++;
            }
        });

        bitsArray = bitsArray.filter(bits => {
            if (zeroes <= ones) {
                return bits[i] === '1';
            }

            return bits[i] === '0';
            
        });
        
        if (bitsArray.length === 1) {
            break;
        }

        zeroes = ones = 0;
    }

    return bitsArray;
}

function part2_2(bitsArray) {
    const length = bitsArray[0].length;

    let zeroes = 0;
    let ones = 0;
    
    for (let i = 0; i < length; i++) {
        bitsArray.forEach(bits => {
            if (bits[i] === '0') {
                zeroes++;
            } else {
                ones++;
            }
        });

        bitsArray = bitsArray.filter(bits => {
            if (zeroes <= ones) {
                return bits[i] === '0';
            }

            return bits[i] === '1'; 
        });

        if (bitsArray.length === 1) {
            break;
        }

        zeroes = ones = 0;
    }

    return bitsArray;
}

(async () => {
    const file = await fs.readFile(`${__dirname}/input.txt`, 'utf8');
    const rows = file.split('\n');

    console.log(part1(rows));
    
    const rating1 = part2_1(rows);
    const rating2 = part2_2(rows);

    console.log(parseInt(rating1, 2) * parseInt(rating2, 2));
})().catch(error => console.log(error));