function rotateMatrix(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr[0].length; j++) {
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
        }
    }
    for(let i=0; i<arr.length; i++) {
        arr[i].reverse();
    }
    return arr
}

function main() {
    const arr = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    rotateMatrix(arr)
}

main()