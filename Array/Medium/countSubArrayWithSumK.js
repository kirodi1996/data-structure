function countSubArrayWithSumK(arr, k) {
    let hashMap = {}
    let sum = 0;
    let count = 0
    for(let i=0; i<arr.length; i++) {
        sum+=arr[i];
        if(sum === k) {
            count++
        }
        if(hashMap[sum-k]) {
            count += hashMap[sum-k]
        }
        if(!hashMap[sum]) {
            hashMap[sum] = 1
        } else {
            hashMap[sum]++
        }
    }
}

function main() {
    const arr = [3, 1, 2,0, 4];
    const target = 4;
    countSubArrayWithSumK(arr, target)
}

main()