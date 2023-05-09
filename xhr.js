// 创建 =》 打开 =》 设置监听事件 =》 发送
// readystate
// 0 已创建，未打开
// 1 已经调用open
// 2 已经调用send，响应头已被接受
// 3 下载中，正在接收响应体
// 4 下载操作已完成
let xhr = new XMLHttpRequest();

xhr.open("get", "/xxx");

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      success(xhr);
    } else {
      fail(xhr);
    }
  }
};

xhr.send({ name: "123" });
