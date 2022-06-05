import * as fs from "node:fs/promises";

export const copy = async () => {
    
    try {
        const files = await fs.readdir("./src/fs/files");
        fs.access('./src/fs/files/')
        .then(() => {
            fs.mkdir("./src/fs/files_copy").then(() => {
                files.forEach((file) => {
                    fs.copyFile("./src/fs/files/" + file,"./src/fs/files_copy/" + file)
                })
            })
            .catch(() => {
                console.error('FS operation failed');
            })
        })
        .catch(() => {
            console.error('FS operation failed');
        })
    } catch (error) {
        throw Error('FS operation failed');
    }

};

copy();