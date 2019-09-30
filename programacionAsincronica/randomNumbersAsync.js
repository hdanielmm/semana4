// Random names async

const faker = require('faker');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let getNumberOfNames = new Promise((resolve, reject) => {
  rl.question('How many names would you like to generate? ', (answer) => {
    if (answer) {
      resolve(answer);
    } else {
      reject("Some error ocurred");
    }
    rl.close();
  });
});

const getFileName = new Promise((resolve, reject) => {
  rl.question("Enter a file name: ", answer => {
    if (answer) {
      resolve(answer + ".txt");
    } else {
      reject("An error has ocurred");
    }
    // rl.close();
  });
});


Promise.all([getNumberOfNames, getFileName])
  .then(values => {
    console.log(values);

    for (let i = 0; i < values.getNumberOfNames; i++) {
      fs.writeFile(values.getNumberOfNames, faker.name.firstName() + "\n", { flag: "a" }, err => {
        if (err) throw err;
        console.log("The file has been saved");
      });
    }
    rl.close();
  }).catch(error => {
    console.log(error);

  });
 /*************************************** */

 const faker = require('faker');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ask = question => {
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      if (answer) {
        resolve(answer);
      } else {
        reject("Some error ocurred");
      }
    });
  });
}

let writeFile = (fileName, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, err => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
}

let numNames, fileName;
ask('How many names would you like to generate? ')
  .then(ans => {
    numNames = ans;
    return ask("Enter a file name: ");
  }).then((ans) => {
    fileName = ans;
    const names = [];
    for (let i = 0; i < numNames; i++) {
      names.push(faker.name.firstName());
    }
    return names;
  }).then(names => {
    return writeFile(fileName, names.join("\n"));
  }).then(() => {
    console.log("Archivo generado");
    rl.close();
  }).catch(err => {
    console.log("Ocurrió un error: " + err);
  });