import fs from "fs/promises";
import path from "path";

const copy = async () => {
  // Write your code here
  const sourceDir = path.resolve("./src/fs/files");
  const destDir = path.resolve("./src/fs/files_copy");
  try {
    await fs.access(sourceDir);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  try {
    await fs.access(destDir);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      // Variant #1
      // await fs.mkdir(destDir);

      // const files = await fs.readdir(sourceDir));

      // files.forEach((fileName) => {
      //   const source = sourceDir + "/" + fileName;
      //   const dest = destDir + "/" + fileName;
      //   fs.copyFile(source, dest);
      // });

      // Variant #2
      await fs.cp(sourceDir, destDir, { recursive: true });
    } else {
      throw error;
    }
  }
};

await copy();
