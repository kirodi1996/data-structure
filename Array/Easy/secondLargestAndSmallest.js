function secondLargestAndSamllest(arr) {
    let small = Infinity
    let secondSmall = Infinity
    let large = -Infinity
    let secondLarge = -Infinity

    for (let i=0; i<arr.length; i++) {
       if(arr[i] < small) {
            secondSmall = small
            small = arr[i]
       } else if(small<arr[i] && secondSmall>arr[i]) {
            secondSmall = arr[i]
       }
       if(arr[i]> large) {
        secondLarge = large    
        large = arr[i]
       } else if(arr[i]<large && secondLarge<arr[i]) {
            secondLarge = arr[i]
       }
    }
    console.log(small, secondSmall, large, secondLarge)
}

function main() {
    const arr = [11,1,2,3,4,56,7,19,20]
    secondLargestAndSamllest(arr)
}

main()