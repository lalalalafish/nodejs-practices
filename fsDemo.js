// import fs from 'fs';
import fs from 'fs/promises'

// //fs:
// //readFile()-callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// //readFileSync()-sync
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//readFiles()-promise.then()
// fs.readFile('./test.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//readFiles()-async/await
const readFile = async () => {
    try{
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
}




const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World!');
        console.log('File written to...');
    } catch (err) {
        console.log(err);
    }
}

// writeFile();
// readFile();

const appendFile = async () => {
    try{
        await fs.appendFile('./test.txt', 'This is the appended text');
        console.log('File appended to...');
    }catch(err){
        console.log(err);
    }
};
appendFile();
readFile();