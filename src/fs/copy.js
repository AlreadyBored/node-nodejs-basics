import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const copy = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const fileDir = path.join(__dirname, "files");
  const copyDir = path.join(__dirname, "files_copy");

  try {
    await fs.mkdir(copyDir, { recursive: false });
    await fs.access(fileDir, fs.constants.F_OK);
  } catch {
    throw new Error("FS operation failed");
  }

  const files = await fs.readdir(fileDir);

  for (const file of files) {
    const sourcePath = path.join(fileDir, file);
    const targetPath = path.join(copyDir, file);

    await fs.copyFile(sourcePath, targetPath);
  }
};

await copy();
