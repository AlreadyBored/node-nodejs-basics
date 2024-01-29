import fs from "fs";

const rename = async () => {
  // Write your code here
  if (
    !fs.existsSync("./files/wrongFilename.txt") ||
    fs.existsSync("./files/properFilename.md")
  ) {
    throw new Error("FS operation failed");
  } else {
    fs.renameSync("./files/wrongFilename.txt", "./files/properFilename.md");
  }
};

await rename();
