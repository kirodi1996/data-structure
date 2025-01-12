function findNthRoot(n, m) {
    let low = 1;
    let high = m;
    while(low<=high) {
        const mid = Math.floor((low+high)/2);
        const num = Math.pow(mid, n); // we can optmize this in case of large number of pow
       
        if(num === m) {
            return mid
        } else if(num <m) {
            low = mid+1
        } else {
            high = mid-1
        }
    }

    return -1
}

function main() {
    const n = 2
    const m = 9
    console.log(findNthRoot(n, m))
}

main()