const path = require('path');

//this logs what my machine uses to separate paths
console.log(path.sep);

//This joins file paths
const filePath = path.join("/content", 'subfolder', 'test.txt');
console.log(filePath);

//Get base name of a file path
const base = path.basename(filePath);
console.log(base);

//Get the absolute file path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);