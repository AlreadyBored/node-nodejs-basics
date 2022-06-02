import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  await fs.promises.rm(path.resolve(__dirname, "files-copy"), {
    recursive: true,
    force: true,
  });
  await fs.promises.mkdir(path.resolve(__dirname, "files-copy"), {
    recursive: true,
  });
  await fs.readdir(path.resolve(__dirname, "files"), (err, files) => {
    files.forEach((item) => {
      fs.copyFile(
        path.resolve(__dirname, "files", item),
        path.resolve(__dirname, "files-copy", item),
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
};
copy();
