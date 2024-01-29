import "process"
const parseEnv = () => {
    try {
        for (const [key, value] of Object.entries(process.env)) {
            if (key.startsWith("RSS_")){
                console.log(`${key}=${value}`);
            }
          }
        } catch (error) {
            throw Error(`CLI operation failed: ${error}`)
            }};

parseEnv();