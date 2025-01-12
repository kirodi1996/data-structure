function findLowerBound(arr, target) {
    let low = 0;
    let high = arr.length-1
    let mid
    let ans=arr.length;
    while(low<=high) {
        mid = Math.floor((low+high)/2);
        if(arr[mid]>=target ) {
            ans = mid
            high=mid-1
        } else {
            low = mid+1;
        }
    }

    return ans;
}

function findUpperBound(arr, target) {
    let low = 0;
    let high = arr.length-1
    let mid
    let ans=arr.length;
    while(low<=high) {
        mid = Math.floor((low+high)/2);
        if(arr[mid]>target ) {
            ans = mid
            high=mid-1
        } else {
            low = mid+1;
        }
    }

    return ans;
}

function main() {
    const arr = [3,5,8,15,19,19,19]
    const target = 16;
    console.log(findLowerBound(arr, target))
}

main()