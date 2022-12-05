import { readFile }   from "fs/promises";
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    try {
        const filePath = new URL('files/fileToCalculateHashFor.txt', import.meta.url);
        const fileData = await readFile(filePath);
        const dataToConsole = createHash('sha256').update(fileData).digest('hex');
        console.log(dataToConsole);
    } catch (error) {
        console.log(error.message)
    }
};

await calculateHash("TutorialsPoint");