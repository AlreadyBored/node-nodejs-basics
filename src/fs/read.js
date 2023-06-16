import { promises as fs } from "fs";
import { fileExists, getDirName } from "../utils/utils.js";

const read = async () => {
  const path = getDirName(import.meta.url) + "/files/fileToRead.txt";
  const exists = await fileExists(path);

  try {
    if(exists) {
        const data = await fs.readFile(path, {encoding: 'utf-8'})
        console.log(data);
    } else {
        throw new Error("FS operation failed");
    }
  } catch(err){
    console.log(err)
  }
};

await read();
