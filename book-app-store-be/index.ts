import {app, logger} from "./src/app";
import connectDb from "./src/database";
import {APP_PORT} from "./src/common/environment";

async function bootstrap() {
    try {
        const client = await connectDb();
        await client.db('admin').command({ping: 1});
        logger.info('Connected to DB successfully');
    } catch (err) {
        const {message} = err as { message: string }
        logger.error(message)
    }
}

bootstrap().then(() => {
    app.listen(APP_PORT, () => {
        logger.info(`Server started on port ${APP_PORT}`)
    })
});