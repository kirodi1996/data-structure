function isPrimeNumber(n) {
    if(n<=1) return false
    let count = 0;

    for(let i=2; i*i<=n; i++) {
        if(n%i === 0) {
            return false
        }
    }
    return true
}

function main() {
    const n = 12
    console.log(isPrimeNumber(n))
}

main()