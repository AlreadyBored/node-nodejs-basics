import fs from "fs";

const read = async () => {
    try {
        const file_path = "src/streams/files/fileToRead.txt";
        if (!fs.existsSync(file_path)) throw new Error("No such file or directory");

        fs.createReadStream(file_path, "utf-8").on("data", (chunk) => {
            process.stdout.write(chunk);
        });
    } catch (error) {
        console.log(error.message);
    }
};

await read();