import { cp } from "fs/promises";

const copy = async () => {
  try {
    await cp("src/fs/files", "src/fs/files_copy", {
      errorOnExist: true,
      recursive: true,
      force: false,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
