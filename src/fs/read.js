import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const contents = await readFile("src/fs/files/fileToRead1.txt", { encoding: 'utf8' });
        console.log(contents);
      } catch (err) {
        throw new Error("FS operation failed")
      }
};

await read();