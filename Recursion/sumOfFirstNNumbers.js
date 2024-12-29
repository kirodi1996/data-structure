function sumOfFirstNNumbers(n, sum=0) {
    if(n==0) {
        return sum
    }
    sum+=n    
    return sumOfFirstNNumbers(n-1, sum)
    
}

function main() {
    const n = 5
    console.log(sumOfFirstNNumbers(n))
}

main()