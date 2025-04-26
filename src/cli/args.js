const parseArgs = () => {
    const args = process.argv;
    // console.log(args);

    const results = [];

    args.forEach((arg, index) => {
        if (arg.startsWith("--")) {
            const key = arg.slice(2);
            const value = args[index + 1];
            results.push(`${key} is ${value}`);
        }
    });

    console.log(results.join(", "));
};

parseArgs();
