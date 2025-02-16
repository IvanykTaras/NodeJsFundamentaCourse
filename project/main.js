import { startCrypto } from "./crypto.js";
import { startPath } from "./path.js";
import { startProcess } from "./process.js";


// crypto for threading
console.log("Treading ====>");
startCrypto();

// process
console.log("Process ====>");
startProcess();

// path
startPath();