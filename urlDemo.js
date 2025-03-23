import url from 'url';

//模拟数据
const urlString = 'https://www.google.com/search?q=node.js';

//url object
const urlObject = new URL(urlString);
console.log(urlObject);

//format
console.log(url.format(urlObject));

//import.meta.url
console.log(import.meta.url);

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search);
const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(params.get('q'));
params.append('limit', '5');
console.log(params.toString());
params.delete('limit');
console.log(params.toString());