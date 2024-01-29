import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const rename = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const wrongFileName = path.join(folderPath, "wrongFilename.txt");
  const properFilename = path.join(folderPath, "extension.md");
  if (!fs.existsSync(wrongFileName) || fs.existsSync(properFilename)) {
    throw new Error(
      "FS operation failed: No such file or wrong filename has already been replaced"
    );
  } else {
    fs.renameSync(wrongFileName, properFilename);
    console.log("File renamed.", properFilename);
  }
};

await rename();
