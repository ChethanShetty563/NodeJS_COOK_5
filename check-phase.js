setTimeout(() => {
  console.log("Timers phase: setTimeout");
}, 0);

setImmediate(() => {
  console.log("Check phase: setImmediate");
});

const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("Poll phase: fs.readFile");
});

console.log("Start of script");