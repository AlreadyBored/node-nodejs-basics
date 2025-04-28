import { promises as fs } from "fs";

const copy = async () => {
  const srcDir = "src/fs/files";
  const destDir = "src/fs/files_copy";

  try {
    const srcStats = await fs.stat(srcDir);
    if (!srcStats.isDirectory()) {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }

  try {
    await fs.access(destDir);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  await fs.cp(srcDir, destDir, { recursive: true });
};

await copy();
