import { access, cp } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const dir = path.join(__dirname, "files");
  const source = path.join(dir);
  const destination = path.join(__dirname, "files_copy");

  try {
    await access(source, constants.F_OK);
    await access(destination, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await cp(source, destination, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
