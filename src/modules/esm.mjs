import { createServer as createServerHttp } from "http";
import { release, version } from "os";
import path from "path";
import "./files/c.js";

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const file = Math.random() > 0.5 ? "./files/a.json" : "./files/b.json";

export const unknownObject = await import(file, {
  assert: { type: "json" },
});

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
