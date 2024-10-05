import fs from "fs";
import path from "node:path";

const list = async () => {
  const folderPath = path.join(import.meta.dirname + "/files");
  try {
    fs.readdirSync(folderPath).forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    throw Error("FS operation failed");
  }
};

await list();
