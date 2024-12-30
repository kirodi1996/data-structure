function printAllDivisor(n) {
    const sqrt = Math.floor(Math.sqrt(n))
    const ans = []
    for (let i = 1 ; i<=sqrt; i++) {
        ans.push(i)
        if(n%i === 0) {
            if(i!==Math.floor(n/i)) {
                ans.push(Math.floor(n/i))
            }
        }
    }
    ans.sort((a,b) => a-b);
    return ans
}

function main() {
    const n = 36;
    console.log(printAllDivisor(n))
}

main()