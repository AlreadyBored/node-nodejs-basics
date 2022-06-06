export const parseEnv = () => {
    Object.entries(process.env).map(([processName, processValue ]) => {
        if (processName.includes('RSS_')) {
            console.log(`${processName}:${processValue}`)
        }
    });
};
