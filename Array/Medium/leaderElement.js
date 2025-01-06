function leaderElement(arr) {
    const leaderArr = []
    let largestNumber = -Infinity
    for(let i=arr.length-1; i>=0;i--) {
        if(arr[i]>largestNumber) {
            leaderArr.push(arr[i])
        }
        largestNumber = Math.max(largestNumber, arr[i])
        
    }
    return leaderArr
}

function main() {
    const arr = [16, 17, 4, 3, 5, 2]
    console.log(leaderElement(arr))
}

main()