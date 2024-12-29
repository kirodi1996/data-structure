function printName(n) {
    if(n==0) {
        return
    }
    console.log('Learning recursion')
    printName(n-1)
}

function main () {
    const n = 5;
    printName(n)
}

main()
