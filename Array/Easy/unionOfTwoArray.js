function unionTwoArray(arr1, arr2) {
    const union = []
    let i=0;
    let j=0;
    let m = arr1.length;
    let n = arr2.length;
    let lastPushedElement;
    while(i<m && j<n) {
        if (arr1[i] === arr2[j]) {
            if (arr1[i] !== lastPushedElement) {
                union.push(arr1[i]);
                lastPushedElement = arr1[i];
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            if (arr1[i] !== lastPushedElement) {
                union.push(arr1[i]);
                lastPushedElement = arr1[i];
            }
            i++;
        } else {
            if (arr2[j] !== lastPushedElement) {
                union.push(arr2[j]);
                lastPushedElement = arr2[j];
            }
            j++;
        }
    }

    while(i<m){
        if(lastPushedElement!==arr1[i]){
            lastPushedElement = arr1[i]
            union.push(arr1[i])
        }
        i++
    }

    while(j<n) {
        if(lastPushedElement!==arr2[j]){
            lastPushedElement = arr2[j]
            union.push(arr2[j])
        }
        j++
    }
    console.log(union)
}

function main() {
    const arr1 = [1,2,3,4,5,5]
    const arr2 = [1,2,3,5,6,6]
    unionTwoArray(arr1, arr2)
}

main()