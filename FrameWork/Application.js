const http = require('http');
const EventEmmiter = require('events');

module.exports = class Application{
    constructor(){
        this.emmiter = new EventEmmiter();
        this.server = this.#createServer();
        this.port = process.env.PORT || 3100;
        this.middlewares = [];
    }


    addRouter(router){
        Object.keys(router.endpoints).forEach(path => {
            const methods = router.endpoints[path];
            Object.keys(methods).forEach(method => {
                
                this.emmiter.on(this.#getRouteMask(path, method), (req, res) => {
                    const handler = methods[method];
                    this.middlewares.forEach(middleware => middleware(req, res));
                    handler(req, res);
                });
            });
        });
    }

    listen(callback){
        this.server.listen(this.port, callback);
    }

    use(middleware){
        this.middlewares.push(middleware);
    }

    #createServer(){
        return http.createServer((req, res) => {
            console.info(`Request ${req.method} ${req.url}`);
            console.log("url",req.url)

            let body = '';
            req.on('data', (chunck)=>{
                body += chunck;
            });

            req.on('end', ()=>{
                console.log("end:"+body)
                if(body){
                    req.body = JSON.parse(body);
                }

                const emit = this.emmiter.emit(`${req.url}:${req.method}`, req, res);
                if(!emit){
                    res.end('404');
                }
            });
            
        });
    }

    #getRouteMask(path,method){
        return `${path}:${method}`;
    }
}