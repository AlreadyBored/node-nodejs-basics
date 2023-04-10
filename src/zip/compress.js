import zlib from "zlib";
import fs from "fs";

const compress = async () => {
    try {
        const file_path = "src/zip/files/fileToCompress.txt";
        if (!fs.existsSync(file_path)) throw new Error("No such file or directory");

        const gzip = zlib.createGzip();
        const fileReadStream = fs.createReadStream(file_path);
        const fileWriteStream = fs.createWriteStream("src/zip/files/archive.gz");
        fileReadStream.pipe(gzip).pipe(fileWriteStream);
        
    } catch (error) {
        console.log(error.message);
    }
};

await compress();
