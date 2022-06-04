import fs from 'fs';

export const create = async () => {
    const filePath = './files/fresh.txt';
    const message = 'I am fresh and young';

    if (!fs.existsSync(filePath)) {
        fs.writeFile(filePath, message, error => {
            if (error) {
                throw error;
            }
        })
    } else {
        throw new Error("FS operation failed");
    }
};