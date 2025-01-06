function maxSumOfSubArray(arr) {
    let sum = 0;
    let max = -Infinity
    let start = -1;
    let ansEnd = -1;
    let ansStart = -1;
    for (let i=0; i<arr.length; i++) {
        if(sum===0) start = i;
        sum+=arr[i];
        if(sum> max) {
            ansEnd = i
            ansStart = start
            max = sum
        }
        if(sum<0) {
            sum=0
        }
    }
    for(let j=ansStart; j<=ansEnd; j++)
       console.log(arr[j])
    return max
}

function main() {
    const arr = [-2,1,-3,4,-1,2,1,-5,4]
   console.log(maxSumOfSubArray(arr))
}
main()