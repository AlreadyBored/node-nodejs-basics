import * as fs from "fs";
import path from "path";
import * as url from "url";

export const copy = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const errorMessage = "FS operation failed";
  const filesPath = path.resolve(_dirname, "files");
  const filesCopyPath = path.resolve(_dirname, "files_copy");

  fs.access(filesPath, function (error) {
    if (error) {
      throw new Error(errorMessage);
    } else {
      fs.access(filesCopyPath, async (error) => {
        if (error) {
          await fs.promises.mkdir(filesCopyPath);
          copyFiles();
        } else {
          throw new Error(errorMessage);
        }
      });
    }
  });

  const copyFiles = async () => {
    fs.readdir(filesPath, { withFileTypes: true }, async (err, files) => {
      if (err) throw new Error(errorMessage);
      files.forEach(async (file) => {
        await fs.promises.copyFile(
          path.resolve(filesPath, file.name),
          path.resolve(filesCopyPath, file.name)
        );
      });
    });
  };
};
copy();
