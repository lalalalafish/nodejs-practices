import path from 'path';
import url from 'url';

//模拟数据
const filePath = './dir1/dir2/file.txt';

//basename()返回路径的最后一部分
console.log(path.basename(filePath));

//dirname()返回路径的目录名
console.log(path.dirname(filePath));

//extname()返回路径的扩展名
console.log(path.extname(filePath));

//parse()
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

//join()
console.log(path.join(__dirname, 'dir1', 'dir2', 'file.txt'));

//resolve()
console.log(path.resolve(__dirname, 'dir1', 'dir2', 'file.txt'));