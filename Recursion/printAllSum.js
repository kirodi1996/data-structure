function printAllSum(arr, sum=0, ans=[], i=0) {
    if(i>arr.length) {
        return
    }
    ans.push(sum)
    printAllSum(arr, sum+arr[i], ans, i+1)
    printAllSum(arr, arr[i], ans, i+1)
}

function main() {
    const arr = [2,3];
    let sum = 0;
    let ans = [];
    printAllSum(arr, sum, ans)
    console.log(ans.sort((a, b) => a-b))
}

console.log(main())