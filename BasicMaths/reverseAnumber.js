function reverseAnumber(n) {
    let ans = 0;
    n = Math.abs(n)
    while(n>0) {
        let remainder = n%10
        n=Math.floor(n/10);
        ans = (ans*10)+(remainder)
    }
    console.log(ans)
}

function main() {
    const n  = -12345
    reverseAnumber(n)
}

main()