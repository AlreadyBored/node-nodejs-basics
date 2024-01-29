import fs from "fs/promises";

const create = async () => {
  let isFileExist = true;

  await fs.readFile("./files/fresh.txt").catch(() => (isFileExist = false));

  if (!isFileExist) fs.appendFile("./files/fresh.txt", "I am fresh and young");
  else throw new Error("FS operation failed");
};

await create();
