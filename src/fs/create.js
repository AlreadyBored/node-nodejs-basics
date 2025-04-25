import fs from "fs/promises";
import path from "path";

const create = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "./files/fresh.txt");
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
