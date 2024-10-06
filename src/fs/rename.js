import { access, rename as renameFile, constants } from "node:fs/promises";

const rename = async () => {
  try {
    await access("src/fs/files/wrongFilename.txt", constants.F_OK);
    try {
      await access("src/fs/files/properFilename.md", constants.F_OK);
      throw new Error();
    } catch {
      await renameFile(
        "src/fs/files/wrongFilename.txt",
        "src/fs/files/properFilename.md"
      );
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
