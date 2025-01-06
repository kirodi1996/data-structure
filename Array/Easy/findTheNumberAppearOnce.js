function findNumberAppearOnce(arr) {
    let xor = arr[0]
    for (let i=1; i<arr.length; i++) {
        xor^=arr[i]
    }
    return xor
}

function main() {
    const arr = [1,4,1,4,2,2,10]
    console.log(findNumberAppearOnce(arr))
}

main()