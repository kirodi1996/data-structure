function swap(arr, i ,j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function insertionSort(arr) {
    const n = arr.length-1;
    for(let i=1; i<=n; i++) {
        let j = i-1;
        let key = arr[i]
        while(j>=0 && arr[j]>key) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}

function main() {
    const arr = [22,10,9,8,4,10]
    insertionSort(arr)
    console.log(arr)
}

main()