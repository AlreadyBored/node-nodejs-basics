import { access } from "fs/promises";
import { constants } from "fs/promises";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  try {
    const isTargetExist = await access(
      path.resolve(__dirname, "files/properFilename.md"),
      constants.F_OK
    )
      .then(() => true)
      .catch(() => false);

    if (isTargetExist) {
      throw new Error();
    }

    await fs.rename(
      path.resolve(__dirname, "files/wrongFilename.txt"),
      path.resolve(__dirname, "files/properFilename.md")
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
