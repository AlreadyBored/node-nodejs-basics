import path, { dirname } from "path";
import { release, version } from "os";
import { fileURLToPath } from "url";
import { createServer as createServerHttp } from "http";
import "./files/c";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

const { default: unknownObject } =
  random > 0.5
    ? await import("./files/a.json", { assert: { type: "json" } })
    : await import("./files/b.json", { assert: { type: "json" } });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

module.exports = {
  unknownObject,
  createMyServer,
};
