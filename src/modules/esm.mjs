import path from "path";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";

import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };
import "./files/c.js";

const PORT = 3000;
const unknownObject = Math.random() > 0.5 ? a : b;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is '${path.sep}'`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
