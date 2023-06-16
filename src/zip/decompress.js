import fs from "fs/promises";
import zlib from "zlib";

const decompress = async () => {
  const sourceFilePath = "files/archive.gz";
  const targetFilePath = "files/fileToCompress.txt";

  try {
    const sourceStream = fs.createReadStream(sourceFilePath);
    const targetStream = fs.createWriteStream(targetFilePath);
    const gunzipStream = zlib.createGunzip();

    await pipelineAsync(sourceStream, gunzipStream, targetStream);
    console.log(
      `File '${sourceFilePath}' decompressed to '${targetFilePath}'.`
    );
  } catch (error) {
    console.error(`Error decompressing file: ${error.message}`);
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
  await decompress();
} catch (error) {
  console.error(error);
}
