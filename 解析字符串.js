let str = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'
function found(str) {
  let n1 = str.indexOf('?')
  n1 = n1 + 1
  let n2 = str.indexOf('#')
  let newStr = str.slice(n1, n2)
  let arr = newStr.split('&')
  return arr.reduce((pre, curr) => {
    // [name,zhangsan]
    // { name:zhangsan }
    const [key, value] = curr.split('=')
    pre[key] = value
    return pre
  }, {})
}
console.log(found(str))

let str1 = 'asdasdadadadasddddsssa'
let arr = str1.split('')
let num = arr.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})
console.log(num)
