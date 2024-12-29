function printAllSubSequence(arr, n=0, current = [], res = []) {
    if(arr.length === n) {
        return res.push([...current])
    }

    current.push(arr[n])
    printAllSubSequence(arr, n+1, current, res);
    current.pop()
    printAllSubSequence(arr, n+1, current, res);
}

function main() {
    const arr = []
    const res = []
    printAllSubSequence(arr, 0 , [], res)
    console.log(res)
}
main()