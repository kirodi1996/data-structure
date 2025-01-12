function findTwiceAndMissingNumber(arr) {
    const hashArr = Array.from({length: arr.length}).fill(0)
    let missing = -1, repeating = -1;
    for(let i=0; i<arr.length;i++) {
        hashArr[arr[i]-1]++;
    }
    for(let i=0; i<hashArr.length; i++) {
        if(hashArr[i] === 0) {
            missing = i+1
        } 
        if(hashArr[i] === 2) {
            repeating = i+1
        }
    }
    return [repeating, missing]
}


function optimizedUsingMath (arr) {
    const n = arr.length;
    let sum = 0;
    let sumOfSquare = 0;
    sn = (n*(n+1)) / 2
    snSquare = (n*(n+1)*((2*n)+1)) /6
    for (let i=0; i<n; i++) {
        sum+=arr[i];
        sumOfSquare +=arr[i]*arr[i]
    }
    let val1 = sum-sn
    let val2 = sumOfSquare-snSquare
    val2 /=val1;

    let x = (val1+val2)/2
    let y = x-val1
    return [x,y]
}

function optimizedUsingXor(arr) {
    let xor = 0;
    const n = arr.length
    for (let i=0; i<n; i++) {
       xor^=arr[i]
       xor^=i+1
    }
    let bitNumber = 0
    while(1) {
        if((xor & (1<<bitNumber)) != 0) break
        bitNumber++
    }
    
    let ones = 0
    let zeros = 0

    for(let i=0;i<n;i++) {
        //part of one
        if ((arr[i] & 1<<bitNumber) != 0) {
            ones^=arr[i]
            console.log('ones:'+arr[i])
        }
        //part of zero club
        else {
            zeros^=arr[i]
            console.log('zeros:'+arr[i])
        }
     }

    for(let i=1;i<=n;i++) {
       //part of one
        if ((i & 1<<bitNumber) != 0) {
            ones^=i
       }
       //part of zero club
        else {
            zeros^=i
       }
    }
    let count = 0
    let repeatedElement=-1;
    let missing = -1
    for(let i=0; i<n; i++) {
        if(ones===arr[i]) count++
    }
    if(count>0) {
        repeatedElement = ones 
        missing = zeros
    }
    else {
        repeatedElement = zeros
        missing = ones
    }
    console.log([repeatedElement, missing])
}

function main() {
    const arr = [1, 2, 3, 2]
    console.log(findTwiceAndMissingNumber(arr))
    console.log(optimizedUsingMath(arr))
    optimizedUsingXor(arr)
}

main()