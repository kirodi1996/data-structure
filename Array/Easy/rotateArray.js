function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function rotateArray (arr, rotateDirection, k) {
    const n = arr.length;
    if(rotateDirection === 'right') {
        for(let i=n-k, j=n-1; i<j; i++, j--) {
            swap(arr, i, j)
        }
        for(let i=0, j=n-k-1;i<j;i++,j--) {
            swap(arr, i ,j)
        }
        for(let i=0, j=n-1; i<j; i++, j--) {
            swap(arr, i ,j)
        }
    } else if(rotateDirection === 'left') {
        for(let i=0, j=k-1;i<j;i++,j--) {
            swap(arr, i ,j)
        }
        for(let i=n-k-1, j=n-1; i<j; i++, j--) {
            swap(arr, i, j)
        }
        for(let i=0, j=n-1; i<j; i++, j--) {
            swap(arr, i ,j)
        }
    }

}

function main() {
    let arr = [1,2,3,4,5]
    rotateArray(arr, 'left', 2);
    console.log(arr)
    arr = [1,2,3,4,5];
    rotateArray(arr, 'right', 2);
    console.log(arr)
}

main()