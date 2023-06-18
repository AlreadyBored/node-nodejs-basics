import * as fs from "fs";
import path from "path";

const copy = async () => {
    const sourceFolder = './files';
    const destinationFolder = './files_copy';
    const doesNotExistErr = 'FS operation failed: The folder does not exist'
    const alreadyExistErr = 'FS operation failed: The folder already exists'


    const accessSoursFolder = fs.existsSync(sourceFolder)

    if (!accessSoursFolder) {
        throw new Error(doesNotExistErr);
    }

    const accessDestinationFolder = fs.existsSync(destinationFolder)

    if (accessDestinationFolder) {
        throw new Error(alreadyExistErr);
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


