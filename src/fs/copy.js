import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");
const filesCopy = path.join(__dirname, "files_copy");

const errorMessage = 'FS operation failed';
const getFiled = () => { throw new Error(errorMessage) }
const copy = async () => {
  // Write your code here

  try {
    if(!fs.existsSync(files)) getFiled()
    await fsp.mkdir(filesCopy, { recursive: true });
    const dirnets = await fsp.readdir(files, { withFileTypes: true });
    for (const dirnet of dirnets) {
      const copyFrom = path.join(files, dirnet.name)
      const copyTo =   path.join(filesCopy, dirnet.name)
      if(fs.existsSync(copyTo)) getFiled()
      await fsp.copyFile(
        copyFrom,
        copyTo
      );
    }
  } catch (error) {
    console.error(error)
  }
};

await copy();
