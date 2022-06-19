import { existsSync, renameSync } from "fs";

const oldFileName = "wrongFilename.txt";
const newFileName = "properFilename.md";
const basePath = "src/fs";
const folderPath = `${basePath}/files`;

export const rename = async () => {
  // Write your code here
  if (
    !existsSync(`${folderPath}/${oldFileName}`) ||
    existsSync(`${folderPath}/${newFileName}`)
  ) {
    console.error("FS operation failed");
  } else {
    try {
      await renameSync(
        `${folderPath}/${oldFileName}`,
        `${folderPath}/${newFileName}`
      );
      console.log(`${oldFileName} was renamed to ${newFileName}`);
    } catch (error) {
      throw 'FS operation failed';
    }
  }
};

export default (() => {
  rename();
})();
