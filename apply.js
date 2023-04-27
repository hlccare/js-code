Function.prototype.myApply = function (context) {
  // 检查调用myBind的是否为函数
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  let result = null;
  context = context || window;
  // 使用symbol保证属性唯一
  // 不会重写原来的属性
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  if (arguments[1]) {
    result = context[fnSymbol](...arguments[1]);
  } else {
    result = context[fnSymbol]();
  }
  delete context[fnSymbol];
  return result;
};
