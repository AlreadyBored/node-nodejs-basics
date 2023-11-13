import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const sourceFolder = path.resolve("src", "fs", "files");
  const destinationFolder = path.resolve("src", "fs", "files_copy");

  try {
    await fs.access(sourceFolder);

    try {
      await fs.access(destinationFolder);
      throw new Error("FS operation failed");
    } catch (destinationError) {
      if (destinationError.code === "ENOENT") {
        await fs.mkdir(destinationFolder);

        const items = await fs.readdir(sourceFolder);

        for (const item of items) {
          const sourceItemPath = path.join(sourceFolder, item);
          const destinationItemPath = path.join(destinationFolder, item);
          await fs.copyFile(sourceItemPath, destinationItemPath);
        }
      } else {
        throw destinationError;
      }
    }
  } catch (sourceError) {
    if (sourceError.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw sourceError;
    }
  }
};

await copy();
