function longestSubArrayWithK(arr, k) {
    let hashMap = {}
    let sum = 0;
    let max = 0    
    for(let i=0; i<arr.length; i++) {
        sum+=arr[i];
        if(sum===k) {
            max = Math.max(max, i+1) 
        }
        if(hashMap[sum-k]) {
            max = Math.max(max, (i-hashMap[sum-k]))
        }
        if(!hashMap[sum]) {
            hashMap[sum] = i
        }
    }
    return max
}

function main() {
    const arr = [-1,1,0]
    console.log(longestSubArrayWithK(arr, 0))       
}

main()