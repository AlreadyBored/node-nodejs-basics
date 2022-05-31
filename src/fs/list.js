import fs from 'fs';

export const list = async () => {
    const exists = fs.existsSync('src/fs/files', () => {});
    const res = [];
    
    if (exists) {
        fs.readdirSync('./src/fs/files').forEach(element => {
            res.push(element.split('.').shift());
        });
        console.log(res)
    } else {
        throw new Error('FS operation failed');
    }
};



// list()