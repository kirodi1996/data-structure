function longestSubArrayWithKSum(arr, k) {
    let max = 0
    let i = 0;
    let j = 0;
    let n = arr.length;
    let sum = 0;
    while (j<n) {
        sum += arr[j];
        while(sum>k && i<=j) {
            sum-=arr[i]
            i++
        }
        if(sum===k) {
            max = Math.max(max, (j-i+1));
        }
        j++
    }
    return max
}

function main() {
    const arr = [2,3,5,1,9];
    const sum = 10;
    console.log(longestSubArrayWithKSum(arr, sum))
}

main()