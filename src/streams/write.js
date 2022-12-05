import fs from 'fs';

export const write = async() => {
    const wStream = fs.createWriteStream('files/fileToWrite.txt')

    console.log('Enter the information for the write.');
    process.stdin.on('data', (value) => {
        wStream.write(value);
        console.log('Write complete!');
        process.exit();
    });
};
write();