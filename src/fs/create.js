import fs from 'fs';
const create = async () => {
    // Write your code here 
    const content = 'I am fresh and young';
    const dirPath = './files';
    const filePath = `${dirPath}/fresh.txt`;
    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(filePath, content);
};

await create();