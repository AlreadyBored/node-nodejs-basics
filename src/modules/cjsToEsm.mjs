import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

const random = Math.random();
let unknownObject;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { assert: { type: "json" } });
} else {
  unknownObject = await import("./files/b.json", { assert: { type: "json" } });
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

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
