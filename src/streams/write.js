import * as fs from "node:fs";

const write = async () => {
    const fileToRead = "./files/fileToWrite.txt";
    const stdin = process.openStdin();
    const stream = fs.createWriteStream(fileToRead, { flags: 'a', encoding: 'utf8'});

    stdin.on("data", dataListener);


    function dataListener(data) {
        const writeText = data.toString().trim();
        stream.write(writeText);
        stream.end();
    }
};

await write();
