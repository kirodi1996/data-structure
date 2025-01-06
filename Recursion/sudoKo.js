function isValid(board, k, row, col) {
    for (let i=0; i<9;i++) {
        if(board[i][col] === k) return false
        if(board[row][i] === k) return false
        if(board[3*Math.floor(row/3)+Math.floor(i/3)][3*Math.floor(col/3)+i%3] === k) return false
    }
    return true
}

function sudoKo (board) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<9;j++) {
            if(board[i][j] === '.') {
                for(let k of '123456789') {
                    if(isValid(board, k, i ,j)) {
                        board[i][j] = k
                        if(sudoKo(board)) {
                            return true
                        } else {
                            board[i][j] = '.'
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}

function main() {
    const n = 9;
    const arr = Array.from({length: n}, ()=> Array(n).fill('.'))
    sudoKo(arr)
}

main()