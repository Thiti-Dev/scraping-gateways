import { Server } from 'http';
type KnownProcessErrorType = {
    message:string
}
export function HANDLE_unhandled_promise_rejections(server: Server):void{
    console.log('[HANDLER]: UnhandledRejection is handled')
    process.on('unhandledRejection', (err:KnownProcessErrorType, promise: Promise<any>) => {
        console.log(`Error: ${err.message}`);
        // Close server & exit process
        server.close(() => process.exit(1));
    });
}