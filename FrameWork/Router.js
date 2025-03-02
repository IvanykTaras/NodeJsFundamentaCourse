const EventEmmiter = require('events');
const emmiter = new EventEmmiter();


module.exports = class Router{
    constructor(){
        this.endpoints = {};
    }

    request(method = "GET", path, hadler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {};
        }

        const endpoint = this.endpoints[path];

        if(endpoint[method]){
            throw new Error(`Request ${method} for ${path} already exists`);
        }

        endpoint[method] = hadler;
        // emmiter.on(`${method}:${path}`, (req,res) => {
        //     hadler(req,res);
        // });
    }


    get(path, handler){
        this.request('GET', path, handler);
    }
    post(path, handler){
        this.request('POST', path, handler);
    }
    put(path, handler){
        this.request('PUT', path, handler);
    }
    delete(path, handler){
        this.request('DELETE', path, handler);
    }
    patch(path, handler){
        this.request('PATCH', path, handler);
    } 
}