const winningPaths = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

export function getWinner(squares) {
    const xSquares = squares.reduce((matchingSquares, square, index) => {
        if (square.by === 'X') {
            matchingSquares.push(index)
        }

        return matchingSquares
    }, [])
    let winningPath = matchesWinningPath(xSquares)
    
    if (winningPath) {
        return {
            winner: 1,
            path: winningPath,
        }
    }

    const oSquares = squares.reduce((matchingSquares, square, index) => {
        if (square.by === 'O') {
            matchingSquares.push(index)
        }

        return matchingSquares
    }, [])
    winningPath = matchesWinningPath(oSquares)
    if (winningPath) {
        return {
            winner: 2,
            path: winningPath,
        }
    }
}

function matchesWinningPath(squareIndexes) {
    if (squareIndexes.length < 3) {
        return
    }
    const winningPath = winningPaths.find((path) => {
        const has1 = squareIndexes.includes(path[0])
        const has2 = squareIndexes.includes(path[1])
        const has3 = squareIndexes.includes(path[2])
        const isWinner = has1 && has2 && has3
        console.log(has1, has2, has3)
        return isWinner
    })

    return winningPath
}