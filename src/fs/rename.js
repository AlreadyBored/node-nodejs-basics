const fs = require('fs');

const ERROR = 'FS operation failed';
const OLD_FILE_NAME = './src/fs/files/wrongFilename.txt';
const NEW_FILE_PATH = './src/fs/files/properFilename.md';

const rename = async () => {
    const checkExist = fs.existsSync(OLD_FILE_NAME);
    const newExists = fs.existsSync(NEW_FILE_PATH);

    if (!checkExist || newExists) {
        return console.log(ERROR);
    }

    await fs.rename(OLD_FILE_NAME, NEW_FILE_PATH, (e) => {
        if (e) {
            console.log(ERROR);
        }
    })
};

rename();

