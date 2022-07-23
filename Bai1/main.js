function adjacentElementsProduct(input){
    let arr = []
    for(let i=1;i<input.length;i++){
        arr.push(input[i]*input[i-1])
    }
    arr.sort(function(a,b){
        return b-a
    })
    return arr[0]
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]))