const compress = async () => {
  const sourcePath = path.join('files', 'fileToCompress.txt');
  const destinationPath = path.join('files', 'archive.gz');

  try {
    const sourceStream = createReadStream(sourcePath);
    const destinationStream = createWriteStream(destinationPath);
    const gzip = createGzip();

    sourceStream
      .pipe(gzip)
      .pipe(destinationStream);

    sourceStream.on('error', () => {
      throw new Error('FS failed');
    });

    destinationStream.on('error', () => {
      throw new Error('FS failed');
    });

    gzip.on('error', () => {
      throw new Error('Compression failed');
    });

  } catch (err) {
    throw new Error('FS failed');
  }
};

await compress();
