function mergeArr(arr, low, mid, high) {
    let i = low;
    let j = mid+1;
    let temp = []
    while(i<=mid && j<=high) {
        if(arr[i]<=arr[j]) {
            temp.push(arr[i++])
        } else {    
            temp.push(arr[j++])
        }
    }

    while(i<=mid) {
        temp.push(arr[i++])
    }
    while(j<=high) {
        temp.push(arr[j++])
    }

    for(let k=low; k<=high; k++) {
        arr[k]=temp[k-low]
    }
}

function countReversePair(arr, low, mid, high) {
    let count = 0;
    let right = mid+1;
    for(let i=low; i<=mid;i++) {
        while(right<=high && arr[i]>(2*arr[right])) right++;
        count = count+(right-(mid+1))
    }
    return count;
}

function reversePair(arr, low=0, high=arr.length-1) {
    let count = 0
    if(low>=high) {
        return count
    }
    const mid = Math.floor((low+high)/2);
    count+=reversePair(arr, low, mid)
    count+=reversePair(arr, mid+1, high)
    count+=countReversePair(arr, low, mid, high)
    mergeArr(arr, low, mid, high)
    return count
}

function main() {
    const arr = [1,3,2,3,1]
    console.log(reversePair(arr))
    console.log(arr)
}

main()