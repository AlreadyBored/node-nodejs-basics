import fs from "fs";
import crypto from "crypto";
import path from "path";

const calculateHash = async () => {
    // Resolve the file path
    const filePath = path.resolve("./files/fileToCalculateHashFor.txt");

    // Create a hash object
    const hashObj = crypto.createHash("sha256");

    // Create a read stream for the file
    const fileReadStream = fs.createReadStream(filePath);

    // Update the hash object with the file data, works part by part if the file is large
    fileReadStream.on("data", (dataChunk) => {
        hashObj.update(dataChunk);
    });

    // Print the hash value when the file has been read completely
    fileReadStream.on("end", () => {
        console.log(hashObj.digest("hex"));
    });

    // Handle errors
    fileReadStream.on("error", (e) => {
        console.error("Some error has occurred", e);
    });
};

// Call the calculateHash function
await calculateHash();