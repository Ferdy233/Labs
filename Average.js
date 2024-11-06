function average(arr){
    let innitialValue = 0
    const result = arr.reduce((acc, num) =>  acc + num, 0)
    return result/arr.length;
}
