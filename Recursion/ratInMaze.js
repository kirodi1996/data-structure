function ratInMaze(ratMaze, directioni, directionj, ans, row=0, col=0) {
    if(row === ratMaze.length-1 && col === ratMaze.length) {
        return
    }

    let dir = 'DLRU'

    for(let ind=0; ind<4 ; ind++) {
        let nextI = row+directioni[ind]
        let nextj = col+directionj[ind]
        if(nextI>=0 && nextI<ratMaze.length && nextj>=0 && nextj<ratMaze.length && ratMaze[nextI][nextj] === 1) {
            ratMaze[nextI][nextj] = 0
            ratInMaze(ratMaze, directioni, directionj, ans+dir[ind], nextI, nextj)
            ratMaze[nextI][nextj] = 1 
        }
    }
}

function main () {
    const ratMaze = [
        [1, 0, 0, 0], 
        [1, 1, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1]
    ]

    const directioni = [+1, 0, 0, -1];
    const directionJ = [0,-1,1,0 ]
    const str = ''
    ratInMaze(ratMaze, directioni, directionJ,str)
    console.log(str)
}

main()