console.log(process.argv);
console.log(process.argv[2]);

//process.env
// console.log(process.env);
console.log(process.env.LOGNAME);
//pid
console.log(process.pid);
//cwd
console.log(process.cwd());
//title
console.log(process.title);
//memoryUsage()
console.log(process.memoryUsage());
//update
console.log(process.uptime());
//listen exit
process.on('exit', (code) => {
    console.log('Process exit event with code:', code);
});
//exit
process.exit(0);
//test
console.log('This will not be printed!');