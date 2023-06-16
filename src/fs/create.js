import fs from "fs/promises";
import path from "path";

const create = async () => {
  const folderPath = "files";
  const filePath = path.join(folderPath, "fresh.txt");

  try {
    await fs.access(filePath);
    throw new Error("File already exists.");
  } catch (error) {
    // File does not exist, proceed with creating it
    const fileContent = "I am fresh and young";
    try {
      await fs.writeFile(filePath, fileContent);
      console.log("File created successfully.");
    } catch (error) {
      console.error(`Error creating file: ${error.message}`);
    }
  }
};

await create();
