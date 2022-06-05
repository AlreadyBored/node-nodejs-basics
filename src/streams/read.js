import { ReadStream } from "fs";
const path = 'src/streams/files/fileToRead.txt'
const fileStream = new ReadStream(path);

export const read = async () => {
    // Write your code here 
    fileStream.on('readable', function () {
        var data = fileStream.read();
        if (data)
            process.stdout.write(data);
    });
};

