/* eslint max-lines: off */

/**
 * 1. for-direction
 * 强制 “for” 循环中计数器朝着正确的方向移动
 */
// for (var i = 0; i < 10; i--) {}

/**
 * 2. getter-return
 * 强制在 getter 属性中出现一个 return 语句
 */
// const obj = {
//     get Name() {}
// }

/**
 * 3. no-async-promise-executor
 * 禁止使用异步函数作为 Promise executor
 */
// new Promise(async () => null);

/**
 * 4. no-compare-neg-zero
 * 禁止与 -0 进行比较
 */
// 0 === -0

/**
 * 5. no-cond-assign
 * 禁止与 -0 进行比较
 */
// if (a = 1) {}

/**
 * 6. no-console
 * 禁用 console
 */
// console.log('warning');

/**
 * 7. no-constant-condition
 * 禁止在条件中使用常量表达式
 */
// if (true) {}

/**
 * 8. no-debugger
 * 禁用 debugger
 */
// debugger;

/**
 * 9. no-dupe-keys
 * 禁止在对象字面量中出现重复的键
 */
// const obj = {
//     name: 'no-dupe-keys',
//     'name': 'no-dupe-keys'
// }

/**
 * 10. no-duplicate-case
 * 禁止重复 case 标签
 */
// switch (a) {
//     case 1:
//         break;
//     case 1:         
//         break;
// }

/**
 * 11. no-empty
 * 禁止空块语句
 */
// if (foo) {}
// while (foo) {}
// switch(foo) {}
// try {} catch(ex) {} finally {}

/**
 * 12. no-func-assign
 * 禁止对 function 声明重新赋值
 */
// function foo() {}
// foo = 1;

/**
 * 13. no-inner-declarations
 * 禁止在嵌套的语句块中出现function 声明
 */
// if (test) {
//     function doSomethingElse () {}
// }

/**
 * 14. no-implicit-coercion
 * 禁止使用短符号进行类型转换
 */
// const s = '' + foo;

/**
 * 15. no-lone-blocks
 * 禁用不必要的嵌套块
 */
// { 
//     var a = 10
// }
// function bar() {
//     {
//         baz();
//     }
// }

/**
 * 16. no-magic-numbers
 * 禁止使用魔术数字
 */
// 60 * 60 * 1000

/**
 * 17. no-new-wrappers
 * 禁止原始包装实例
 */
// new String("Hello world")

/**
 * 18. no-param-reassign
 * 禁止对函数参数再赋值
 */
// function foo(bar) {
//     bar = 13;
// }

/**
 * 19. no-proto
 * 禁用__proto__
 */
// obj.__proto__;

/**
 * 20. no-redeclare
 * 禁止重新声明变量
 */
// var a = 3;
// var a = 10;

/**
 * 21. no-script-url
 * 禁用 Script URL
 */
// location.href = "javascript:alert(1)";

/**
 * 22. no-throw-literal
 * 限制可以被抛出的异常
 */
// throw 'null';

/**
 * 23. no-useless-call
 * 禁用不必要的 .call() 和 .apply()
 */
// foo.call(null, 1, 2, 3);

/**
 * 24. no-useless-escape
 * 禁用不必要的转义
 */
// /\a/;

/**
 * 25. no-warning-comments
 * 禁用警告注释 todo fix
 */

/**
 * 26. prefer-named-capture-group
 * 建议在正则表达式中使用命名捕获组
 */
// /(ba[rz])/;

/**
 * 27. prefer-promise-reject-errors
 * 要求使用 Error 对象作为 Promise 拒绝的原因
 */
// Promise.reject(null)

/**
 * 28. require-await
 * 禁止使用不带 await 表达式的 async 函数
 */
//  async() => null

/**
 * 29. require-unicode-regexp
 * 强制在 RegExp 上使用 u 标志
 */
// /abc/
// new RegExp('abc')

/**
 * 30. yoda
 * 强制分支判断 变量在前
 */
// if ('red' === red) null

/**
 * 31. no-shadow
 * 禁止变量声明覆盖外层作用域的变量
 */
// var a = 3;
// function b() {
//     var a = 10;
// }

/**
 * 32. no-unused-vars
 * 禁止未使用过的变量
 */
// var x;

/**
 * 33. no-use-before-define
 * 禁止定义前使用
 */
// alert(a);
// var a = 10;

/**
 * 34. camelcase
 * 要求使用骆驼拼写法
 */
// my_favorite_color;

/**
 * 35. consistent
 * 要求使用骆驼拼写法
 */
// that = this;

/**
 * 36. line-comment-position
 * 强制行注释的位置 above
 */

/**
 * 37. max-depth
 * 强制块语句的最大可嵌套深度
 */
// function foo() {
//     if (a === '1') { 
//         if (a === '2') {
//             if (a === '3') {
//                 if (a === '4') {
//                     if (a === '5') {}
//                 }
//             }
//         }
//     }
// }

/**
 * 38. max-lines                300
 * 强制文件的最大行数       
 */

/**
 * 39. max-lines-per-function   30
 * 强制函数最大行数
 */

/**
 * 40. max-statements-per-line  1
 * 强制每一行中所允许的最大语句数量 
 */
// var bar; var baz;

/**
 * 41. new-cap  
 * 要求构造函数首字母大写
 */
// new person();

/**
 * 42. new-cap  
 * 要求构造函数首字母大写
 */
// new person();

/**
 * 43. no-mixed-operators
 * 禁止混合使用不同的操作符
 */
// true || true && false

/**
 * 44. constructor-super
 * 验证构造函数中 super() 的调用
 */
// class A {
//     constructor() {
//         // super(); 
//     }
// }
// class B extends A {
//     constructor() {}  
// }

/**
 * 45. prefer-rest-params
 * 建议使用剩余参数代替 arguments
 */
// function foo() {
//     arguments;
// }
