import { unlink, access } from "node:fs/promises";
const fileForRemove = new URL("./files/fileToRemove.txt", import.meta.url);

const remove = async () => {
  // Write your code here
  try {
    await unlink(fileForRemove);
  } catch (err) {
    throw Error("FS operation failed", err.message);
  }
};

await remove();
