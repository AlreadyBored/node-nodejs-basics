const decompress = async () => {
    var zlib=require('zlib');
    var fs=require('fs');
    var unzip=zlib.createUnzip();
    var input=fs.createReadStream("src/zip/files/archive.gz");
    var output=fs.createWriteStream("src/zip/files/fileToCompress.txt");
    await input.pipe(unzip).pipe(output);
};

decompress();