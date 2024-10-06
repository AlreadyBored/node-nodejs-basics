import fs from 'node:fs';

const copy = async () => {
    let folderSourceName = "./src/cp/files/";
    let folderDestinationName = "./src/cp/files_copy/";
    try {
        if (!fs.existsSync(folderSourceName)) {
          throw new Error("FS operation failed");
        }

        if(fs.existsSync(folderDestinationName)) {
            throw new Error("FS operation failed");
        }

        fs.cp(folderSourceName, folderDestinationName, { recursive: true }, err => {} );

      } catch (err) {
        console.error(err);
      }
};

await copy();
