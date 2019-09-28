// Random names with readLineSync

const readlineSync = require('readline-sync');
const faker = require('faker');
const fs = require('fs');

const numberNames = readlineSync.question('\nHow many names would you like to generate? ');
const fileName = readlineSync.question('Please enter a file name: ');


for (let i = 0; i < numberNames; i++) {
  fs.writeFileSync(fileName + '.txt', faker.name.firstName() + '\n', { flag: 'a' });
}
console.log('File text ' + fileName + '.txt was generated with ' + numberNames + ' names!\n');

