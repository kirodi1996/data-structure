function findGCDorHCF(m , n) {
    let ans = 1
    while(m>0 && n>0) {
        if(m>n) m%=n
        if(n>m) n%=m
        if(m===0) {
            ans = n
        } 
        if(n==0) {
            ans = m
        }
    }
    return ans
}

function main() {
    const m = 20
    const n = 40
    console.log(findGCDorHCF(m, n))
}

main()