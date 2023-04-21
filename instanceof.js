function myInstanceof(source, target) {
  if (!["function", "object"].includes(typeof source) || source === null)
    return false;

  if (typeof target !== "function")
    throw new Error(`${target} is not a function`);
  // 等价于proto = source.__proto__
  let proto = Object.getPrototypeOf(source);
  while (proto) {
    if (proto === target.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

function Animal(name) {
  this.name = name;
}
const cat = new Animal("cat");
const dog = new Animal("dog");
// 测试一下上面的例子
console.log(myInstanceof(cat, Animal)); // true
console.log(myInstanceof(cat, Object)); // true
console.log(myInstanceof(cat, Function)); // false
console.log(myInstanceof(cat, dog)); // Uncaught TypeError: [object Object] is not a function
