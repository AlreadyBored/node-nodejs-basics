import fs from 'node:fs'

const rename = async () => {
    let fileSourcePath = "src/fs/files/";
    let fileOriginalName = "wrongFilename.txt";
    let fileProperName = "properFilename.md";

    try {
        console.log("Original file path is " + fileSourcePath + fileOriginalName);
        if (!fs.existsSync(fileSourcePath + fileOriginalName)) {
          throw new Error("FS operation failed");
        }

        fs.copyFileSync(fileSourcePath + fileOriginalName, fileSourcePath + fileProperName, fs.constants.COPYFILE_EXCL);

      } catch (err) {
        console.error(err);
      }

};

await rename();