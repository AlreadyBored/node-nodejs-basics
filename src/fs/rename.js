import { rename as renameFile, existsSync} from 'fs';

const rename = async () => {
    const filePath = './src/fs/files/wrongFilename.txt';
    const filePathNew = './src/fs/files/properFilename.md';
    if (!existsSync(filePath) || existsSync(filePathNew)) {
       throw new Error('FS operation failed');
    }
    renameFile(filePath, filePathNew, (err) => {
        if (err) throw err;
        console.log('File name changed');
    })
};

await rename();