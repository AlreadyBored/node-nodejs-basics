import fs from 'fs';

export const list = async () => {
    if (fs.existsSync('./files')) {
        fs.readdir('./files', (error, files) => {
            if (error) {
                throw error;
            }
        
            files.forEach(file => {
                console.log(file);
            });
        })
    }
    else {
        throw new Error("FS operation failed");
    }
};