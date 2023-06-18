import * as fs from "fs";
import path from "path";

const list = async () => {
    const sourceFolder = './files';
    const errorMessage = 'FS operation failed'

    const accessSoursFolder = fs.existsSync(sourceFolder)

    if (!accessSoursFolder) {
        throw new Error(errorMessage);
    }

    const sourcePath = path.join(sourceFolder);

    await fs.readdir(sourcePath, (err, files) => {

        if (err) {
            throw new Error(errorMessage)
        }

        files.forEach(file => {

            console.log(file)
        })


    })

};

await list();