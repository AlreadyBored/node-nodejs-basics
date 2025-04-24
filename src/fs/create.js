import fs from "fs/promises";
import path from "path";

const create = async () => {
  // Write your code here
  const fileName = path.resolve("./src/fs/files/fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    await fs.access(fileName);

    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(fileName, fileContent);
    } else {
      throw err;
    }
  }
};

await create();
