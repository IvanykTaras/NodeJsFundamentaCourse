import path from 'path';



export const startPath = ()=>{

    console.log("join",path.join("first", "second", "third"));
    console.log("resolve",path.resolve("first", "second", "third"));
    const fullpath = "first/second/third";
}


