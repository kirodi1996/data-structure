function calculateFrequency (arr) {
    const freqMap = {}
    for(let i=0;i<arr.length; i++) {
        if (!freqMap[arr[i]]) {
            freqMap[arr[i]] = 1
        } else {
            freqMap[arr[i]]++;
        }
    }

    let highest = -Infinity
    let ans;
    for(let key in freqMap) {
      if(highest< freqMap[key]) {
        highest = freqMap[key]
        ans = key
      }
    }
    return [ans, highest]
}

function main() {
    const arr = [13,22,22,22,1,4,5,3]
    console.log(calculateFrequency(arr))
}

main()
