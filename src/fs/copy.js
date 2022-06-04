import fs from 'fs';

export const copy = async () => {
    if (fs.existsSync('./files') && !fs.existsSync('./files_copy')) {
        fs.mkdir('./files_copy', { recursive: true }, error => {
            if (error) {
                throw error;
            }
        })
    
        fs.readdir('./files', (error, files) => {
            if (error) {
                throw error;
            }
        
            files.forEach(file => {
                fs.copyFile(`./files/${file}`, `./files_copy/${file}`, error => {
                    if (error) {
                        throw error;
                    }
                })
            });
        })
    }
    else {
        throw new Error("FS operation failed");
    }
};