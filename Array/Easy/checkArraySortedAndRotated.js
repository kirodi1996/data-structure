function sortedAndRotated(arr) {
    let dropPoints = 0
    let n = arr.length
    for (let i =0; i< n; i++) {
        if(arr[i]>arr[(i+1)%n]) {
            dropPoints++;
        }
        if(dropPoints>1) {
            return false
        }
    }
    return true;
}

function main() {
    const arr = [3,4,5,1,2];
    console.log(sortedAndRotated(arr));
}

main()