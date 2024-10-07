import fs from 'fs';

const rename = async () => {
    const target = 'src/fs/files/properFilename.txt';

    fs.readFile(target, (err) => {
        if (err?.code === 'ENOENT') {
            fs.rename('src/fs/files/wrongFilename.txt', target, (err) => {
                if (err?.code === 'ENOENT') {
                    throw Error ('FS operation failed');
                } 
            });
        } else {
            throw Error ('FS operation failed');
        }
    });
};

await rename();