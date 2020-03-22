let a = [0, 9, 10, 11, 4, 5];

let mergeSort = function (list) {
  let temp = []
  sort(list, 0, list.length - 1, temp);
  console.log(a)
}

let sort = function (list, left ,right, temp) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    sort(list, left, mid, temp);
    sort(list, mid + 1, right, temp);
    merge(list, left, mid, right, temp)
  }
}

let merge = function (list, left, mid, right, temp) {
  let i = left
  let j = mid + 1
  let count = 0;
  while (i <= mid && j<=right) {
    if (list[i] <= list[j]) {
      temp[count++] = list[i++]
    } else {
      temp[count++] = list[j++]
    }
  }
  while (i <= mid) {
    temp[count++] = list[i++]
  } 
  while (j <= right) {
    temp[count++] = list[j++]
  }
  count = 0
  while (left <= right) {
    list[left++] = temp[count++]
  }
};

mergeSort(a)
