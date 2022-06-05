import fs from "fs/promises";

export const remove = async () => {
    const filesFolder = "./src/fs/files";
    const removeFilename = 'fileToRemove.txt';
    try {
        const files = await fs.readdir(filesFolder);
        const deleteFiles = files.find((file) => file === removeFilename);
        if (!deleteFiles) {
            throw new Error('FS operation failed');
        }
        if (deleteFiles) {
            await fs.unlink(`${filesFolder}/${removeFilename}`);
        }
    } catch (error) {
        console.log(error);
    } 
};

remove();
