import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const read = async () => {
    try {
      const filePath = resolve("src/fs/files/fileToRead.txt")
      const content = await readFile(filePath, { encoding: 'utf8' })
      console.log(content)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();