const transform = async () => {
    // On data in console tranfer it into console stream.
    process.stdin.on('data', data => {
        process.stdout.write(data);
      });
};

await transform();