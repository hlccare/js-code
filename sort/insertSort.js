// 插入排序
// 时间复杂度 O(n^2) 最好为O(n)

const insertSort = (arr) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    // temp保存本轮需要排序元素
    let temp = arr[j];
    // 判断j前的元素是否比temp大
    while (j > 0 && arr[j - 1] > temp) {
      // 大则前移一位
      arr[j] = arr[j - 1];
      // j再前移
      j--;
    }
    // j前一位元素不大于temp，在此处插入temp
    arr[j] = temp;
  }
  return arr;
};

console.log(insertSort([3, 2, 4, 1, 5, 0]));
