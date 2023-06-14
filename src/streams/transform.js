const transform = async () => {
  process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    const reversed = input.split("").reverse().join("");
    process.stdout.write(reversed + "\n");
  });
};

await transform();
