import fs from "fs";
import path from "path";

const read = async () => {
    // Resolve the file path
    const filePath = path.resolve("./files/fileToRead.txt");

    // Create a readable stream for the file
    const fileReadStream = fs.createReadStream(filePath, { encoding: "utf8" });

    // Pipe the readable stream into process.stdout
    fileReadStream.pipe(process.stdout);

    // Handle errors
    fileReadStream.on("error", (e) => {
        console.error("Some error has occurred", e);
    });
};

// Call the read function
await read();