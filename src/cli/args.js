const parseArgs = () => {
    const args = process.argv.slice(2)
    for (let i = 0; i < args.length - 1; i += 2) {
        console.log(`${args[i]}: ${args[i+1]}`);
      }
    };

parseArgs();