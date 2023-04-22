{
  /* <img data-src="http://xx.xxx">test</img> */
}

// imgList为所有img（需要懒加载的img元素）
let imgList = [...document.querySelectorAll(img)];
let length = imgList.length;

const imgLazyLoad = (function () {
  // 记录已完成懒加载的图片数
  let count = 0;
  return function () {
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      // 判断是否在视口内
      if (rect.top < window.innerHeight) {
        // 获取dataset中的src，并设置src
        img.src = img.dataset.src;
        // 记录id
        deleteIndexList.push(index);
        // 更新完成懒加载图片数
        count++;
        if (count === length) {
          // 所有图片完成懒加载，移除document上scroll事件的监听
          document.removeEventListener("scroll", imgLazyLoad);
        }
      }
    });
    // 更新需要懒加载的图片元素
    imgList.filter((img, index) => !deleteIndexList.includes(index));
  };
})();

// 添加对document的scroll事件的监听
document.addEventListener("scroll", imgLazyLoad);
