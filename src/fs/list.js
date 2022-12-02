import fs  from 'fs';

const list = async () => {
    const dir = 'src/fs/files';

    fs.readdir( dir, function ( err, files) {
        if (err || !files.length) {
            throw new Error ('FS operation failed');
        } else {
            console.log(files);
        }
    }) 
};

await list();