function findNumberAppearMoreThanHalfTime(arr) {
    let count = 0
    let n = arr.length;
    let el;
    for(let i=0; i<arr.length;i++) {
        if(count === 0) {
            el = arr[i]
        }
        arr[i] === el ? count++ : count--;
    }

    let count1 = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === el) {
            count1++
        }
    }
    if(count1>Math.floor(n/2)) {
        return el;
    }
}

function main() {
    const arr = [2,2,1,3,1,1,3,1,1];
    console.log(findNumberAppearMoreThanHalfTime(arr));
}

main()