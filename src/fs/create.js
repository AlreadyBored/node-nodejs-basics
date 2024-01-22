import fs from "node:fs/promises";
import path from "node:path";

const create = async () => {
  const folderPath = "src/fs/files";
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";
  const filePath = path.join(folderPath, fileName);

  try {
    // Check if the file already exists
    await fs.access(filePath);
    throw new Error("File already exists");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(folderPath, { recursive: true });
      await fs.writeFile(filePath, fileContent);
      console.log("File created successful!");
    } else {
      console.log(`error => ${error}`);
    }
  }
};

await create();
