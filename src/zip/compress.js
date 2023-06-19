const compress = async () => {
    var zlib=require('zlib');
    var fs=require('fs');
    var gzip=zlib.createGzip();
    var input=fs.createReadStream("src/zip/files/fileToCompress.txt");
    var output=fs.createWriteStream("src/zip/files/archive.gz");
    await input.pipe(gzip).pipe(output);
};

compress();