// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');

// const random = Math.random();

// let unknownObject;

// if (random > 0.5) {
//     unknownObject = require('./files/a.json');
// } else {
//     unknownObject = require('./files/b.json');
// }

// console.log(`Release ${release()}`);
// console.log(`Version ${version()}`);
// console.log(`Path segment separator is "${path.sep}"`);

// console.log(`Path to current file is ${__filename}`);
// console.log(`Path to current directory is ${__dirname}`);

// const myServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });

// const PORT = 3000;

// console.log(unknownObject);

// myServer.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//     console.log('To terminate it, use Ctrl+C combination');
// });

// module.exports = {
//     unknownObject,
//     myServer,
// };

import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import c from "./files/c.cjs";
import { createRequire } from "node:module";

const __filename = import.meta.filename;

const __dirname = import.meta.dirname;

const random = Math.random();

let unknownObject;

const require = createRequire(import.meta.url);
if (random > 0.5) {
    unknownObject = require("./files/a.json");
} else {
    unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject };
