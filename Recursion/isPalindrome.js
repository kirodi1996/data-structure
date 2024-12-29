function isPalindrome(str, low=0, high= str.length-1) {
    if(low>=high) {
        return true
    }
    if(str[low] !== str[high]) { // we can also str.length-i-1
        return false
    }
    return isPalindrome(str, low+1, high-1)
}

function main() {
    const str = 'naman'
    console.log(isPalindrome(str)) 
}

main()
