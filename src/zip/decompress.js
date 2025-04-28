const decompress = async () => {
  const archivePath = path.join('files', 'archive.gz');
  const outputPath = path.join('files', 'fileToCompress.txt');

  try {
    const archiveStream = createReadStream(archivePath);
    const outputStream = createWriteStream(outputPath);
    const gunzip = createGunzip();

    archiveStream
      .pipe(gunzip)
      .pipe(outputStream);

    archiveStream.on('error', () => {
      throw new Error('FS failed');
    });

    outputStream.on('error', () => {
      throw new Error('FS failed');
    });

    gunzip.on('error', () => {
      throw new Error('Decompression failed');
    });

  } catch (err) {
    throw new Error('FS failed');
  }
};

await decompress();
