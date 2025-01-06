function twoSum(arr, target) {
    let hashMap = {}
    let ans = []
    for (let i=0; i<arr.length; i++) {
        hashMap[arr[i]] = i
    }
    for(let i=0; i<arr.length; i++) {
        if(hashMap.hasOwnProperty(target-arr[i]) && hashMap[target-arr[i]]!=i) {
            ans = [i, hashMap[target-arr[i]]]
            break;
        }
    }
    return ans
}

function main() {
    const arr = [2,7,11,15];
    const target = 9;
    console.log(twoSum(arr, target))
}

main()