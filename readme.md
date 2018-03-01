## 组件名称： js-component-tab
## 组件功能
实现在父容器下点击序列标签页可切换展示对应的面板
## 组件实现方式
- 构造Tab函数，把传入参数（目标dom节点）转化为jQuery对象。
- 在Tab的prototype属性上添加实现方法： 在传入参数下找到对应子元素绑定点击事件，利用切换被点击的子元素的class实现tab的切换。

## 如何使用
通过new一个Tab函数，传入参数为需要实现tab切换功能的DOM节点。

[DEMO预览地址](https://lin-ya.github.io/js-component-tab/sample.html)