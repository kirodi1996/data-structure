function printOneToN(n) {
    if(n==0) {
        return ;
    }
    printOneToN(n-1)
    console.log(n)
}

function printNToOne(n) {
    if(n===0) {
        return
    }
    console.log(n)
    printNToOne(n-1);
}

function main() {
    const n = 5;
    printOneToN(n)
    printNToOne(n)
}

main()
