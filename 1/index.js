const fs = require('fs').promises;

function part1(ints) {
    let increased = 0;

    for (let i = 1; i < ints.length; i++) {
        if (ints[i] > ints[i - 1]) {
            increased++;
        }
    }

    return increased;
}

function part2(ints) {
    let increased = 0;

    for (let i = 0; i < ints.length; i++) {
        if ((ints[i + 1] + ints[i + 2] + ints[i + 3]) > (ints[i] + ints[i + 1] + ints[i + 2])) {
            increased++;
        }
    }

    return increased;
}

(async () => {
    const file = await fs.readFile(`${__dirname}/input.txt`, 'utf8');
    const rows = file.split('\n');
    const ints = rows.map(v => Number(v));

    console.log(part1(ints));
    console.log(part2(ints));
})().catch(error => console.log(error));