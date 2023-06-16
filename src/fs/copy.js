import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const sourceFolderPath = "./files";
  const targetFolderPath = "./files_copy";

  try {
    // Check if the source folder exists
    const sourceFolderStats = await fs.stat(sourceFolderPath);
    if (!sourceFolderStats.isDirectory()) {
      throw new Error("Source folder is not a directory");
    }
  } catch (error) {
    throw new Error("Source folder does not exist");
  }

  try {
    // Check if the target folder already exists
    await fs.access(targetFolderPath);
    throw new Error("Target folder already exists");
  } catch (error) {
    // Create the target folder
    await fs.mkdir(targetFolderPath);
  }

  // Get all files and directories in the source folder
  const files = await fs.readdir(sourceFolderPath);

  // Copy each file/directory to the target folder
  for (const file of files) {
    const sourcePath = path.join(sourceFolderPath, file);
    const targetPath = path.join(targetFolderPath, file);

    try {
      const stats = await fs.stat(sourcePath);
      if (stats.isDirectory()) {
        // Recursively copy subdirectories
        await copyFolderWithContents(sourcePath, targetPath);
      } else {
        // Copy individual files
        await fs.copyFile(sourcePath, targetPath);
      }
    } catch (error) {
      console.error(`Error copying ${file}: ${error.message}`);
    }
  }
};

const copyFolderWithContents = async (sourceFolderPath, targetFolderPath) => {
  // Create the target folder for the subdirectory
  await fs.mkdir(targetFolderPath);

  // Get all files and directories in the subdirectory
  const files = await fs.readdir(sourceFolderPath);

  // Copy each file/directory to the target folder
  for (const file of files) {
    const sourcePath = path.join(sourceFolderPath, file);
    const targetPath = path.join(targetFolderPath, file);

    try {
      const stats = await fs.stat(sourcePath);
      if (stats.isDirectory()) {
        // Recursively copy subdirectories
        await copyFolderWithContents(sourcePath, targetPath);
      } else {
        // Copy individual files
        await fs.copyFile(sourcePath, targetPath);
      }
    } catch (error) {
      console.error(`Error copying ${file}: ${error.message}`);
    }
  }
};

await copy();
