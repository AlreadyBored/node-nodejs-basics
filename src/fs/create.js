import fs from "node:fs/promises";
import { existsWrapper, joinToURL } from "../helpers.js";

const crateOrThrow = existsWrapper({
  onDoesntExists: (path) =>
    fs.writeFile(path, "I am fresh and young", { encoding: "utf-8" }),
});

const create = async () => {
  const resultFilePath = joinToURL(import.meta.url, "files", "fresh.txt");

  return crateOrThrow(resultFilePath);
};

await create();
