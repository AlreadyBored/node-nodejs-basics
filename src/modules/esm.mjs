import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import "./files/c.js";
import { dirname, filename } from "../helpers.js";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  const aModule = await import("./files/a.json", { assert: { type: "json" } });
  unknownObject = aModule.default;
} else {
  const bModule = await import("./files/b.json", { assert: { type: "json" } });
  unknownObject = bModule.default;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename(import.meta.url)}`);
console.log(`Path to current directory is ${dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
