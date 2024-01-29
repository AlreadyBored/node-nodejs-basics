import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const create = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const newFilePath = path.join(folderPath, "fresh.txt");
  const fileContent = "I am fresh and young inside of the files folder";
  const isExistsSync = fs.existsSync(`${newFilePath}`);
  if (isExistsSync) {
    throw new Error("FS operation failed");
  }
  fs.writeFile(newFilePath, fileContent, function (err) {
    console.log("Saved!");
  });
};

await create();
