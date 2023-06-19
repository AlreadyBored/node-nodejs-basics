import fs from "node:fs/promises";

const create = async () => {
  try {
    const stats = await fs.stat("./src/fs/files/fresh.txt") 
    
    if (stats) {
      throw Error("File already exists");
    } else {
      await fs.writeFile("./src/fs/files/fresh.txt", "I am fresh");
    }
  } catch (_) {}
};

await create();
