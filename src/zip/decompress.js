import path from "path";
import * as url from "url";
import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
export const decompress = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const archiveSource = path.resolve(_dirname, "files", "fileToCompress.txt");
  const archivDestination = path.resolve(_dirname, "files", "archive.gz");
  const readable = createReadStream(archivDestination);
  const writable = createWriteStream(archiveSource);

  const gzip = createUnzip();

  pipeline(readable, gzip, writable, (error) => {});
};
decompress();
