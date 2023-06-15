const parseEnv = () => {
  try {
    const envVariables = process.env;
    const rssVariables = Object.entries(envVariables)
      .filter(([name, value]) => name.startsWith('RSS_'));

    for (const [name, value] of rssVariables) {
      process.stdout.write(`${name}=${value}; `);
    }
    console.log('');
  } catch (error) {
    throw error;
  }
};

parseEnv();
