// 首先创一个新的空对象。
// 根据原型链，设置空对象的 __proto__ 为构造函数的 prototype 。
// 构造函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）。
// 判断函数的返回值类型，如果是引用类型，就返回这个引用类型的对象。

/**
 *
 * @param {function} context 构造函数
 * @returns object
 */
function myNew(context) {
  // 创建一个空的新对象
  const obj = new Object();
  // 处理新对象的原型
  obj.__proto__ = context.prototype;
  // 指定obj为构造函数的this，执行构造函数
  // slice(1)忽略context
  const res = context.apply(obj, [...arguments].slice(1));
  // 根据构造函数返回结果的类型，决定返回obj还是构造函数返回内容
  // 如果构造函数返回的是一个对象，则直接返回该对象，否则返回obj
  return typeof res === "object" ? res : obj;
}
