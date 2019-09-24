// 4. Agregarle un método llamado formatCurrency a los números (Number) que devuelva el 
// número con formato de moneda $xx,xxx,xxx.yy.

if (!Number.prototype.formatCurrency) {
  Number.prototype.formatCurrency = function () {
    let str = this.toFixed(2).toString()
    if (Math.abs(this) < 1000) {
      return '$' + str
    }

    str = str.split('')
    str.splice(str.length - 6, 0, ',')
    str = str.join('')
    if (Math.abs(this) < 1000000) {
      return '$' + str
    }

    str = str.split('')
    str.splice(str.length - 10, 0, ',')
    str = str.join('')
    if (Math.abs(this) < 1000000000) {
      return '$' + str
    }

    str = str.split('')
    str.splice(str.length - 14, 0, ',')
    str = str.join('')
    return '$' + str
  }
}
var num = 4651316546;

console.log(num.formatCurrency());