const fs = require('fs').promises;
const path = require('path');

const parseArgs = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch {
        await fs.writeFile(filePath, 'I am fresh and young');
    }
};

parseArgs().catch(console.error);
