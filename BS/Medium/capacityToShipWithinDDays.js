function isPossible(arr, mid, days) {
    let load = 0
    let totalDays = 1;
    for(let i=0; i<arr.length;i++) {
        if(arr[i]+load>mid) {
            totalDays+=1
            load = arr[i]
        } else {
            load+=arr[i]
        }
    }
    return totalDays<=days
}

function capacityToShipWithinDDays (arr, days) {
    let high = arr.reduce((sum, weight) => sum + weight, 0);
    let low = Math.max(...arr)

    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        if(isPossible(arr, mid, days)) {
            high = mid-1
        } else {
            low = mid+1
        }

    }
    console.log(low)
    return low
}


function main() {
    const arr = [1,2,3,1,1]
    capacityToShipWithinDDays(arr, 4)
}



main()