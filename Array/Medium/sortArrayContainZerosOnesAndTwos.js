function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function sortArray(arr) {
    let low = 0
    let mid = 0
    let high = arr.length-1;
    while(mid<=high) {
        if(arr[mid]===1) {
            mid++
        } else if (arr[mid]===0) {
            swap(arr, low, mid)
            low++;
            mid++
        } else if (arr[mid]===2) {
            swap(arr, mid, high)
            high--;
        }
    }
}

function main() {
    const arr = [1,2,0]
    sortArray(arr)
    console.log(arr)
}

main()