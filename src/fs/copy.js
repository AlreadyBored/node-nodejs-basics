import fs from "fs/promises";
import path from "path";

const copy = async () => {
  const filesPath = path.join("files");
  const copyPath = path.join("files_copy");

  try {
    const stats = await fs.stat(filesPath);
    if (!stats.isDirectory()) throw new Error("FS operation failed");
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    await fs.stat(copyPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") throw new Error("FS operation failed");
  }

  try {
    await fs.cp(filesPath, copyPath, { recursive: true });
    console.log("Success");
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
