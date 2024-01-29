import { unlink } from "node:fs";

const remove = async () => {
  unlink("src/fs/files/fileToRemove.txt", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
