const {readFileSync, writeFileSync } = require('fs');


const file1 = readFileSync('./content/first.txt', 'utf-8');
const file2 = readFileSync('./content/second.txt', 'utf-8');
// const file3 = readFileSync('./conent/result_sync.txt', 'utf-8');

// console.log(file1, file2);

writeFileSync('./content/result_sync.txt', `Here is the result ${file1}, ${file2}`, {flag:'a'});
writeFileSync('./content/file4.txt', `Here is file number 4 \n ${file2}`);
