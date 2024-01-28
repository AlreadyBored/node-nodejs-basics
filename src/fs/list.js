import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDirPath = path.join(__dirname, 'files');

const list = async () => {
    if (!fs.existsSync(filesDirPath)) {
        throw new Error('FS operation failed');
    }

    let filesArr = [];

    try {
        let files = await fs.promises.readdir(filesDirPath, { withFileTypes: true, recursive: true });

        files.forEach(file => {
            let tempFile = {};

            let fileType;

            if (file.isDirectory()) {
                fileType = 'Directory'
            } else if (file.isFile()) {
                fileType = 'File'
            }

            tempFile.name = file.name;
            tempFile.path = file.path;
            tempFile.type = fileType;

            filesArr.push(tempFile);
        })

        console.log('*** Files array ***', filesArr);
    } catch (error) {
        console.error(error);
    }
};

await list();