function merge(arr) {
    if (arr.length < 2) {return arr}
    const mid = Math.floor(arr.length / 2)
    const left = merge(arr.slice(0, mid))
    const right = merge(arr.slice(mid))
    const result = []
    let i = 0
    let j = 0
    while(i < left.length && j < right.length) {
        result.push(left[i] > right[j] ? right[j++] : left[i++])
    }
    return result.concat(left.slice(i), right.slice(j))
}

const randomArr = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

console.log(merge(randomArr));