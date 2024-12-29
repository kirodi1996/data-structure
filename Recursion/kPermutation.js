function kPermutation(n, k, ans = '', arr=[]) {
    let fact = 1
    for(let i=1; i<n; i++) {
        arr.push(i)
        fact*=i
    }
    arr.push(n)
    k = k-1
    let ans = ''
    while (true) {
        ans += arr[Math.floor(k/fact)]
        arr.splice(Math.floor(k/fact), 1)
        if(arr.length === 0) break;
        k = k%fact
        fact = Math.floor(fact/arr.length)
    }
    return ans  
}

function main() {
    const n = 4;
    const k = 17;
    return kPermutation(n, k)
    
}

console.log(main())