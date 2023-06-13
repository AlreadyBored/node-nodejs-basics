import { access, constants, writeFile } from "fs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const targetFolder = path.join(__dirname, "files");

  access(path.join(targetFolder, "/fresh.txt"), constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });

  writeFile(path.join(targetFolder, "fresh.txt"), "I am fresh and young", (err) => {
    if (err) throw err;
    console.log("The file has been successfully saved!");
  });
};

await create();
