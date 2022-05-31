import fs from 'fs';

export const create = async () => {
    const fileName = 'fresh.txt';
    const path = `./files/${fileName}`;
    const text = 'I am fresh and young';    
    try {
        if (fs.existsSync(path)) {
            throw new Error('FS operation failed');
        };

        await fs.appendFile(path, text, (err) => {
            if (err) throw new Error();
            console.log('Data has been added!');
        });
    } catch (error) {
        throw new Error(error);
    }
};
