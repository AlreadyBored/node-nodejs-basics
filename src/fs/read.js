import fs from "fs/promises";
import path from "path";

const read = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const fileName = path.resolve(__dirname, "./files/fileToRead.txt");
  try {
    await fs.access(fileName);

    const content = await fs.readFile(fileName, {
      encoding: "utf8",
    });
    console.log(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

await read();
