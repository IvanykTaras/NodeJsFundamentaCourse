const os = require('os');
const process = require('process');
const cluster = require('node:cluster');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);


const cpus = os.cpus();

if(cluster.isPrimary) {
    for (let i = 0; i < cpus.length - 2; i++) {
        // const CPUcore = cpus[i];    
        // console.log(`CPU ${i+1}`);
        cluster.fork();
    }
}else{
   
    setInterval(() => {
        console.log(`Worker pid: ${process.pid} work`);
    }, 500);
}

// console.log(process.pid);
// while(true) {}