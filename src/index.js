module.exports = function check(str, bracketsConfig) {

  const singleTagBrackets = []
  const doubleTagBrackets = []

  bracketsConfig.forEach(item => {
    item[0] === item[1] ? 
    singleTagBrackets.push(item.join('')) : 
    doubleTagBrackets.push(item.join(''))
  });

  const bracketsReducer = function(string) {
    let startLen = string.length
    doubleTagBrackets.forEach(item => {
      string = string.replace(item, '')
    })
    singleTagBrackets.forEach(item => {
      string = string.replace(item, '')
    })
    let endLen = string.length
    if (startLen !== endLen) {
      return bracketsReducer(string)
    } else if (endLen === 0) {
      return true
    } else {
      return false
    }
  }
  return bracketsReducer(str)
}

