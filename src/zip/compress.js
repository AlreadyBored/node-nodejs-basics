import path from "path";
import * as url from "url";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

export const compress = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const archiveSource = path.resolve(_dirname, "files", "fileToCompress.txt");
  const archivDestination = path.resolve(_dirname, "files", "archive.gz");
  const readable = createReadStream(archiveSource);
  const writable = createWriteStream(archivDestination);

  const gzip = createGzip();

  pipeline(readable, gzip, writable, (error) => {});
};
compress();
