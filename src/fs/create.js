import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile, stat } from 'fs/promises';

const dirName = fileURLToPath(path.dirname(import.meta.url));
const filePath = path.join(dirName, "files", "fresh.txt");
const fileExistErrorMsg = "FS operation failed"

const create = async () => {
  try {
    const statObject = await stat(filePath);
    throw Error(fileExistErrorMsg);
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await writeFile(filePath, "I am fresh and young", 'utf-8');
      }
      catch (error) {
        console.error(`${error} should NOT have happened`);
      }
    } else if (error.message = fileExistErrorMsg) {
      throw error; //rethrowing error out of the function
    }
    else {
      console.error(`${error} should NOT have happened`);
    }
  }
};

// try {
//   await create();
// } catch (error) {
//   console.log(`outside catch: ${error}`);
// }
await create();