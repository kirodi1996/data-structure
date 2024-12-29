function swap(arr, i, index) {
    let temp = arr[i]
    arr[i] = arr[index]
    arr[index] = temp
}

function printAllPermutation(arr, ans, index=0) {
    if(index === arr.length) {
        ans.push([...arr])
        return
    }
    for(let i = index; i < arr.length; i++) {
        swap(arr, index, i)
        printAllPermutation(arr, ans, index+1)
        swap(arr, i, index)
    }
}

function main() {
    const arr = [1,2,3]
    const ans = []
    printAllPermutation(arr, ans)
    console.log(ans)
}

main()
 