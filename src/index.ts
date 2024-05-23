import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import config from './config';
import userRouter from './routers/user.router';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(config.DB_URI);

const app: Express = express();

const corsConfig: CorsOptions = {
  origin: config.CORS_ORIGIN,
  credentials: true,
  exposedHeaders: ['Authorization']
}

app.use(cors(corsConfig));
app.use(express.json());
app.use('/user', userRouter);

(async function bootstrap () {
    try {
      await sequelize.sync();
      app.listen(config.PORT, () => {
        console.log(`[server]: Server is running on port ${config.PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  })();