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

// let generateNames = () => {
//   getNumberOfNames
//     .then(response => {
//       for (let i = 0; i < response; i++) {
//         fs.writeFile("text.txt", faker.name.firstName() + "\n", { flag: "a" }, err => {
//           if (err) throw err;
//           console.log("The file has been saved");
//         });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }


// generateNames();

// askQuestion
//   .then(res => {
//     console.log(res);
//   })
//   .then(res => {
//     console.log("do this after first then" );
//     rl.question()
//   })
//   .catch(error => {
//     console.log(error);
//   });

// let writeFile = new Promise((resolve, reject) => {
//   let name = "file.txt";
//   if(name) {
//     resolve(() => {
//       fs.writeFile(name);
//     });
//   }
// });

// writeFile
// .then(response => {
//   console.log("nombre del archivo:", response);

// });




/***************************
 let numNames, fileName;
ask("¿Cuántas nombres quieres generar?")
  .then(answer => {
    numNames = answer;
    return ask("El nombre del archivo: ");
  }).then(answer => {
    fileName = answer;

    // generar los nombres
    names = ....
    return saveFile(fileName, names);
  }).then(() => {
    console.log("Finalizó");
  }).catch(err => {
    console.log(err.message);
  });

*/









/*
const numberNames = readlineSync.question('\nHow many names would you like to generate? ');
const fileName = readlineSync.question('Please enter a file name: ');


for (let i = 0; i < numberNames; i++) {
  fs.writeFileSync(fileName + '.txt', faker.name.firstName() + '\n', { flag: 'a' });
}
console.log('File text ' + fileName + '.txt was generated with ' + numberNames + ' names!\n');

*/