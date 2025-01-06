function findMissingNumber(arr) {
    let xor1=0;
    let xor2=0;
    for(let i=1; i<=arr.length+1; i++) {
        xor1 ^= i;
    }
    for(let i=0; i<arr.length; i++) {
        xor2 ^= arr[i];
    }
    console.log(xor1^xor2)
}

function main() {
    const arr = [1,2,3,5,6,7,8,9,10];
    findMissingNumber(arr)
}

main()