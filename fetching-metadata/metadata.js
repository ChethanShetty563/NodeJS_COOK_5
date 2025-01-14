const fs = require("node:fs");

const file = process.argv[2];

function printMetadata(file) {
  const filestats = fs.statSync(file);
  console.log(filestats);
}

printMetadata(file);
