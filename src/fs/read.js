import * as fsp from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const errorMessage = 'FS operation failed';
const getFiled = () => { throw new Error(errorMessage) }
const readFile = path.join(files, 'fileToRead.txt');

const read = async () => {
    // Write your code here
    try {
      const content = await fsp.readFile(readFile, {encoding: 'utf-8'});
      console.log(content);
    } catch {
      getFiled();
    }
};

await read();