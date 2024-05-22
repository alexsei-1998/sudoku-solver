import { useState } from 'react';

export default function useSolve(grid) {
    const [sudokuSolutions, setSudokuSolutions ] = useState([]);
    function isValid() {
        const allowedInputs = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (!allowedInputs.includes(grid[i][j])) {
                    return false;
                }
            }
        }
        return true;
    }
    function isSafe(i, j, num, duplGrid)
    {
        for(let x = 0; x < 9; x++)
        {
            if(duplGrid[i][x] === num)
                return false;
        }
        for(let x = 0; x < 9; x++)
        {
            if(duplGrid[x][j] === num)
                return false;
        }
        for(let x = 0; x < 3; x++)
        {
            let row = (3*Math.floor(i/3) + x);
            for(let y = 0; y < 3; y++)
            {
                let col = (3*Math.floor(j/3) + y);
                if(duplGrid[row][col] === num)
                    return false;
            }
        }
        return true;
    }
    function f(i, j, solutions, duplGrid)
    {
        if(i === 9)
        {
            let cloneDuplGrid = duplGrid.map(row=>[...row]);
            solutions.push(cloneDuplGrid);
            return;
        }
        if(duplGrid[i][j] == "")
        {
            for(let num = 1; num <= 9; num++)
            {
                if(isSafe(i, j, `${num}`, duplGrid))
                {
                    duplGrid[i][j] = `${num}`;
                    if(j === 8)
                        f(i + 1, 0, solutions, duplGrid);
                    else 
                        f(i, j + 1, solutions, duplGrid);
                    duplGrid[i][j] = "";
                }
            }
        }
        else
        {
            if(j === 8)
                f(i + 1, 0, solutions, duplGrid);
            else 
                f(i, j + 1, solutions, duplGrid);
        }
    }
    function solveSudoku()
    {
        let solutions = [];
        let duplGrid = grid.map(row => [...row]);
        f(0, 0, solutions, duplGrid);
        setSudokuSolutions(solutions);
    }
    return { sudokuSolutions, setSudokuSolutions, isValid,  solveSudoku};
}