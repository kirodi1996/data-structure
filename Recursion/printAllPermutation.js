function printAllPermutation(arr, ans = [], visited, current=[]) {
    if (arr.length === current.length) {
        ans.push([...current])
        return 
    }
    for(let i = 0; i<arr.length; i++) {
        if(!visited[i]) {
            current.push(arr[i]);
            visited[i] = true
            printAllPermutation(arr, ans, visited, current);
            current.pop();   
            visited[i] = false 
        }
    }
    
}

function main() {
    const arr = [1, 2, 3]
    let visited = Array.from({length: arr.length}, ()=> false)
    const ans = []
    printAllPermutation(arr, ans, visited)
    console.log(ans)
}

main()