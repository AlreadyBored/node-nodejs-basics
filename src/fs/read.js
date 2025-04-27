import { promises } from "fs";
import { join } from "path";

const read = async () => {
    const filePath = join('src', 'fs', 'files', 'fileToRead.txt');
    try {
      const data = await promises.readFile(filePath, 'utf-8');
      console.log(data);
    } catch {
      throw new Error('FS operation failed');
    }
};

await read();
