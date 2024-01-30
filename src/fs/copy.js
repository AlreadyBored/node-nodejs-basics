import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let isFolderExistsOrCreated = true;

  await fs
    .access(path.resolve(__dirname, "files"))
    .catch(() => (isFolderExistsOrCreated = false));
  await fs
    .access(path.resolve(__dirname, "files_copy"))
    .catch(() => (isFolderExistsOrCreated = false));

  if (!isFolderExistsOrCreated) {
    await fs.mkdir(path.resolve(__dirname, "files_copy"));
    fs.cp(
      path.resolve(__dirname, "files"),
      path.resolve(__dirname, "files_copy"),
      { recursive: true }
    );
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
