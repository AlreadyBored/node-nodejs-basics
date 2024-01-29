const write = async () => {
    const fs = require("fs");
    const output = fs.createWriteStream("fileToWrite.txt");
    const { stdin } = process;
    stdin.on("data", (data) => output.write(data))
};

await write();