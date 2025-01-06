function swap(arr, i , j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function moveAllZero(arr) {
    let firstZero = -1;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0 && firstZero==-1) {
            firstZero = i
        }
        else if(arr[i]!=0 && firstZero !==-1) {
            swap(arr, firstZero, i)
            firstZero++
            
        }
    }
    console.log(arr)
}

function main() {
    const arr = [1,2,3,4,5,0,6,7,0,8,9,10,0,0,0,0,11]
    moveAllZero(arr)
}

main()