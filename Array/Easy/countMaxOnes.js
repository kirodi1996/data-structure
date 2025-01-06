function countMaxOnes (arr) {
    let max = 0;
    let startIndex = null;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 1 && startIndex === null) {
            startIndex = i;
        } else if (arr[i] === 0) {
            startIndex = null
        }
        if(startIndex !== null) {
            console.log(i, startIndex)
            max = Math.max(max, (i-startIndex+1))
        }
        
    }
    console.log(max)
}

function main() {
    const arr = [1,1,0,1]
    countMaxOnes(arr)
}

main()