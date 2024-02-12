import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
const create = async () => {
    
    function createFreshFile() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filesDir = path.join(__dirname, 'files');
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