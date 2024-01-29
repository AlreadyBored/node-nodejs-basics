import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const read = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const fileToRead = path.join(folderPath, "fileToRead.txt");
  if (!fs.existsSync(fileToRead)) {
    throw new Error("File doesn't exist");
  }
  fs.readFile(fileToRead, {encoding: "utf8"}, (error, data) => {
    if (error) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

await read();
