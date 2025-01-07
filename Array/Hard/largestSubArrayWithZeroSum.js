function largestSubArrayWithZeroSum(arr) {
    let max = 0;
    let hashMap = {}
    let sum = 0
    for(let i=0; i<arr.length; i++) {
        sum+=arr[i]
        if(sum===0) {
            max = i+1;
        } else if(hashMap.hasOwnProperty(sum)) {      
            max = Math.max(max, (i-hashMap[sum]))
        } 
        if(!hashMap.hasOwnProperty(sum)) {   
            hashMap[sum] = i
        }
    }

    console.log(max)
}

function main() {
    const arr = [6, -2, 2, -8, 1, 7, 4, -10]
    largestSubArrayWithZeroSum(arr)
}
main()
