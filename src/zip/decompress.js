import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    try {
        const file_path = "src/zip/files/archive.gz";
        if (!fs.existsSync(file_path)) throw new Error("No such file or directory")

        const reateStream = fs.readFileSync(file_path);

        const writeStream = fs.createWriteStream("src/zip/files/fileToCompress.txt", "utf-8")
        
        zlib.unzip(reateStream, ((err, res) => {
            if (err) throw new Error(err)
            writeStream.write(res.toString());
        }));        
    } catch (error) {
        console.log(error.message);
    }
};

await decompress();