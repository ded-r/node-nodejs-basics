const parseEnv = () => {
    const env = process.env;
    const results = [];

    Object.entries(env).forEach(([key, value]) => {
        if (key.startsWith("RSS_")) {
            results.push(`${key}=${value}`);
        }
    });

    console.log(results.join("; "));
};

parseEnv();