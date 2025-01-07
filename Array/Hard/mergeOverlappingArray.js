function mergeOverLappingSubArray(arr) {
    const ans = [];
    let lastElement;
    for(let i=0; i<arr.length;i++) {
        if(ans.length != 0) {
            if(lastElement[1]>=arr[i][0]) {
                ans.pop()
                lastElement = [lastElement[0], Math.max(lastElement[1], arr[i][1])]
                
            } else {
                lastElement = arr[i]
            }
        } else  {
            lastElement = arr[i]
        }

        ans.push(lastElement)
        
    }
    console.log(ans)
}

function main() {
    const arr = [[1,3],[8,10],[15,18],[2,6]]
    arr.sort((a,b) => a[0]-b[0])
    mergeOverLappingSubArray(arr)
}

main()