function removeDuplicatesFromArray(arr) {    
    const n = arr.length;
    let uniqueCount = 0;
    for(let i=0;i<n-1;i++) {
        if(arr[i] === arr[i+1]) {
            continue
        } else {
            uniqueCount++
        }
    }
    return uniqueCount+1   
}

function main() {
    const arr = [1,1,2,2,3,4,4,15];
    removeDuplicatesFromArray(arr)
}

main()