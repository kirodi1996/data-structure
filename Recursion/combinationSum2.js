function combinationSum(arr, target, ans=[], index=0, current=[]) {
    if(target === 0) {
        ans.push([...current])
        return
    }
    if(index>arr.length) {
        return
    }
    if(target<0) {
        return
    }

    for (let i=index; i<arr.length; i++) {
        if(i>index && arr[i] === arr[i-1]) continue;
        current.push(arr[i]) 
        combinationSum(arr, target-arr[i], ans, i+1, current)
        current.pop()     
    }
}


function main() {
    const arr = [2,5,2,1,2];
    const target = 5;
    const ans = []
    arr.sort((a, b) => a-b)
    combinationSum(arr, target, ans)
    console.log(ans)
}
main()