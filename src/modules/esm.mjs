import path from "node:path";
import { fileURLToPath } from "node:url";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import "./files/c.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

export const { default: unknownObject } =
  random > 0.5
    ? await import("./files/a.json", {
        assert: { type: "json" },
      })
    : await import("./files/b.json", {
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
