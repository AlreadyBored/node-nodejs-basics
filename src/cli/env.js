import getPath from "../helper/getPath.js";
import read from "../fs/read.js";

const parseEnvFile = async (filePath) => {
  const defaultPath = getPath(import.meta, "..", "..", ".env");
  const envPath = filePath || defaultPath;

  const data = await read(envPath);
  const lines = data.split("\n");

  for (const line of lines) {
    let [key, value] = line.split("=").map((v) => v.trim());
    if (!value) continue;

    if (
      (value[0] == '"' && value[value.length - 1] == '"') ||
      (value[0] == "'" && value[value.length - 1] == "'")
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
};

const parseEnv = async (startWith = "") => {
  await parseEnvFile().catch();

  const list = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith(startWith)) {
      list.push(`${key}=${value}`);
    }
  }

  console.log(list.join("; "));
};

await parseEnv("RSS_");
