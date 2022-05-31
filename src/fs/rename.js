import * as fs from "fs";
import path from "path";
import * as url from "url";

export const rename = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const oldFilePath = path.resolve(_dirname, "files", "wrongFilename.txt");
  const newFilePath = path.resolve(_dirname, "files", "properFilename.md");
  const errorMessage = "FS operation failed";

  fs.access(oldFilePath, (err) => {
    if (err) throw new Error(errorMessage);
    fs.access(newFilePath, (errNew) => {
      if (!errNew) throw new Error(errorMessage);
      fs.rename(oldFilePath, newFilePath, () => {});
    });
  });
};
rename();
