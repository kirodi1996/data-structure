function rearrangeArrayBySign(arr) {
    let positiveCount = 0
    let negativeCount = 0
    let ans = Array.from({length: arr.length})
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            ans[2*positiveCount] = arr[i]
            positiveCount++
        } else if(arr[i]<0) {
            ans[(2*negativeCount)+1] = arr[i]
            negativeCount++;
        }
    }
    return ans;
}

function main() {
    const arr = [3,1,-2,-5,2,-4]
    console.log(rearrangeArrayBySign(arr))
}

main()