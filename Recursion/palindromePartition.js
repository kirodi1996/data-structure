function isPalindrome(str, start, end) {
    while(start<=end) {
        if(str[start++]!==str[end--]) {
            return false
        }
    }
    
    return true
}
function palindromePartition(str, ans, n, currIndex = 0, current=[]) {
    if(n === currIndex) {
        ans.push([...current])
        return
    }

    for (let i=currIndex; i<n; i++) {
        if(isPalindrome(str, currIndex, i)) {
            current.push(str.slice(currIndex, i+1))
            palindromePartition(str, ans, n, i+1, current)
            current.pop()
        }
    }
}

function main() {
    const str = "aabb";
    const ans = []
    const n = str.length
    palindromePartition(str, ans, n)
    console.log(ans)
}

main()