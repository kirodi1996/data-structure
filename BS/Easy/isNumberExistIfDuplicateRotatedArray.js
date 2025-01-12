function findNumber(arr, k) {
    let low = 0
    let high = arr.length-1
    while(low<=high) {
        const mid = Math.floor((high+low)/2)
        if(arr[mid] === k) {
            return mid
            
        } 

        if(arr[mid] === arr[low] && arr[mid] === arr[high]) {
            low++;
            high--;
            continue
        }

        if(arr[low]<=arr[mid]) {
            if(arr[low]<=k && k<=arr[mid]) {
                high = mid-1
            } else {
                low = mid+1
            }

        } else {
            if(k>=arr[mid] && k<=arr[high]) {
                low=mid+1
            } else {
                high = mid-1
            }
        }
    }
    return -1
}

function main() {
    const arr = [8,9,1,2,3,4,5,6,7]
    const k = 8
    findNumber(arr, k)
}

main()
