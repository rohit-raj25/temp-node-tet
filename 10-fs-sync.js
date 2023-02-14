const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//to create a file

writeFileSync(
  "./content/result-sync.txt",
  `here is the rsult : ${first},${second}`,
  //to copy the data again
  { flag: "a" }
);
