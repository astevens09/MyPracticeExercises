//Built in node modules DO NO NEED TO BE DOWNLOADED!!
//Node modules can just be 'required'

//This require the 'os' module from Nodejs
//You do not need to add './' in front of Node modules
const os = require('os');


const user = os.userInfo();
console.log(user);

//Method return info about the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOs);