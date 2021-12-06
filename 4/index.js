const fs = require('fs').promises;

function part1(boards, drawnNumbers) {
    for (let number = 0; number < drawnNumbers.length; number++) {
        for (let row = 0; row < 5; row++) {
            for (let column = 0; column < 5; column++) {
                for (let board = 0; board < boards.length; board++) {
                    if (boards[board][row][column] === drawnNumbers[number]) {
                        boards[board][row][column] = 'X';
                    }

                    if (boards[board][row].every(num => num === 'X') || (
                        boards[board][0][column] === 'X'
                        && boards[board][1][column] === 'X'
                        && boards[board][2][column] === 'X'
                        && boards[board][3][column] === 'X'
                        && boards[board][4][column] === 'X'
                    )) {
                        console.log('BINGO', boards[board]);

                        const final = [];

                        for (const row of boards[board]) {
                            final.push(...row);
                        }

                        const a = final.filter(num => num !== 'X');
                        const sum = a.reduce((a, b) => Number(a) + Number(b));

                        console.log(sum * drawnNumbers[number]);

                        board = row = column = number = Number.MAX_VALUE;
                    }
                }
            }
        }
    }
}

function part2(boards, drawnNumbers) {
    const bingos = new Set();

    for (let number = 0; number < drawnNumbers.length; number++) {
        for (let row = 0; row < 5; row++) {
            for (let column = 0; column < 5; column++) {
                for (let board = 0; board < boards.length; board++) {
                    if (boards[board][row][column] === drawnNumbers[number]) {
                        boards[board][row][column] = 'X';
                    }

                    if (boards[board][row].every(num => num === 'X') || (
                        boards[board][0][column] === 'X'
                        && boards[board][1][column] === 'X'
                        && boards[board][2][column] === 'X'
                        && boards[board][3][column] === 'X'
                        && boards[board][4][column] === 'X'
                    )) {
                        bingos.add(board);

                        if (bingos.size === boards.length) {
                            console.log('FINAL BINGO', boards[board]);

                            const final = [];

                            for (const row of boards[board]) {
                                final.push(...row);
                            }

                            const a = final.filter(num => num !== 'X');
                            const sum = a.reduce((a, b) => Number(a) + Number(b));

                            console.log(sum * drawnNumbers[number]);

                            board = row = column = number = Number.MAX_VALUE;
                        }
                    }
                }
            }
        }
    }
}

(async () => {
    const file = await fs.readFile(`${__dirname}/input.txt`, 'utf8');
    const rows = file.split('\n\n');
    const drawnNumbers = rows.shift().split(',');
    const rawBoards = rows.map(row => row.split('\n'));
    const trimmedBoards = rawBoards.map(board => board.map(row => row.replace(/  /g, ' ').trim()));
    const boards = trimmedBoards.map(board => board.map(row => row.split(' ')));
    
    part1(boards, drawnNumbers);
    part2(boards, drawnNumbers);
})().catch(error => console.log(error));