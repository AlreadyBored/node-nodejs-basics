import { existsSync } from 'node:fs';
import { rename as renameAsync } from 'node:fs/promises'

const rename = async () => {
    // Write your code here
  const __basicsDir = new URL(".", import.meta.url).pathname;
  const targetFile = `${__basicsDir}files_copy/wrongFilename.txt`;
  const resultFile =  `${__basicsDir}files_copy/wrongFilename.md`
  
  try {
    if (!existsSync(targetFile) || existsSync(resultFile)) throw Error('FS operation failed');

    await renameAsync(targetFile, resultFile);
  } catch (e) {
    console.error(e);
  }
};

await rename();