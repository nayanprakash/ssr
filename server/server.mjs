import express from 'express';
import morgan from 'morgan';
import path from 'path';
import renderer from './renderer';
const app = express();

const PORT = process.env.port || 4000

app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname,'..', "build")));

app.use('*', renderer);

app.listen(PORT, console.log('listening on 4000'));

// Handle the bugs somehow
app.on("error", error => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
});