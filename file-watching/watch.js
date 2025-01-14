const fs = require("node:fs");
const path = require("node:path");

const file = path.join(process.cwd(), "file.txt");

fs.watchFile(file, (current, previous) => {
  return console.log(`${file} updated
      ${current.mtime}`);
});
