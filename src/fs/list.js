import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const list = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  if (!fs.existsSync(folderPath)) {
    throw new Error("FS operation failed");
  }
  const filenames = fs.readdirSync(folderPath, {withFileTypes: true});
  filenames.forEach((file) => {
    console.log(file.name);
  });
};

await list();
