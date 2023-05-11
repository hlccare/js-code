Promise.myAll = function (list) {
  const results = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    list.map((promise, index) => {
      promise.then(
        (data) => {
          results[index] = data;
          count++;
          if (count >= list.length) {
            // 当所有都完成，则resolve
            resolve(results);
          }
        },
        // 任意失败，直接reject
        (reason) => reject(reason)
      );
    });
  });
};
