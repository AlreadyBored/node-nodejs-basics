import fs from "fs";

const write = async () => {
    // Write your code here
    const writeFilePath = './files/fileToWrite.txt'
    let inputString = ''

    const writable = fs.createWriteStream(writeFilePath, {encoding: 'utf8'});

    const dataPromise = new Promise((resolve) => {
        process.stdin.on('data', (data) => {
            inputString = data.toString().trim();
            if (inputString) {
                process.stdin.pause()
                resolve()
            }
        });
    })
    await dataPromise
    writable.write(inputString)
    writable.end()
};

await write();