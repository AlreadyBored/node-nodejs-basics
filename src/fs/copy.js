import fs from 'fs';

const copy = async () => {
    if (fs.existsSync('src/fs/files') && !fs.existsSync('src/fs/files_copy')) {
        fs.mkdir('src/fs/files_copy', error => {
            error && console.log(error);
            fs.cp('src/fs/files', 'src/fs/files_copy', { recursive: true }, error => error && console.log(error));
        });
    } else {
        console.log(new Error('FS operation failed'));
    }
};

await copy();
