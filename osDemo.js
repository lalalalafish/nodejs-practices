import os from 'os';

//userInfo()
console.log(os.userInfo().username);

//totalmem(): 总共内存
console.log(os.totalmem());

//freemem(): 空闲内存
console.log(os.freemem());

//cpus(): cpu信息
console.log(os.cpus());