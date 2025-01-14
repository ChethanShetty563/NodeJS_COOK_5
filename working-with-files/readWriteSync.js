const fs = require("fs");
const path = require("node:path");

const filePath = path.join(process.cwd(), "hello.txt");

const contents = fs.readFileSync(filePath, 'utf8');
console.log("File Contents:", contents);

const upperContents = contents.toUpperCase();

fs.writeFileSync(filePath, upperContents);

console.log("File updated with the upper case contents!");
