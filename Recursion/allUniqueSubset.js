function allUniqueSubset(arr, ans, current=[], index=0) {

    ans.push([...current])
    

    for(let i=index;i<arr.length;i++) {
        if(i>index && arr[i-1]===arr[i]) continue;
        current.push(arr[i])
        allUniqueSubset(arr, ans, current, i+1)
        current.pop()
    }
}

function main() {
    const arr = [1, 2, 2]
    const ans = []
    arr.sort((a,b)=> a-b)
    allUniqueSubset(arr, ans)
    console.log(ans)
}

main()