# components demo

2015-12-26 《Modern Web Develop》demo

使用NPM + Webpack + ES6 + CSS Modules实现简单的组件封装

## 使用说明：

打开`examples/index.html`即可看到效果。

如果要自行修改，请在修改后再次编译。编译前提条件：

- 全局安装webpack
- 项目目录进行`npm install`安装依赖

编译：

```sh
webpack index.js bundle.js
```

## 文件说明：

- `examples` 示例
	- `index.html` 示例入口文件
- `package.json` 主要用于声明依赖关系
- `index.js` 入口文件
- `webpack.config.js` webpack配置文件，声明使用babel-loader编译ES6代码
- `component.js` 组件（入口）
- `component.css` 组件样式
- `inputTmpl.html` 输入框模板
- `dropdownTmpl.html` 下拉部分模板
- `bundle.js` 编译后的入口文件，由`index.js`编译而来
