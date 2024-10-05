import fs from "fs/promises";

const rename = async () => {
  try {
    await fs.access("src/fs/files/wrongFilename.txt", fs.constants.F_OK);
    await fs.rename(
      "src/fs/files/wrongFilename.txt",
      "src/fs/files/properFilename.md"
    );
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
