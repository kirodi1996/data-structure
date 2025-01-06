function setMatrixZero(arr) {
    const row = []
    const col = []
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[0].length; j++) {
            if(arr[i][j] === 0) {
                row.push(i)
                col.push(j)
            }
        }
    }
    for(const i of row) {
        for(let j=0; j<arr[0].length; j++) {
            arr[i][j] = 0
        }
    }

    for(let i=0; i<arr.length; i++) {
        for(const j of col) {
            arr[i][j] = 0
        }
    }
    console.log(arr)
}

function optimizedSolution(arr) {
    let col0 = 1;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[0].length; j++) {
            if(arr[i][j] === 0) {
                arr[i][0] = 0
                
                if(j!=0) arr[0][j] = 0
                else col0 = 0
            }
        }
    }

    for(let i=1; i<arr.length; i++) {
        for(let j=1; j<arr[0].length; j++) {
            if(arr[i][j]!=0) {
                if(arr[i][0] === 0 || arr[0][j] === 0) {
                    arr[i][j] = 0
                }    
            }
        }
    }
    if(arr[0][0] === 0) {
        for(let j=0; j<arr[0].length; j++) {    
            arr[0][j] = 0
        }
    }
    if(col0 === 0) {
        for(let i=0; i<arr.length; i++) {
            arr[i][0] = 0
        }
    }
}


function main() {
    const arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    // setMatrixZero(arr)
    optimizedSolution(arr)
}

main()