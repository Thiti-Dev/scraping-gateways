import express from 'express'
import { HANDLE_unhandled_promise_rejections } from './handlers/server';
import { INIT_Middlewares } from './middlewares';
import { INIT_Routes } from './routes';
const app = express()
INIT_Middlewares(app) // init all middlewares
INIT_Routes(app) // init all routes
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(
        `The server is currently running on port ${PORT}`
    );
});
HANDLE_unhandled_promise_rejections(server)