// allSettled与all不同地方
// allSettled不会reject，一定是resolve
// 返回的结果成员为对象，status，value / reason

Promise.myAllSettled = function (list) {
  const results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    list.map((promise, index) => {
      promise.then(
        (data) => {
          // 存储value
          results[index] = { status: "fulfilled", value: data };
          count++;
          if (count >= list.length) {
            // 当所有都完成，则resolve
            resolve(results);
          }
        },
        (reason) => {
          // 存储reason
          results[index] = { status: "rejected", reason };
          count++;
          if (count >= list.length) {
            // 当所有都完成，则resolve，不需要reject
            resolve(results);
          }
        }
      );
    });
  });
};
