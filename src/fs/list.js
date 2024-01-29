import fs from 'fs';

const fileDir = "./src/fs/files";
var result = [];

const list = async () => {
    if (!fs.existsSync(fileDir)) {
        throw new Error ("FS operation failed");
    }

    fs.readdir(fileDir, (err, files) => {      
        if (err) throw err;
        files.forEach(file => {
            console.log(file);
        });
    });

};

await list();
