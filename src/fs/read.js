import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

const read = async () => {
    // Write your code here
  const targetFile = `${new URL(".", import.meta.url).pathname}files/fileToRead.txt`;

  try {
    if (!existsSync(targetFile)) throw Error('FS operation failed');
    const content = await readFile(targetFile, { encoding: 'utf8' });
    console.log(content);
  } catch (e) {
    console.error(e.message);
  }
};

await read();