const transform = async () => {
  process.stdin.on("data", (data) => {
    console.log(data.toString().split("").reverse().join(""))
  })
};

await transform();