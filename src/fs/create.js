import fs from "fs";
import path from "path";

const create = async () => {
    const content = "I am fresh and young";
    const filePath = path.join(import.meta.dirname, "files/fresh.txt");

    if (fs.existsSync(filePath)) {
        throw new Error("FS operation failed");
    }

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        } else {
            console.log("Success");
        }
    });
};

await create();
