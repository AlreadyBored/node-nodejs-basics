import fs from 'fs';

const copy = async () => {
    const path = './src/fs/files';
    const pathOfCopy = './src/fs/files_copy';
    if (!fs.existsSync(path) || fs.existsSync(pathOfCopy)) {
        throw new Error ('FS operation failed');
    }

    fs.readdir(path, (error, files) => {
        if (error) {
            console.error(error);
        } else {
            fs.mkdir(pathOfCopy, { recursive: true }, error => {
                if (error) {
                    throw new Error (error);
                } else {
                    files.forEach(file => {
                        fs.copyFile(`${path}/${file}`, `${pathOfCopy}/${file}`, error => {});
                    });
                }
            });
        }
    });
};

copy();