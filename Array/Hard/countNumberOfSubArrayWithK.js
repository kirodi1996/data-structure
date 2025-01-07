function numberOfSubarrayWithK(arr, k) {
    const n = arr.length
    let xor = 0;
    let count = 0
    let hashMap = {}
    for(let i=0; i<n; i++) {
        xor ^= arr[i];
        if(xor==k) {
            count++
        }
        if(hashMap.hasOwnProperty(xor^k)) {
            count += hashMap[xor^k]
        }
        if(hashMap.hasOwnProperty(xor)) {
            hashMap[xor]++
        } else {
            hashMap[xor] = 1
        }
    }
    return count
}

function main() {
    const arr = [4, 2, 2, 6, 4]
    const k = 6;
    console.log(numberOfSubarrayWithK(arr, k))
}
main()