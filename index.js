// console.log("Hello, World!");
// // console.log(window);//Dosn't work in Node.js. Window is for browser only.
// console.log(global);//Works in Node.js.
// // console.log(document);//Dosn't work in Node.js. Document is for browser only.
// console.log(process);//Works in Node.js.


// const {generateRandomNumber, celciusToFahrenheit }= require('./utils');
// console.log('generateRandomNumber: ' +  generateRandomNumber());
// console.log('celciusToFahrenheit: '+celciusToFahrenheit(0));


import getPosts, {getPostLength} from './postController.js';
console.log(getPosts());
console.log('getPostLength: '+getPostLength());