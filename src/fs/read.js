import fs from "fs";

const read = async () => {
  // Write your code here
  if (fs.existsSync("./files/fileToRead.txt")) {
    const content = fs.readFileSync("./files/fileToRead.txt", "utf-8");
    console.log(content);
  } else {
      throw new Error('FS operation failed');
  }
};

await read();
