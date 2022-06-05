import fs from "fs"

export const write = async () => {
    const path = ('./files/fileToWrite.txt')
    const writeStream = fs.createWriteStream(path)
    process.stdin.on('data', data => {
        writeStream.write(data.toString())
        process.exit();
      });
};

write()