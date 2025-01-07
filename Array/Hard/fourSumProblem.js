function fourSum(arr, target) {
    let n = arr.length;
    let ans = []
    for(let i=0;i<n;i++) {
        if(i>0 && arr[i]===arr[i-1]) continue
        for(let j=i+1; j<n;j++) {
            if(j!=i+1 && arr[j]=== arr[j-1]) continue
            let k = j+1;
            let l = n-1;
            while(k<l) {
                let sum = arr[i]+arr[j]+arr[k]+arr[l]
                if(target===sum) {
                    ans.push([arr[i],arr[j],arr[k],arr[l]])
                    l--;
                    k++;
                    while(k<l && arr[k]===arr[k-1]) k++;
                    while(k<l && arr[l]===arr[l+1]) l--;
                } else if(sum<target) k++;
                else l--;
            }
        }        
        
    }
    console.log(ans)
}

function main() {
    const arr = [4,3,3,4,4,2,1,2,1,1];
    arr.sort((a,b) => a-b) //[1,1,1,2,2,3,3,4,4,4]
    const target = 9;
    fourSum(arr, target)
}

main()