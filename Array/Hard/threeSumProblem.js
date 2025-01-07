function threeSumProblem(arr) {
   
    let n = arr.length
    const ans = []

    for(let i=0; i<n; i++) {
        if(i>0 && arr[i]=== arr[i-1]) continue
        let j = i+1
        let k = n-1;
        while(j<k) {
            if(arr[i]+arr[j]+arr[k]<0) {
                j++;
            } else if(arr[i]+arr[j]+arr[k]>0) {
                k--;
            } else if(arr[i]+arr[j]+arr[k]===0) {
                ans.push([arr[i],arr[j],arr[k]]);
                j++;
                k--;
                while(j<k && arr[j]===arr[j-1]) j++;
                while(j<k && arr[k]===arr[k+1]) k--;
            }
        }
    } 
    console.log(ans)
}

function main() {
    const arr = [-1,0,1,0]
    arr.sort((a,b) => a-b)
    threeSumProblem(arr)
}
main()