Promise.myRace = function (list) {
  let resolved = false; // 关键，标记是否已有请求resolve
  return new Promise((resolve, reject) => {
    list.map((promise) => {
      promise.then(
        (data) => {
          if (!resolved) {
            // 一旦成功，修改resolved，阻止其他promise进入
            resolved = true;
            resolve(data);
          }
        },
        // 任意失败，直接reject
        (reason) => reject(reason)
      );
    });
  });
};
