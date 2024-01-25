import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  try {
    await fs.access(join(__dirname, "files_copy"));
    console.error(new Error("FS operation failed in Copy"));
  } catch (error) {
    try {
      const result = await fs.readdir(join(__dirname, "files"));
      await fs.mkdir(join(__dirname, "files_copy"));
      result.map((file) =>
        fs.copyFile(
          join(__dirname, "files", file),
          join(__dirname, "files_copy", file)
        )
      );
    } catch (error) {
      console.error(new Error("FS operation failed"));
    }
  }
};

await copy();
