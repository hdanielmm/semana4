// Picas y Fijas

const readline = require('readline');

const start = () => {
  const generatedNumber = generateNumber();
  askQuestion(generatedNumber);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateNumber() {
  const number = [];
  let random = 0;
  while (number.length < 4) {
    random = Math.floor(Math.random() * 10).toString()
    if(number.indexOf(random) == -1){
      number.push(random);
    }
  }
  return number;
}

function userNumber(number) {
  return number.split("");
}

const askQuestion = (number) => {
  rl.question('\nType a four digits number: ', (answer) => {

    if (winner(userNumber(answer), number, compareNumbers)) {
      console.log("You won!!!\n");
      rl.close();
    }
  });
}

const winner = (userNumber, generatedNumber, callback) => {
  const [picas, fijas] = callback(userNumber, generatedNumber);
  console.log(`Picas: ${picas}, Fijas: ${fijas} `);
  if (fijas === 4) {
    return true;
  }
  askQuestion(generatedNumber);
}

const compareNumbers = (userNumber, generatedNumber) => {
  let fijas = 0;
  let picas = 0;
  // console.log(generatedNumber.join(""));
  
  for (let i = 0; i < userNumber.length; i++) {
    if (generatedNumber.includes(userNumber[i])) {
      if (userNumber[i] === generatedNumber[i]) {
        fijas += 1;
      } else {
        picas += 1;
      }
    }
  }
  return [picas, fijas];
}

start();