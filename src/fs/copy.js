import { constants, promises, access } from "fs";
import { join } from "path";

const copy = async () => {
  const origin = "./files";
  const detination = "./files_copy";
  const errorMessage = "FS operation failed";

  try {
    await promises.access(origin, constants.F_OK);

    try {
      await promises.access(detination, constants.F_OK);
      throw new Error(errorMessage);
    } catch (error) {
      await promises.mkdir(detination, { recursive: true }).then(() => {
        promises
          .readdir(origin, {
            withFileTypes: true,
            recursive: true,
          })
          .then((entries) => {
            for (let entry of entries) {
              const srcPath = join(origin, entry.name);
              const destPath = join(detination, entry.name);
              entry.isDirectory()
                ? copy()
                : promises.copyFile(srcPath, destPath);
            }
          });
      });
    }
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await copy();
