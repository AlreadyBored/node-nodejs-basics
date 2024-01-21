import fs from "fs";
import path from "path";

const write = async () => {
    // Resolve the file path
    const filePath = path.resolve("./files/fileToWrite.txt");

    // Create a writable stream for the file
    const fileWriteStream = fs.createWriteStream(filePath, { encoding: "utf8" });

    // Pipe the stdin stream into the writable stream
    process.stdin.pipe(fileWriteStream);

    // Handle errors
    fileWriteStream.on("error", (e) => {
        console.error("Some error has occurred", e);
    });
};

// Call the write function
await write();