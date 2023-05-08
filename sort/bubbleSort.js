// 冒泡排序
// 就是从第一个元素开始，重复比较相邻的两个项，若第一项比第二项更大，则交换两者的位置；反之不动。
// 每一轮操作，都会将这一轮中最大的元素放置到数组的末尾。假如数组的长度是 n，那么当我们重复完 n 轮的时候，整个数组就有序了。
// 时间复杂度 O(n^2)，最优情况O(n)

const bubbleSort = (arr) => {
  const len = arr.length;
  // 外层循环：轮次
  for (let i = 0; i < len - 1; i++) {
    // 改进1
    // 用flag来标记本轮是否发生交换动作
    let flag = false;
    // 内层循环，比较相邻元素
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // 改进2
        flag = true;
      }
    }
    // 改进3
    // 如果本轮没有发生交换，则说明数组有序，直接返回数组，结束
    if (flag === false) return arr;
  }
  return arr;
};

console.log(bubbleSort([3, 2, 4, 1, 5, 0]));
