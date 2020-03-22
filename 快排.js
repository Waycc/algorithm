var numbers = [10,3,40,8,12];
var quick_sort = function(list, left, right){
    if (left >= right) return
    var l = left,
        r = right,
        key_value = list[l]
    while (l < r){
        while (l < r && list[r] >= key_value){
            r--
        }
        list[l] = list[r]
        l++
        while (l < r && list[l] <= key_value){
            l++
        }
        list[r] = list[l]
        r--
    }
    list[l] = key_value
    arguments.callee(list, left, l-1)
    arguments.callee(list, l+1, right)
}

quick_sort(numbers, 0, numbers.length-1)
console.log(numbers)