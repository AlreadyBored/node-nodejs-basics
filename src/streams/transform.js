import stream from "node:stream/promises";

const transform = async () => {
  try {
    await stream.pipeline(
      process.stdin,
      async function* (source) {
        for await (const chunk of source) {
          const transformedChunk = chunk.toString().split("").reverse().join("");
          yield transformedChunk;
        }
      },
      process.stdout,
    );
  } catch (error) {
    console.error("Failed to transform stream:", error);
  }
};

await transform();

