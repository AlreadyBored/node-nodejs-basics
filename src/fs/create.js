const fs = require('fs').promises;
const path = require('path');

const create = async () => {
    const dir = path.join(__dirname, 'files');
    const filePath = path.join(dir, 'fresh.txt');

    try {
        await fs.access(filePath);
        console.error('Error: FS operation failed');
    } catch {
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(filePath, 'I am fresh and young');
        console.log('File created successfully');
    }
};

await create();
