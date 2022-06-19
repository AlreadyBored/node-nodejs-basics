import { existsSync, mkdirSync, readdirSync, copyFileSync } from "fs";

const basePath = "src/fs";
const oldFolderPath = `${basePath}/files`;
const copyPath = `${basePath}/files_copy`;

export const copyDir = async () => {
  if (existsSync(copyPath) || !existsSync(oldFolderPath)) {
    console.error("FS operation failed");
  } else {
    try {
      await mkdirSync(copyPath);
      const fileList = await readdirSync(oldFolderPath);
      fileList.forEach((fileName) => {
        copyFileSync(`${oldFolderPath}/${fileName}`, `${copyPath}/${fileName}`);
      });
      console.log("folder with files was copied");
    } catch (error) {
      throw 'FS operation failed';
    }
  }
};

export default (() => {
  copyDir();
})();
