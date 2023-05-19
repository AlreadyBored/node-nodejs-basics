import { access, readdir } from "node:fs/promises";
const projectFolder = new URL("./files/", import.meta.url);

const list = async () => {
  // Write your code here
  try {
    await access(projectFolder);
    const files = await readdir(projectFolder, { withFileTypes: true });
    for (const file of files) {
      console.log(`\x1B[34m${file.name}\u001B[0m`);
    }
  } catch (err) {
    throw Error(`\u001B[31mFS operation failed\u001B[0m ${err.message}`);
  }
};

await list();
