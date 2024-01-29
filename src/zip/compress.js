const compress = async () => {
    const zlib  = require("zlib");
    const fs = require("fs");
    const { pipeline } = require("stream");

    const input = fs.createReadStream("source.txt");
    const output = fs.createWriteStream("archive.gz");
    const gzip = zlib.createGzip(); 

    pipeline(input, output, gzip)
};

await compress();