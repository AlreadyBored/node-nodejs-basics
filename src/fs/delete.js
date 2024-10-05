import fs from "fs";
import path from "node:path";
const remove = async () => {
  const filePath = path.join(import.meta.dirname + "/files/fileToRemove.txt");

  if (!fs.existsSync(filePath)) {
    throw Error("FS operation failed");
  }

  fs.rmSync(filePath);
};

await remove();
