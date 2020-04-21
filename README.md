# rollup —— 下一代ES模块打包器

## JavaScript 模块化加载方案
1. AMD（require.js）
2. CMD（sea.js）
3. CommonJS（node）
4. ES6 模块

AMD和CMD区别：  
1. AMD推崇依赖前置，CMD推崇依赖就近；
2. 对于依赖的模块，AMD是提前执行（将需要使用的模块先加载完再执行代码），CMD是延迟执行（在require的时候才去加载模块文件，加载完再接着执行）。

CommonJS与AMD：
1. CommonJS规范加载方案是同步的，也就是说只有加载完成才会继续执行后面的操作，AMD规范则是异步加载模块；
2. 由于nodejs主要用于服务器编程，模块文件已存在于本地磁盘，加载起来快，不需要考虑异步加载，因此CommonJS规范比较使用，但是，浏览器环境需要从服务器加载模块，这时必须采用异步方式，因此浏览器端一般采用AMD规范。

CommonJS和ES6的区别：
1. CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用；
2. CommonJS模块是运行时加载，ES6模块是编译时输出接口。

babel和webpack处理ES6模块：  
babel将ES6模块语法编译成CommonJS模块语法后，webpack模拟实现了CommonJS并编译。

## What —— 是什么
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。  
Rollup 对代码模块使用ES6模块化加载方案，而不是以前的特殊解决方案，如 CommonJS 和 AMD。  
ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用的独立函数，而你的项目不必携带其他未使用的代码。  
> 取自rollup官网

### 都有哪些开源库在用：
Angular  
React  
Vue  
immutable.js  
D3  
...


## Why —— 为什么要用

## How —— 怎么用
