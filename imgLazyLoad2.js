{
  /* <img data-src="http://xx.xxx">test</img> */
}

// imgList为所有img（需要懒加载的img元素）
let imgList = [...document.querySelectorAll(img)];

let lazyLoad = function () {
  // 创建观察者实例，传入回调函数
  // entries是交叉状态
  let observer = new IntersectionObserver((entries) => {
    // 遍历entries
    entries.forEach((entry) => {
      // 若交叉比例大于0（出现在视口内）
      if (entry.intersectionRatio > 0) {
        // 修改entry.target的src
        entry.target.src = entry.target.dataset.src;
        // 取消该元素的观察
        observer.unobserve(entry.target);
      }
    });
  });
  // 遍历图片列表，执行观察操作
  imgList.forEach((img) => observer.observe(img));
};
