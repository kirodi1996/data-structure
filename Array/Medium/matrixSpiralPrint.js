function spiralPrintMatrix(arr) {
    let top = 0
    let right = arr[0].length-1
    let bottom = arr.length-1
    let left = 0;
    const result = [];
    while(top<=bottom && left<=right) {
        for(let i=top; i<=right; i++) {
            result.push(arr[top][i])
        }
        top++;
        for(let i=top; i<=bottom; i++) {
            result.push(arr[i][right])
        }
        right--;
        if(top<=bottom) {
            for(let i=right; i>=left; i--) {
                result.push(arr[bottom][i])
            }
            bottom--;
        }
        if(left<=right) {
            for(let i=bottom;i>=top;i--) {
                result.push(arr[i][left])
            }
            left++;
        }
    }
    return result;
}

function main() {
    const arr = [ [ 1, 2, 3, 4 ],
                  [ 5, 6, 7, 8 ],
                  [ 9, 10, 11, 12 ],
                  [ 13, 14, 15, 16 ] 
                ]
   console.log(spiralPrintMatrix(arr))
}

main()