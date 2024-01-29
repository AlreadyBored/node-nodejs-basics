    import fs from 'fs';

    const write = async () => {
        process.stdin.on('data', (data) => {
            const dataString = data.toString();
            const writeStr = fs.createWriteStream('./files/fileToWrite.txt');
            writeStr.write(dataString);
            writeStr.end();
            console.log(dataString);
            process.stdin.pause();
        });
    };

    await write();