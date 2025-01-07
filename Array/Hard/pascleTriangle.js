function factorial(num) {
    let fact = 1
    for(let i=1; i<=num;i++) {
        fact*=i
    }
    return fact
}

function pascleTriangle(n, row, col) {
    // print row col element
    let result = []
    const i = row-1
    const j = col-1
    let dividend = 1;
    
    for (let k=i; k>j; k--) {
        dividend*=k;
    }
    const divisor = factorial(i-j);
    const element = Math.floor(dividend/divisor)

    // print row
    let res = 1;
    for(let k=1; k<=n; k++) {    
        result.push(res)
        res = Math.floor((res*(n-k))/k)
    }
    console.log(result)
    result = []
    
    // print pascle tree
    for (let a=1; a<=n; a++) {
        const temp = []
        res = 1;
        for(let k=1; k<=a; k++) {    
            temp.push(res)
            res = Math.floor((res*(a-k))/k)
            
        }
        result.push(temp)
    }
    console.log(result)
}

function main() {
    const n = 6
    const row = 5
    const col = 3
    pascleTriangle(n, row, col)
}

main()