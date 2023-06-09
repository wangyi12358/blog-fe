## 前端代码规范
首先前端写代码一定要开eslint！！！  
开启eslint在保存的时候会帮我们自动格式化。  
在Typescript中少使用any，能解决就不要用any，不然和写js没啥区别。  

## 命名规范
变量、hooks、function采用小驼峰命名法，列如
```ts
// 变量
const productName = '' // ✅
// 下面是不建议的写法
const product_name = '' // ❎
const ProductName = '' // ❎
const productname = '' // ❎

// hooks
const useHooks = () => {
  
}

// function
function sumValue() {
  
}
```

class、React组件采用大驼峰命名法列如
```tsx
class Person {}

const Component: React.FC = () => {
  return (
    <div>这是一个组件</div>
  )
}
```

不建议大家使用单词缩写命名，列如
```ts
// productName 千万不要使用缩写命名法。
const pn = '' // ❎
```

## React 规范

组件尽量不要超过300行，如果超过说明你的组件可以进行拆分。  
组件里面尽量拆分 `render` , 不要把 `return` 里面的jsx写成一坨。  
不要过多使用 `useState`，如果 `state` 过多说明你可以上状态管理了。
