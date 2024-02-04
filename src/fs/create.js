import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const create = async () => {
  // Write your code here
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, "files");
    const newFilePath = path.join(folderPath, "fresh.txt");
    const fileContent = "I am fresh and young inside of the files folder";
    await fs.writeFile(newFilePath, fileContent, {flag: "wx"});
  } catch (e) {
    throw new Error("Fs operation failed");
  }
};

await create();
