import fs from "fs/promises";

const list = async () => {
  let isFolderExists = true;

  await fs.access("./files").catch(() => (isFolderExists = false));

  if (!isFolderExists) throw new Error("FS operation failed");

  await fs.readdir("./files").then((data) => console.log(data));
};

await list();
