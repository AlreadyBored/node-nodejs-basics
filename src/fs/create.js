const fs = require('fs');

const create = async () => {
    const filePath = './src/fs/files/fresh.txt';
    const fileContent = 'I am fresh and young';
    const errorMessage = 'FS operation failed';

    const existFile = fs.existsSync(filePath);

    if (existFile) {
        console.log(errorMessage);
    } else  {
        await writeFile(filePath, fileContent, errorMessage);
    }
};

async function writeFile(filePath, fileContent, errorMessage = 'error') {
    return fs.writeFile(filePath, fileContent, (error) => {
        if (error) {
            console.log(errorMessage);
        }
    })
}

create();
