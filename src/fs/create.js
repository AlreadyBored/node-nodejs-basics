import { access, constants, writeFile } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const targetFolder = join(__dirname, "files");

  access(join(targetFolder, "/fresh.txt"), constants.F_OK, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });

  writeFile(join(targetFolder, "fresh.txt"), "I am fresh and young", (err) => {
    if (err) throw err;
    console.log("The file has been successfully saved!");
  });
};

await create();
