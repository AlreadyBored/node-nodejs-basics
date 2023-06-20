import fs from "fs";

const oldFileName = "./src/fs/files/wrongFilename.txt";
const newFileName = "./src/fs/files/properFilename.md";

const createError = (textError) => {
    throw new Error(`FS operation failed: ${textError}`);
};
const textError1 = "file wrongFilename.txt doesn't exists";
const textError2 = "file properFilename.md has already exists";

const rename = async () => {
    try {
        const isOldFileNameExist = await fs.promises
            .access(oldFileName, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);
        const isNewFileNameExist = await fs.promises
            .access(newFileName, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

        if (!isOldFileNameExist) {
            createError(textError1);
        } else if (isNewFileNameExist) {
            createError(textError2);
            // переименование файла
        } else {
            await fs.promises.rename(oldFileName, newFileName);
            console.log("renamed successfully");
        }
    } catch (err) {
        console.error(err.message);
    }
};

await rename();
