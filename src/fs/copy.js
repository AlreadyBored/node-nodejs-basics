import fs from "node:fs/promises";

const copy = async () => {
  const src = "files";
  const dest = "files_copy";
  try {
    await fs.access(src);
  } catch (err) {
    throw new Error("FS operation failed. there is no folder");
  }
  try {
    await fs.access(dest);
    throw new Error("FS operation failed. copy-folder already existed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.cp(src, dest, { recursive: true });
      console.log(`${dest} created successfully with content.`);
    } else {
      throw err;
    }
  }
};

await copy();
