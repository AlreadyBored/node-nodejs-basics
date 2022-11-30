import fs from "fs";

const list = async () => {
    const path = 'files';
    fs.stat(path, (err) => {
        if (!err) {
            fs.readdirSync(path).forEach(file => {
                console.log(file);
            })
        } else if (err.code === 'ENOENT') {
            throw 'FS operation failed'
        }
    });
};

await list();