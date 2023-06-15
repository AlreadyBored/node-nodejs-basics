import fs from "fs"
import fsPromises from "fs/promises"

const create = async () => {
  const filepath = './src/fs/files/fresh.txt'

  if (!fs.existsSync(filepath)) {
    fsPromises.appendFile(filepath, 'I am fresh and young');
  } else {
    throw new Error("FS operation failed")
  }

};

await create();
