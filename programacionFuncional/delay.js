const delay = (fn, n) => {
  setTimeout(fn, n); 
}

delay(() => console.log("Hola"), 3000); // "Hola" after 3 seconds

// function greet(){
//   console.log("hola");
// }
// delay(greet, 3000)