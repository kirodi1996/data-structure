function swap(arr1, arr2) {
    
}

function swapifGreater(arr1, arr2, left ,right) {
    if(arr1[left]>arr2[right]) {
        const temp = arr1[left]
        arr1[left] = arr2[right]
        arr2[right] = temp
    } 
}

function mergeTwoSortedArray(arr1, arr2) {
    const n = arr1.length;
    const m = arr2.length;
    const len = n+m;
    let gap = Math.ceil((n+m)/2)
    console.log(gap)
    while(gap>0) {
        let left = 0;
        let right = left+gap
        
        while(right<len) {
            //arr1 arr2
            if(right>=n && left<n) {
                swapifGreater(arr1, arr2, left, right-n)
            }
            //arr2 arr2 
            else if(left>=n) {
                swapifGreater(arr2, arr2, left-n, right-n)
            } 
            // arr1 arr1 
            else {
                swapifGreater(arr1, arr1, left, right)
            }
            left++;
            right++;
           
        }
        if(gap===1) break
        gap = Math.ceil((gap)/2)
    }
    return [...arr1, ...arr2]
}

function main() {
    const arr1 = [1,4,8,10]
    const arr2 = [2,3,9]
    console.log(mergeTwoSortedArray(arr1, arr2))
}

main()