import * as fs from "fs";
import path from "path";

const copy = async () => {
    const sourceFolder = './files';
    const destinationFolder = './files_copy';
    const errorMessage = 'FS operation failed'


    const accessSoursFolder = fs.existsSync(sourceFolder)

    if (!accessSoursFolder) {
        throw new Error(errorMessage);
    }

    const accessDestinationFolder = fs.existsSync(destinationFolder)

    if (accessDestinationFolder) {
        throw new Error(errorMessage);
    }

    await fs.promises.mkdir(destinationFolder, {recursive: true});


    await fs.readdir(sourceFolder, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const sourcePath = path.join(sourceFolder, file);
            const newFolderPath = path.join(destinationFolder, file);

            fs.copyFile(sourcePath, newFolderPath, (err) => {
                if (err) throw err;
            });
        });
    });

}

await copy();


