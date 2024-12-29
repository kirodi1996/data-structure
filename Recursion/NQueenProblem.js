function nQueenProblem (ans, board, n , leftRow, rightDiag, leftDiag , col=0) {
    if(col === n) {
        ans.push(board)
        return
    }    

    for(let row=0; row<n; row++) {
        if(!leftRow[row] && !rightDiag[col+row] && !leftDiag[n-1+col-row]) {
            board[row][col] = 'Q';
            leftRow[row] = true;
            rightDiag[col+row] = true
            leftDiag[n-1+col-row] = true
            nQueenProblem(ans, board,  n, leftRow, rightDiag, leftDiag, col+1)
            board[row][col] = '.';
            leftRow[row] = false;
            rightDiag[col+row] = false
            leftDiag[n-1+col-row] = false
        }
    }
}

function main() {
    const n = 8
    let board = Array.from({length: n}, ()=>Array(n).fill('.'));
    let leftRow = Array.from({length:n}, ()=>false)
    let rightDiag = Array.from({length: (2*n)-1}, ()=>false)
    let leftDiag = Array.from({length: (2*n)-1}, ()=>false)
    let ans = []
    nQueenProblem(ans, board, n, leftRow, rightDiag, leftDiag)
    console.log(ans)
}

main()