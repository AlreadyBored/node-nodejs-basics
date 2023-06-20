import fs from 'fs'

const list = async () => {
    fs.access('src/fs/files', (err) => {
        if(err) {
            throw new Error("FS operation failed")
        } else {
            fs.readdir('src/fs/files', (err, files) => {
                if(err) {
                    return console.log(err)
                };
                files.forEach(file => console.log(file))
            })
        }
    })
};

await list();