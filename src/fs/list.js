import * as fs from "fs";
import path from "path";

const list = async () => {
    const sourceFolder = './files';
    const doesNotExistErr = 'FS operation failed: The folder does not exist'

    const accessSoursFolder = fs.existsSync(sourceFolder)

    if (!accessSoursFolder) {
        throw new Error(doesNotExistErr);
    }

    const sourcePath = path.join(sourceFolder);

    await fs.readdir(sourcePath, (err, files) => {

        if (err) {
            throw err
        }

        files.forEach(file => {
            console.log(file)
        })
    })
};

await list();