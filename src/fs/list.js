import fs from "fs/promises";
import path from "path";

const list = async () => {
  const dirPath = path.join(process.cwd(), "files");

  const dirExist = await fs
    .access(dirPath)
    .then(() => true)
    .catch(() => false);

  if (!dirExist) {
    throw new Error("FS operation failed");
  }

  const files = await fs.readdir(dirPath);
  // print files as an array
  console.log(files);
  
  // filnames from array of files
  files.forEach((file) => {
    console.log(file);
  });
};

await list();
