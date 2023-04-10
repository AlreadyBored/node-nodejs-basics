import fs from 'fs';

const list = async () => {
    const file_name = `src/fs/files`
    
    if (fs.existsSync(file_name)) {
        fs.readdir(file_name, (err, files) => {
            if (err) return console.log(err);
            console.log(files);
        })
        return
    }

    return console.log("FS operation failed");
};

await list();