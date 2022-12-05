import fs from 'fs';

const list = async () => {
     const path = './src/fs/files';
     if (!fs.existsSync(path)) {
        throw new Error ('FS operation failed');
     }
     fs.readdir(path, (err, result) => {
        console.log(result);
     });
};

await list();