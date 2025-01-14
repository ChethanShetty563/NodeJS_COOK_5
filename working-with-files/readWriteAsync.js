// const fs = require("fs");
// const path = require("node:path");

// const filePath = path.join(process.cwd(), "hello.txt");
// fs.readFile(filePath, "utf8", (err, contents) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("File Contents:", contents);
//   const upperContents = contents.toUpperCase();
//   fs.writeFileSync(filePath, upperContents);
//   console.log("File updated with the upper case contents!");
// });

const fs = require("node:fs");
const path = require("node:path");
const filepath = path.join(process.cwd(), "hello.txt");
fs.readFile(filepath, "utf8", (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log("File Contents:", contents);
  const upperContents = contents.toUpperCase();
  setTimeout(() => updateFile(filepath, upperContents), 10);
});
function updateFile(filepath, contents) {
  fs.writeFile(filepath, contents, function (err) {
    if (err) throw err;
    console.log("File updated.");
  });
}
setInterval(() => process.stdout.write("**** \n"), 1).unref();