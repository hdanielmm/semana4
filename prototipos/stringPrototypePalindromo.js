
if (!String.prototype.palindromo) {
  String.prototype.palindromo = function () {
    var s1 = this.split("").reverse().filter(function (str) {
      return /\S/.test(str);
    }).join("");
    
    var s2 = this.split("").filter(function (str) {
      return /\S/.test(str);
    }).join("");
    
    return s1 === s2 ? true : false;
  }
}

var s = "anita lava la tina";
console.log(s.palindromo());