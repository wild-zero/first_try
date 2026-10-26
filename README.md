# first_try · 我的第一个网页

一个用来练手的前端小项目：页面中央一张卡片，点一下按钮，文案就变了。
纯 HTML / CSS / JavaScript，**没有框架、没有构建工具、没有依赖**，双击 `index.html` 就能跑。

## 预览

```
┌────────────────────────────┐
│                            │
│        你好,互联网          │
│  这是我的第一个网页，        │
│  现在它有了一点样式。        │
│                            │
│        [ 点我试试 ]         │
│                            │
└────────────────────────────┘
```

点击按钮后，正文会变成「你刚刚触发了一段 JavaScript。」

## 功能

- 卡片居中布局（Flexbox + `100vh` 垂直水平居中）
- 圆角、阴影、按钮 `:hover` 变色过渡
- 原生 DOM 操作：点击按钮修改 `#msg` 的文本
- `index.js` 里是一份 JavaScript 语法练习（未在页面中引用，打开控制台单独看）

## 文件结构

```
first_try/
├── index.html   # 页面结构
├── style.css    # 样式（布局 / 卡片 / 按钮 / hover）
├── script.js    # 按钮交互：changeText()
└── index.js     # JS 语法练习（console 输出）
```

## 运行

**方式一**：直接双击 `index.html`。

**方式二**：起一个本地服务器（推荐，行为更接近真实环境）

```bash
python -m http.server 8000
# 然后浏览器打开 http://localhost:8000
```

## 用到的知识点

| 类别 | 内容 |
|---|---|
| HTML | 文档结构、`<link>` 引入样式、`<script>` 引入脚本、`id` 选择器 |
| CSS | Flexbox 居中、盒模型、`border-radius`、`box-shadow`、`:hover` |
| DOM | `document.getElementById()`、`textContent` |
| 事件 | `onclick` 绑定函数 |
| JS 基础 | `typeof`、`Array.isArray()`、对象属性增改、`JSON.stringify()` |

## 开发记录

- 初始版本：一张静态卡片 + 基础样式
- 加入按钮与 `changeText()` 交互
- 补充 `index.js` 语法练习（数组、对象、JSON）

## License

个人学习项目，随意参考。
