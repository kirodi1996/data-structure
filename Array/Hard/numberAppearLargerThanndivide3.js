function numberLargerThanNByThreeTimes (arr) {
    let count1 = 0;
    let count2 = 0;
    let el1, el2
    for(let i=0; i<arr.length; i++) {
        if(count1 === 0 && el2!==arr[i]) {
            count1 = 1
            el1 = arr[i];
        }
        else if(count2 ===0 && el1!==arr[i]) {
            count2 = 1
            el2 = arr[i];      
        }
        else if(el1 === arr[i]) {
            count1++;
        } else if(el2===arr[i]) {
            count2++;
        } else {
            count1--;
            count2--;    
        }
        console.log(el1, el2)
    }
    count1 = 0
    count2 = 0

    const ans = [];

    for(let i=0;i<arr.length;i++) {
        if(arr[i] === el1) {
            count1++;
        } else if(arr[i] === el2) {
            count2++;
        }
    }
    

    if(count1 > Math.floor(arr.length/3)) {
        ans.push(el1)
    }
    if(count2 > Math.floor(arr.length/3)) {
        ans.push(el2)
    }
    return ans
}

function main() {
    const arr = [1,2]
    console.log(numberLargerThanNByThreeTimes(arr))
}

main()