const parseArgs = () => {
    // Get command line arguments, excluding the first two (node and script path)
    const args = process.argv.slice(2);

    // Create an empty array to store the result
    const result = [];

    // Iterate over the arguments, incrementing by 2, because of the key-value pairs
    for (let i = 0; i < args.length; i += 2) {
        // Remove the "--" prefix
        const propName = args[i].replace("--", "");
        const propValue = args[i + 1];
        result.push(`${propName} is ${propValue}`);
    }

    console.log(result.join(', '));
};

// Call the parseArgs function
parseArgs();