import fs from 'fs'

export const read = async () => {
    fs.createReadStream("src/streams/files/fileToRead.txt", 'utf8').on("data", (data) => process.stdout.write(data));
};

// read()