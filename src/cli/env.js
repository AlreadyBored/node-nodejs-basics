import fc from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parseEnv = () => {
  const envPath = path.resolve(__dirname, "../../", ".env");
  fc.readFile(envPath, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    const lines = data.split("\n");
    const rssLines = lines
      .map((line) => line.trim())
      .filter(
        (line) =>
          line.startsWith("RSS_") && !line.startsWith("#") && line.includes("=")
      );

    if (rssLines.length > 0) {
      const output = rssLines.join("; ");
      console.log(output);
    } else {
      console.log("env not has values with RSS_");
    }
  });
};

parseEnv();
