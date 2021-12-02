const fs = require('fs').promises;

function part1(commands) {
    let pos = 0;
    let depth = 0;

    commands.forEach(command => {
        const num = Number(command[1]);

        if (command[0] === 'forward') {
            pos += num;
        } else {
            depth += command[0] === 'down' ? num : -num;
        }
    });

    return pos * depth;
}

function part2(commands) {
    let pos = 0;
    let depth = 0;
    let aim = 0;

    commands.forEach(command => {
        const num = Number(command[1]);

        if (command[0] === 'forward') {
            pos += num;
            depth += aim * num;
        } else {
            aim += command[0] === 'down' ? num : -num;
        }
    });

    return pos * depth;
}

(async () => {
    const file = await fs.readFile(`${__dirname}/input.txt`, 'utf8');
    const rows = file.split('\n');
    const commands = rows.map(row => row.split(' '));

    console.log(part1(commands));
    console.log(part2(commands));
})().catch(error => console.log(error));