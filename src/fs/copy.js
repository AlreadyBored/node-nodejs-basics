import fs  from 'fs';
import { copyFile, mkdir } from 'fs/promises';

const copy = async () => {
    const newDir = 'src/fs/files_copy';
    const dir = 'src/fs/files';

    fs.readdir( dir, function ( err, files) {
        if (err || !files.length) {
            throw new Error ('FS operation failed');
        } else {
            ensureDirSync(newDir, files);
        }
    })

    async function ensureDirSync (folder, files) {
        try {
            await mkdir(folder);
            await Promise.all(files.map( file  => copyFile (dir + '/' + file, newDir + '/' + file)));
            console.log('Success!');
        } catch (err) {
            throw new Error ('FS operation failed');
        }
    }   
};

copy();