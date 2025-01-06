function swap(arr, i, j) {
    const temp = arr[i]
    arr[i]= arr[j]
    arr[j] = temp
}

function bubbleSort(arr) {
    const n = arr.length
    for (let j=n-1; j>0; j--) {
        for(let i=0; i<j; i++) {
            if(arr[i]>arr[i+1]) {
                swap(arr, i, i+1)
            }
        }
    }
    console.log(arr)
}

function main() {
    const arr = [23, 50, 13,15,12,11,19,100]
    bubbleSort(arr)
}

main()