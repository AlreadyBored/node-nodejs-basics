import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const errorText = 'FS operation failed';
const getError = () => { throw new Error(errorText) }
const FiletoRead = path.join(files, 'fileToRead.txt');

const read = async () => {
    try {
        const content = await fsp.readFile(FiletoRead, {encoding: 'utf-8'});
        console.log(content);
      } catch {
        getError();
      }
};

await read();