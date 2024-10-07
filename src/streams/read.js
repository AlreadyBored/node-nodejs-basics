/*
* implement function that reads file fileToRead.txt content using Readable Stream 
* and prints it's content into process.stdout
*/
import fs from "fs";

const read = async () => {
    const filePath = "./src/streams/files/fileToRead.txt";
    const readable = fs.createReadStream(
        filePath,
        {encoding: 'utf8'}
    );

    const chunks = [];

    for await (const chunk of readable) {
        chunks.push(Buffer.from(chunk));
    }

    const content = Buffer.concat(chunks).toString("utf-8");
    process.stdout.write(`${content}\n`);
};

await read();