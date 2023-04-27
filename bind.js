Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  context = context || window;
  // 获取参数
  const args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    // instanceof Fn 用于处理bind返回的函数作为构造函数，new Fn()的情况
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments) // bind的参数与实际调用的参数进行拼接
    );
  };
};
