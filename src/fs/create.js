const create = async () => {
    const fs = require('fs').promises; 
    const path = require('path'); 
    const dataToWrite = 'I am fresh and young'; 
    const filePath = path.join(__dirname, 'files', 'fresh.txt'); 

    try {
        await fs.writeFile(filePath, dataToWrite) 
        console.log('File "${filePath}" has been created with success!');
    } catch (error) {
        if(error.code === 'EEXIST') { 
            throw new Error('FS operation failed')
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
};

await create();