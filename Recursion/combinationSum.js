function combinationSum(arr, target, ans=[], current=[], i=0) {
    if (target<0) {
        return
    }
    if(target===0) {
        ans.push([...current])
        return
    }
    if(arr.length <= i) {
        return 
    }
    if(arr[ind]<=target) {
        current.push(arr[i])
        combinationSum(arr, target-arr[i], ans, current, i)
        current.pop()
    }

    combinationSum(arr, target, ans, current, i+1)
}

function main() {
    const arr = [2,3,6,7]
    const ans = []
    combinationSum(arr, 7, ans)
    console.log(ans)
}

main()