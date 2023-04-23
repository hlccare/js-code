// 增加immediate参数，实现首次调用是立即执行

function debounce(func, timeout = 10000, immediate = false) {
  let timer = null;
  // 是否已立即执行过
  let isImmediateInvoke = false;
  function _debounce(...args) {
    let context = this;
    if (timer !== null) clearTimeout(timer);
    // 未立即执行过 且 需要立即执行
    if (!isImmediateInvoke && immediate) {
      // 立即执行
      func.apply(context, args);
      // 更新是否立即执行过状态
      isImmediateInvoke = true;
    }
    timer = setTimeout(function () {
      func.apply(context, args);
      // 调用后重置立即执行过为false
      isImmediateInvoke = false;
    }, timeout);
  }

  // 增加取消方法
  _debounce.cancel = function () {
    clearTimeout(timer);
    isImmediateInvoke = false;
  };
  return _debounce;
}
