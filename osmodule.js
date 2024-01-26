const os=require('os');
const path = require("path");
const fs = require("fs");
const url = require("node:url");




const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

// console.log(os.freemem());
// console.log("os,come",os.homedir());
// console.log("HostName",os.hostname());
// console.log("HostName",os.platform());
// console.log("HostName",os.release());
// console.log("HostName",os.totalmem());
// console.log("HostName",os.networkInterfaces());
// console.log("HostName", path.basename("/home/me/Desktop/nodejs/package.json"));
// console.log("HostName", path.dirname("/home/me/Desktop/nodejs/package.json"));
// console.log("ex", path.extname(__filename));


// fs.readFile("file.txt", "utf8", (error, data) => {
//   console.log(error, data);
// });


const file=fs.readFileSync('file.txt')



console.log(`hellow`,file.toString())