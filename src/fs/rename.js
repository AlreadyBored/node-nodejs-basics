import { constants, promises } from "fs";

const rename = async () => {
  const errorMessage = "FS operation failed";
  const fileToRename = "./files/wrongFilename.txt";
  const renamedfile = "./files/properFilename.md";

  try {
    await promises.access(renamedfile, constants.F_OK);
    console.error(errorMessage);
  } catch (error) {
    try {
      await promises.access(fileToRename, constants.F_OK);

      await promises.rename(fileToRename, renamedfile);
    } catch (error) {
      throw new Error(errorMessage);
    }
  }
};

await rename();
