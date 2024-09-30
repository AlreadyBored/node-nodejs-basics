const fs = require('fs');

const ERROR = 'FS operation failed';
const DELETE_PATH = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    const checkExist = fs.existsSync(DELETE_PATH);

    if (!checkExist) {
        return console.log(ERROR);
    }

    await fs.unlink(DELETE_PATH, (e) => {
        if (e) {
            console.log(ERROR);
        }
    })
};
remove();
