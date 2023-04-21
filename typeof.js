function myTypeof(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
console.log(myTypeof(3)); // 'number'
console.log(myTypeof("123")); // 'number'
console.log(myTypeof(undefined)); // 'number'
console.log(myTypeof(null)); // 'number'
console.log(myTypeof([])); // 'array'
console.log(myTypeof({})); // 'object'
console.log(myTypeof(new Date())); // 'date'
