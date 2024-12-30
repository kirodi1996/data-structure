function countDigits (n) {
    return Math.floor(Math.log10(n))+1
    // if(n===0) return 1
    // let count = 0
    // n = Math.abs(n)

    // while(n>0) {
    //     n=Math.floor(n/10);
    //     count++;
    // }
    // return count
}

function main() {
    const n = 123456
   console.log(countDigits(n)) 
}

main()