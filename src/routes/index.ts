import express,{Express} from 'express'
import npms from './npm';
export function INIT_Routes(app:Express){
    app.use('/api/npm', npms)
}