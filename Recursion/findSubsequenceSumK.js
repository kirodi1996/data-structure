function findSubsequenceSumK (arr, sum, ans= [], n=0, current=[]) {
    if(arr.length === n) {
        if(sum===0) {
            ans.push([...current])    
        } 
        return 
    }
    current.push(arr[n])
    findSubsequenceSumK(arr, sum-arr[n], ans, n+1, current)
    current.pop()
    findSubsequenceSumK(arr, sum, ans, n+1, current)
}

function main () {
    const arr = [1,2,3,4]
    const sum = 3;
    const ans = []
    findSubsequenceSumK(arr, sum, ans)
    console.log(ans)
}

main() 