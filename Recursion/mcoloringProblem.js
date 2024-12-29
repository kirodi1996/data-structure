function createAdjMatrix (arr, n) {
    const adjacencyMatrix = Array.from({length: n}, () => Array(n).fill(0))
    for(const [u,v] of arr) {
        adjacencyMatrix[u][v] = 1
        adjacencyMatrix[v][u] = 1
    }
    return adjacencyMatrix
}

function isSafe(i, arr, color, index, n) {
    for(let col=0; col<n;col++) {
        if(arr[index][col] === 1 && color[col] === i ) {
            return false
        }
    }
  
    return true    
}

function mcoloringProblem (arr, n, m, color={}, index=0) {
        if(index === n) {
            return true
        }

        for (let i=1; i<=m; i++) {
            if(isSafe(i, arr, color, index, n)) {
                color[index] = i
                if(mcoloringProblem(arr, n, m, color, index+1)) {
                    return true
                }
                color[index] = 0
            }
        }
        return false
}

function main() {
    const n =3
    const m =2
    const arr = [
        [0,1],[1,2],[0,2]
    ]
    const adjacencyMatrix = createAdjMatrix(arr, n)
    console.log(mcoloringProblem(adjacencyMatrix, n, m)) 
}

main()