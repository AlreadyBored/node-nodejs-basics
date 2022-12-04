import fs from "node:fs/promises";
import path from "path";

// rename.js - implement function that renames file
// wrongFilename.txt to properFilename with extension .md
// (if there's no file wrongFilename.txt or properFilename.md
// already exists Error with message FS operation failed must be thrown)

const rename = async () => {
  // Write your code here

  const dir = path.resolve(process.cwd(), 'src', 'fs', 'files');

  try {
    // await fs.access('');
    await fs.rename(path.resolve(dir, 'wrongFilename.txt'), path.resolve(dir, 'properFilename.md'));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
