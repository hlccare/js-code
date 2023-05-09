// 发布订阅

const eventHub = {
  map: {},
  // 订阅事件
  on: (event, fn) => {
    eventHub.map[event] = eventHub.map[event] || [];
    eventHub.map[event].push(fn);
  },
  // 取消订阅事件
  off: (event, fn) => {
    const q = eventHub.map[event];
    if (!q) return;
    // 此处targetFn用于处理once的回调函数
    const index = q.findIndex((item) => item === fn || item.targetFn === fn);
    if (index < 0) {
      return;
    }
    q.splice(index, 1);
  },
  // 发布事件
  emit: (event, ...args) => {
    const q = eventHub.map[event];
    if (!q) return;
    q.map((fn) => fn.call(null, ...args));
    return undefined;
  },
  // 订阅事件，回调只执行一次
  once: (event, fn) => {
    const on = (...args) => {
      eventHub.off(event, fn);
      fn.call(null, ...args);
    };
    // 用于在off时，判断是否为原有的回调函数
    on.targetFn = fn;
    eventHub.on(event, on);
  },
};

eventHub.on("click", console.log);
eventHub.on("click", console.error);
const logReverse = (s) => console.log(s.split("").reverse().join(""));
eventHub.once("click", logReverse);

setTimeout(() => {
  eventHub.emit("click", "123");
}, 3000);

setTimeout(() => {
  eventHub.emit("click", "456");
}, 4000);
