import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const create = async () => {
    // Write your code here
    const filePath = './files/fresh.txt';
    const fileDataText = 'I am fresh and young';

    if (existsSync(filePath)){
        throw new Error('This file already exists');
    } else {
        await writeFile(filePath, fileDataText);
    }
};

await create();