import * as fs from "fs";
import path from "path";
import * as url from "url";

export const read = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(_dirname, "files", "fileToRead.txt");
  const errorMessage = "FS operation failed";

  fs.access(filePath, (error) => {
    if (error) throw new Error(errorMessage);
    fs.readFile(filePath, "utf8", (err, data) => {
      console.log(data);
    });
  });
};
read();
