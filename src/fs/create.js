import fs from "fs/promises";

const create = async () => {
  try {
    await fs.access("./src/fs/files/fresh.txt");
    console.error(new Error("FS operation failed"));
  } catch (error) {
    fs.appendFile("./src/fs/files/fresh.txt", "I am fresh and young");
  }
};

await create();
