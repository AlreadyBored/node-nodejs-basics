const parseEnv = () => {
    const rssVars = Object.entries(process.env) // Get all environment variables
        .filter(([varName]) => varName.startsWith("RSS_")) // Filter those having the RSS_ prefix
        .map(([varName, varValue]) => `${varName}=${varValue}`) // Map them to a formated string
        .join('; '); //Separate them with a semicolon

    console.log(rssVars);
};

// Call the parseEnv function
parseEnv();