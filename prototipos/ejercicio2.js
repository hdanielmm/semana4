if (!Array.prototype.sum) {
  Array.prototype.sum = function () {
      var sum = 0;
      for (let i = 0; i < this.length; i++) {
          sum += this[i];
      }
      return sum;
  }
}

let arr = [1, 2, 3, 4]
console.log(arr.sum());








