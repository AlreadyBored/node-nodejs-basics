const read = async () => {
    const fs = require("fs");
    const { stdout } = process
    const readableStream = fs.createReadStream("fileToRead.txt", "utf-8");
    let data = "";
    readableStream.on("data", (chunk) => (data += chunk));
    readableStream.on("end", () => stdout.write(data))
};

await read();