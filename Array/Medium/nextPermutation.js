function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function nextPermutation(arr) {
    let breakPoint = -1;

    for(let i=arr.length-2;i>=0;i--) {
        if(arr[i]<arr[i+1]) {
            breakPoint = i;
            break;
        }
    }

    if(breakPoint === -1) {
        arr.reverse()
    }

    for(let i = arr.length-1; i>breakPoint; i--) {
        if(arr[i]> arr[breakPoint]) {
            swap(arr, i , breakPoint)
            break
        }
    }

    let left = breakPoint+1;
    let right = arr.length-1;
    while(left<right) {
        swap(arr, left, right)
        left++;
        right--;
    }

}

function main() {
    let arr = [3,2,1]
    nextPermutation(arr)
    console.log(arr)
}

console.log(main())