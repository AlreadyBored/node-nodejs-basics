import fs from "fs/promises";
import zlib from "zlib";

const compress = async () => {
  const sourceFilePath = "files/fileToCompress.txt";
  const targetFilePath = "files/archive.gz";

  try {
    const sourceStream = fs.createReadStream(sourceFilePath);
    const targetStream = fs.createWriteStream(targetFilePath);
    const gzipStream = zlib.createGzip();

    await pipelineAsync(sourceStream, gzipStream, targetStream);
    console.log(`File '${sourceFilePath}' compressed to '${targetFilePath}'.`);
  } catch (error) {
    console.error(`Error compressing file: ${error.message}`);
  }
};

const pipelineAsync = async (...streams) => {
  for (let i = 0; i < streams.length - 1; i++) {
    const sourceStream = streams[i];
    const targetStream = streams[i + 1];
    sourceStream.pipe(targetStream);
  }

  await new Promise((resolve, reject) => {
    streams[streams.length - 1].on("finish", resolve).on("error", reject);
  });
};

try {
  await compress();
} catch (error) {
  console.error(error);
}
