function mergeArr(arr, low, mid, high) {
    let i = low
    let j = mid+1
    let temp = []
    let count = 0;
    while(i<=mid && j<=high) {
        if(arr[i]<arr[j]) {
            temp.push(arr[i++])
            
        } else {
            count+=(mid-i+1)
            temp.push(arr[j++])
        }

    }

    temp = temp.concat(arr.slice(i, mid+1)).concat(arr.slice(j, high+1))

    for(let k = low; k<=high; k++) {
        arr[k] = temp[k-low]
    }
    return count
}

function countInversion (arr, low=0, high=arr.length-1) {
    let count = 0
    if(low>= high) {
        return count
    }


    const mid = Math.floor((low+high)/2)
    count += countInversion(arr, low, mid)
    count += countInversion(arr, mid+1, high)
    count += mergeArr(arr, low, mid, high)

    return count
}

function main() {
    let arr = [4,3,2,1]
    
    console.log(countInversion(arr))
}

main()