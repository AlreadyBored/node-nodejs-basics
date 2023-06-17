import fs from "fs";

const list = async () => {
    // Write your code here
    const folderPath = './files'

    // Check if the files folder exists otherwise throw an error
    if (!fs.existsSync(folderPath)) {
        throw new Error('FS operation failed');
    }

    // Get files directory filenames in array and log it
    console.log(await fs.promises.readdir(folderPath));
};

await list();