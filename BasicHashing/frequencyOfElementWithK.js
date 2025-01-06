function maxFreqWithKOperation(arr, k) {
    let left = 0;
    let maxFreq = 0;
    let sum = 0;
    for(let right=0; right<arr.length;right++) {
        sum+=arr[right]
        while(((arr[right] * (right-left+1))-sum)>k) {
            sum-=arr[left]
            left++
        }
        maxFreq = Math.max(maxFreq, right-left+1)
    }
    return maxFreq
}

function main() {
    const arr = [1, 2, 4, 1]
    const k = 8;
    arr.sort((a,b) => a-b)
    console.log(maxFreqWithKOperation(arr, k))
}

main()