const decompress = async () => {
  const inputFilePath = "./files/archive.gz";
  const outputFilePath = "./files/fileToCompress.txt";
  const readStream = fs.createReadStream(inputFilePath);

  const writeStream = fs.createWriteStream(outputFilePath);

  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("finish decompress");
  });
};

await decompress();
