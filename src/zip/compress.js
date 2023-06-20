import { createReadStream, createWriteStream, promises } from "fs";
import zlib from "node:zlib";
import path from "node:path";

const sourceFilePath = path.resolve("./src/zip/files/fileToCompress.txt");
const compressedFilePath = path.resolve("./src/zip/files/archive.gz");

const compressFile = async () => {
    try {
        await new Promise((resolve, reject) => {
            createReadStream(sourceFilePath)
                .pipe(zlib.createGzip())
                .pipe(createWriteStream(compressedFilePath))
                .on("finish", resolve)
                .on("error", reject);
        });

        await promises.unlink(sourceFilePath);

        console.log("File compressed successfully.");
    } catch (error) {
        console.error("Error compressing file:", error);
    }
};

await compressFile();

// import fs from "node:fs";
// import path from "path";
// import zlib from "zlib";

// const filesPathArchive = path.resolve("src/zip/files/archive.gz");
// const filesPathToCompress = path.resolve("src/zip/files/fileToCompress.txt");

// const compress = async () => {
//     const gzip = zlib.createGzip();
//     const readStream = fs.createReadStream(filesPathToCompress);
//     const writeStream = fs.createWriteStream(filesPathArchive);
//     readStream.pipe(gzip).pipe(writeStream);
// };

// await compress();

// import fs from "node:fs";
// import path from "path";
// import zlib from "zlib";

// const filesPathArchive = path.resolve("src/zip/files/archive.gz");
// const filesPathToCompress = path.resolve("src/zip/files/fileToCompress.txt");

// const compress = async () => {
//     const gzip = zlib.createGzip();
//     const readStream = fs.createReadStream(filesPathToCompress);
//     const writeStream = fs.createWriteStream(filesPathArchive);
//     readStream.pipe(gzip).pipe(writeStream);
// };

// await compress();

/////////////////////////////////////////////////////////////////////////////////////

// import fs from "fs";
// import zlib from "zlib";

// const compress = async () => {
//     const soursePath = "./files/fileToCompress.txt";
//     const destPath = "./files/archive.gz";

//     fs.createReadStream(soursePath)
//         .pipe(zlib.createGzip())
//         .pipe(fs.createWriteStream(destPath))
//         .on("finish", () =>
//             fs.unlink(soursePath, (err) => {
//                 if (err) console.log(err);
//             })
//         );
// };

// await compress();
