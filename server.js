const app = require("./backend/app");
const http = require("http");
const debug = require("debug")("node-angular");


const normalizedPort = val => {
    var port = parseInt(val, 10);

    if(isNaN(val)){
        // named pipe
        return val;
    }

    if(port >= 0){
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }
};

const onListening = () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe" + address : "port" + port;
    debug("Listening on:" + bind);
}

const port = normalizedPort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);