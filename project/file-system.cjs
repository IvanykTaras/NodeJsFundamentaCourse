
const fs = require('fs');
const path = require('path');

//fs.mkdirSync(path.resolve(__dirname, "dir1", "dir2", "dir3"), { recursive: true });

// console.log("start");
// fs.mkdir(path.resolve(__dirname, "dir1"), (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("dir created");
// })
// console.log("end");


// fs.rmdir(path.resolve(__dirname, "dir1"), (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("dir removed");
// })


// fs.writeFile(path.resolve(__dirname, "dir1", "file.txt"), "Hello World", (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("file created");
//     fs.appendFile(path.resolve(__dirname, "dir1", "file.txt"), "2 save", (err) => {
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log("file updated");
//     })
// })

const writeFileAsync = async (path,data)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(201);
        })
    });
}

const appendFileAsync = async (path,data)=>{
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(202);
        })
    });
}

const readFileAsync = async (path)=>{
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        })
    });
}

const removeFileAsync = async (path)=>{
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(204);
        })
    });
}

console.log("start");
writeFileAsync(path.resolve(__dirname, "dir1", "file.txt"), "Hello World")
    .then((res) => appendFileAsync(path.resolve(__dirname, "dir1", "file.txt"), ". New data."))
    .then((res) => appendFileAsync(path.resolve(__dirname, "dir1", "file.txt"), ". New data."))
    .then((res) => appendFileAsync(path.resolve(__dirname, "dir1", "file.txt"), ". New data."))
    .then((res) => appendFileAsync(path.resolve(__dirname, "dir1", "file.txt"), ". New data."))
    .then(()=>console.count("finish"))
    .then(()=>readFileAsync(path.resolve(__dirname, "dir1", "file.txt")))
    .then((data)=>console.log(data))
    .then(()=>removeFileAsync(path.resolve(__dirname, "dir1", "file.txt")))
    .then(()=>fs.rmdir(path.resolve(__dirname, "dir1"), (err) => {}))
    .catch((err) => console.log(err))
console.log("end");

// readFileAsync(path.resolve(__dirname, "dir1", "file.txt"))
//     .then((data) => console.log(data))
//     .then(()=>console.count("finish"))
//     .catch((err) => console.log(err))

console.log("text: ",process.env.TEXT);