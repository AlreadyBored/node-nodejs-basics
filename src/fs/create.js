import fs from 'fs';

const create = async () => {
    const filePath = './src/fs/files/fresh.txt';
    
    fs.access(filePath, fs.constants.F_OK, (accessError) => {
        if (accessError) {
            fs.writeFile(filePath, 'I am fresh and young', (creationError) => {
                if (creationError) {
                    throw creationError;
                } else {
                    console.log('File is created successfully');
                }
                
            });
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await create();