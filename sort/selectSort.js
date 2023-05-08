// 选择排序
// 选择排序的关键字是“最小值”：循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部；然后缩小排序范围，继续重复以上操作，直至数组完全有序为止。
// 时间复杂度 O(n^2) 无论最好最坏，都要走两层循环

const selectSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    // 记录当前区间最小值的索引
    let minIndex = i;
    // 遍历区间元素
    for (let j = i + 1; j < len; j++) {
      // 若遍历到更小的值，更新minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 交换操作
    if (i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

console.log(selectSort([3, 2, 4, 1, 5, 0]));
