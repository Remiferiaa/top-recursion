function fibs(n) {
    let res = [0, 1]
    while (res.length < n)  {
        res.push(res[res.length - 1] + res[res.length - 2])
    }
    return res
}

function fibsRec(n, arr = [0,1]) {
    if (n <= 2) { return arr }
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fibsRec(n - 1, arr)
}




console.log(fibs(8))  // [0, 1, 1, 2, 3, 5, 8, 13] //
console.log(fibs(12)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] //

console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 8, 13] //
console.log(fibsRec(12)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] //