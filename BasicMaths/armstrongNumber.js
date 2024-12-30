function armstrongNumber(n) {
    let sum = 0
    let temp = n
    while(n>0) {
       let remainder = n%10;
       sum += Math.pow(remainder, 3);
       console.log(remainder, sum)
       n=Math.floor(n/10)
    }
    return sum === temp
}

function main() {
    const n = 407
    console.log(armstrongNumber(n)) 
}

main()