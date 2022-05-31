import * as fs from "fs";
import path from "path";
import * as url from "url";

export const list = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const dirPath = path.resolve(_dirname, "files");
  const errorMessage = "FS operation failed";

  fs.access(dirPath, (err) => {
    if (err) throw new Error(errorMessage);
    fs.readdir(dirPath, { withFileTypes: true }, (error, files) => {
      const fileNames = files.map((file) => file.name);
      console.log(fileNames);
    });
  });
};

list();
