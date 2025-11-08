import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readFile } from "node:fs/promises";

// Reconstruct __filename and __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamically import CommonJS module
await import(pathToFileURL(path.join(__dirname, "files", "c.cjs")).href);

// Dynamically import JSON files
const aJson = JSON.parse(
  await readFile(path.join(__dirname, "files", "a.json"), "utf-8")
);
const bJson = JSON.parse(
  await readFile(path.join(__dirname, "files", "b.json"), "utf-8")
);

// Randomly select one JSON object
const random = Math.random();
const unknownObject = random > 0.5 ? aJson : bJson;

// Log system info
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

// Create HTTP server
const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

// Log selected JSON object
console.log(unknownObject);

// Start server
myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

// Export values
export { unknownObject, myServer };
