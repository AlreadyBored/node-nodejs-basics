import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
    // Create a Transform Stream that reverses the text
    const reverseStream = new Transform({
        encoding: "utf8",
        transform(dataChunk, encoding, callback) {
            // Reverse the data chunk and push it to the readable side
            const reversedTextChunk = dataChunk.toString().split("").reverse().join("");
            callback(null, reversedTextChunk);
        }
    });

    try {
        // Use pipeline to pipe the stdin stream through the reverseStream and then to stdout
        await pipeline(process.stdin, reverseStream, process.stdout);
    } catch (e) {
        // Handle errors
        console.error("Pipeline failed", e);
    }
};

// Call the transform function
await transform();