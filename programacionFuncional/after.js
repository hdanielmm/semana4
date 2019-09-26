
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

const hello = after(2, () => console.log("Hola"));
hello(); // 
hello(); // 
hello(); // 
hello(); // 
hello(); // 
hello(); // "Hola"
