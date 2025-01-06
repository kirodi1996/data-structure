function longestSequenceInArray(arr) {
    let set = new Set()
    let count = 1;
    let maxCount = 1;    
    for(let i=0; i<arr.length; i++) {set.add(arr[i])}
    
    for(const value of set) {
        if(!set.has(value-1)) {
            let temp = value;
            count = 1;
            while(set.has(temp)) {
                maxCount = Math.max(maxCount, count);
                count++;
                temp = temp+1;
            }
        }
    }
    return maxCount;
}

function main() {
    const arr =  [100, 200, 1, 3, 2, 4,4,4,4,4]
    longestSequenceInArray(arr)
}

main()