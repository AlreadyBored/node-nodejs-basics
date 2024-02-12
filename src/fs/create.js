import * as fs from 'fs';
import * as path from 'path';
const create = async () => {
    
    function createFreshFile() {
        const currentDir = process.cwd();
        const filesDir = path.join(currentDir, 'src', 'fs', 'files');
        const filePath = path.join(filesDir, 'fresh.txt');
    
        // Check if file already exists
        if (fs.existsSync(filePath)) {
            throw new Error('FS operation failed: File already exists');
        }
    
        const content = 'I am fresh and young.';
    
        // Write content to file
        fs.writeFileSync(filePath, content);
    
        console.log('Fresh file created successfully.');
    }
    
    try {
        createFreshFile();
    } catch (error) {
        console.error(error.message);
    }   
}

await create();