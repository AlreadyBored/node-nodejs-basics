import * as fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    const sourceFolder = path.join(__dirname, './files');

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