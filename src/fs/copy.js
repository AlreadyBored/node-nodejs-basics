const fs = require('fs');

const ERROR_MESSAGE = 'FS operation failed';
const pathForCopy = './src/fs/files';
const copyPath = pathForCopy + '_copy';

const copy = async () => {
    const existOriginalPath = fs.existsSync(pathForCopy);
    const copiedPathExist = fs.existsSync(copyPath);
    if (!existOriginalPath || copiedPathExist) {
        console.log(ERROR_MESSAGE);
        return;
    }
    await createCopiedDir();
};

async function createCopiedDir() {
    await fs.mkdir(copyPath, (e) => console.log(ERROR_MESSAGE));

    await fs.readdir(pathForCopy, (err, entries) => {
        if (err) {
            return console.log(err)
        }
        entries.forEach(entry => {
            const copyFilePath = pathForCopy + '/' + entry;
            const newFilePath = copyPath + '/' + entry;

            fs.copyFile(copyFilePath, newFilePath, (e) => {
                if (e) {
                    console.log(ERROR_MESSAGE);
                }
            });

        })
    })

}

copy();
