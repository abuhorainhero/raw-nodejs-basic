const path = require('path');

const myCurrentPath = 'C:/Web Development/You Tube Learn/Learn with Sumit/NodeJS/basic nodejs/path.js';

console.log(path.basename(myCurrentPath));
console.log(path.delimiter);
console.log(path.dirname(myCurrentPath));
console.log(path.extname(myCurrentPath));
console.log(path.isAbsolute(myCurrentPath));
console.log(path.join(`${myCurrentPath}/`));
console.log(path.normalize(myCurrentPath));
console.log(path.parse(myCurrentPath));
console.log(path.resolve(myCurrentPath));
console.log(path.win32);
