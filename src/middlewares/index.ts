import express,{Express} from 'express'
export function INIT_Middlewares(app:Express){
    app.use(express.json())
}