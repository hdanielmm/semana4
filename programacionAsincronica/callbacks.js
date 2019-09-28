let readline = require('readline');

let fn = (input, callback) => {
  let n = 2;
  if(true) {
    ('function' == typeof callback) && callback(input, 2);
  }
}

function funcion(parametro, p) {
  console.log(`Esta función imprime el parametro de función ${parametro} y ${p}`);
  
}

fn(4, funcion);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type a four digits number: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(userAnswer(answer));  

  rl.close();
});

function userAnswer(userNumber) {
  return userNumber.split("");
}