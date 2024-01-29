import * as fs from "fs";
import * as path from "path";

const copy = async () => {
    // Write your code here
    const folderPath = './files'
    const copyFolderPath = './copy_files'

    // Check if the file folder and if copy files folder does not exist
    // Otherwise throw an error
    if (!fs.existsSync(folderPath) || fs.existsSync(copyFolderPath)) {
        throw new Error('FS operation failed');
    }

    // Get array of file names of files folder
    const files = await fs.promises.readdir(folderPath);

    // Create copy_files directory
    await fs.promises.mkdir(copyFolderPath)

    // Copy each file from files to copy_files
    for (const file of files) {
        await fs.promises.copyFile(path.join(folderPath, file), path.join(copyFolderPath, file));
    }

};

await copy();
