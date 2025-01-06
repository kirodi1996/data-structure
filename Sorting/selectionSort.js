function swap(arr, minIndex, i) {
    let temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
}

function selectionSort(arr) {
    const n = arr.length
    let minIndex = 0;
    for(let i=0;i<=n-2;i++) {
        minIndex = i
        for(let j=i+1;j<n;j++) {
            if(arr[j]<arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            swap(arr, minIndex, i)
    
        }    
    }
}

function main() {
    const arr = [5,4,13,2,1]
    selectionSort(arr)
    console.log(arr)
}

main()