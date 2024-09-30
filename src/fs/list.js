const fs = require('fs');

const ERROR = 'FS operation failed';
const LIST_PATH = './src/fs/files';

const list = async () => {
    const checkExist = fs.existsSync(LIST_PATH);

    if (!checkExist) {
        return console.log(ERROR);
    }

    await fs.readdir(LIST_PATH, (e, files) => {
        if (e) {
            return console.log(ERROR);
        }
        console.log(files);
    })
};

list();
