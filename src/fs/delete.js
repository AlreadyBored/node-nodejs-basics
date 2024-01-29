import fs from "fs";

const remove = async () => {
    // Write your code here
    const fileExistsError = 'FS operation failed'

    // Check if fileToRemove.txt does not exist and if so throw an error
    if (!fs.existsSync('./files/fileToRemove.txt')) {
        throw new Error(fileExistsError)
    }

    // Remove fileToRemove.txt
    await fs.promises.unlink('./files/fileToRemove.txt')
};

await remove();