import fs from "fs";

const filesFolder = "./src/fs/files";

const list = async () => {
    try {
        const isFolderExist = await fs.promises
            .access(filesFolder, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

        if (!isFolderExist) {
            throw new Error("FS operation failed: Folder 'files' does not exist");
        }

        const filenames = await fs.promises.readdir(filesFolder);
        console.log("Files in the 'files' folder:");
        console.log(filenames);
    } catch (err) {
        console.error(err.message);
    }
};

await list();
