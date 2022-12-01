import * as fsp from 'fs/promises'
import * as fs from 'fs'


const create = async () => {
  try {
    if (fs.existsSync("files/fresh.txt")) {
      throw new Error("FS operation failed");
    }
    await fsp.writeFile("files/fresh.txt", "I am fresh and young");
  } catch(e){
    console.error(e)
  }
};

await create();