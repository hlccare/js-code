// 防抖
// 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。

function debounce(func, timeout = 10000) {
  let timer;
  return function () {
    let args = arguments;
    let context = this; // 处理this
    if (timer) {
      clearTimeout(timer);
    }
    // 处理this，支持addEventlistener，调用时this指向绑定的dom元素
    // 不处理，该函数将会在全局环境中运行，this指向window
    timer = setTimeout(func.bind(context), timeout);
  };
}
