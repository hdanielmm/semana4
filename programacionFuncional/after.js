
const after = (num, fn) => {
  let count = num;
  return () => {
    // count > 0 ? count-- : fn();
    if (count > 0) {
      count-- ;
      console.log("--");
    } else {
      count = num;
      return fn();
    }
  }
}

const hello = after(5, () => console.log("Hola"));
console.log(hello);

hello(); // 
hello(); // 
hello(); // 
hello(); // 
hello(); // 
hello(); // "Hola"
