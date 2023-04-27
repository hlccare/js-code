// 将myCall挂在Function的原型对象上
// 任意函数可以用 xxx.myCall()来调用
Function.prototype.myCall = function (context) {
  // 检查this，即检查myCall调用者的类型
  // 只允许myCall被函数调用，否则抛出错误
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  // 获取调用参数，除了第一个参数是用来指定this的
  let args = [...arguments].slice(1);
  let result = null;
  // 若context没有传入，则使用window
  context = context || window;
  // 在context上增加fn属性，指向myCall的调用者（this，也是一个函数）
  context.fn = this;
  // 通过context.fn()形式调用，此时fn中的this为context
  result = context.fn(...args);
  // 移除context上的fn属性
  delete context.fn;
  // 返回执行结果
  return result;
};
